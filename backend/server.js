require("dotenv").config();
const express = require("express");
const http = require("http");
const {Server} = require("socket.io");
const session = require("express-session");
const mysql = require("mysql");
const app = express();
const port = 5003;
const cors = require("cors");
const bcrypt = require("bcrypt");

const generateRandomString = (length) => {
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {},
  })
);


const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
  },
});

io.on("connection", (socket) => {
  console.log("A users connected");

  socket.on("chat message", (message) => {
    io.emit("chat message", message);
  });

  socket.on("disconnect", () => {
    console.log("A users disconnected");
  });
});

//Database Conncection
const connection = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  user: "root",
  password: "WWFOTmlDa0lTaEdheTg9PUQK",
  database: "communicationSystem",
  port: 3306,
});

connection.connect((err) => {
  if (err) {
    console.error("Error connecting to MariaDB: " + err.stack);
    return;
  }
  console.log("Connected to MariaDB as id " + connection.threadId);
});

//Endpoints
// Registration endpoint
app.post("/register", (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res
      .json({ success: false, message: "Username and password are required" });
  }

  connection.query(
    "SELECT * FROM users WHERE username = ?",
    [username],
    (err, results) => {
      if (err) {
        console.error("Error checking username: " + err.stack);
        return res.json({ success: false, message: "Registration failed" });
      }

      if (results.length > 0) {
        return res.json({ success: false, message: "Username already exists" });
      }

      bcrypt.hash(password, 10, (err, passwordHash) => {
        if (err) {
          console.error("Error hashing password: " + err.stack);
          return res.json({ success: false, message: "Registration failed" });
        }

        const user = {
          username: username,
          passwordHash: passwordHash,
        };

        connection.query("INSERT INTO users SET ?", user, (err, results) => {
          if (err) {
            console.error("Error registering user: " + err.stack);
            return res.json({ success: false, message: "Registration failed" });
          }

          return res.json({ success:true, message: "Registration successful" });
        });
      });
    }
  );
});

// Login endpoint
app.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res
      .json({ success: false, message: "Username and password are required" });
  }

  // Überprüfe, ob der Benutzer existiert
  connection.query(
    "SELECT * FROM users WHERE username = ?",
    [username],
    (err, results) => {
      if (err) {
        console.error("Error logging in: " + err.stack);
        return res.json({success: false, message: "Login failed" });
      }

      if (results.length === 0) {
        return res
          .json({success: false,message: "Invalid username or password" });
      }

      const storedPasswordHash = results[0].passwordHash;

      bcrypt.compare(password, storedPasswordHash, (err, passwordMatch) => {
        if (err) {
          console.error("Error comparing passwords: " + err.stack);
          return res.json({success: false, message: "Login failed" });
        }

        if (!passwordMatch) {
          // Passwörter stimmen nicht überein
          return res
            .json({ success: false, message: "Invalid username or password" });
        }

        // Login erfolgreich
        req.session.user = results[0];
        return res.json({ success: true, message: "Login successful", user: results[0] });
      });
    }
  );
});

// Logout endpoint
app.get("/logout", (req, res) => {
  // Clear the user session or token here
  req.session.destroy((err) => {
    if (err) {
      console.error("Error logging out: " + err.stack);
      return res.json({ success: false, message: "Logout failed" });
    }
    return res.json({ success:true, message: "Logout successful" });
  });
});

// Create a new channel
app.post("/create-channel", (req, res) => {
  const { channelName } = req.body;

  if (!channelName) {
    return res.json({ success: false, message: "Channelname is required" });
  }

  const channel = {
    channelName: channelName,
    channelJoinId: generateRandomString(8),
  };

  connection.query("INSERT INTO channel SET ?", channel, (err, results) => {
    if (err) {
      console.error("Error creating channel: " + err.stack);
      return res.json({ success: false, message: "Channel creation failed" });
    }
  });

  connection.query(
    "SELECT * FROM channel WHERE channelName = ?",
    [channelName],
    (error, results) => {
      const user = req.session.user;
      console.log(results[0]);

      connection.query(
        "INSERT INTO usersChannel SET ?",
        { userId: user.userId, channelId: results[0].channelId },
        (err, results) => {
          if (err) {
            console.error("Error joining channel: " + err.stack);
            return res.json({ success: false, message: "Channel join failed" });
          }
          console.log(results);
          return res
            .json({ success: true, message: "Channel created successfully" });
        }
      );
    }
  );
});

// Get channels
app.get("/channels", (req, res) => {
  const user = req.session.user;
  connection.query(
    "SELECT c.channelId, c.channelName, c.channelJoinId FROM channel c JOIN usersChannel uc ON c.channelId = uc.channelId WHERE uc.userId = ?",
    [user.userId],
    (err, results) => {
      if (err) {
        console.error("Error fetching channels: " + err.stack);
        return res.json({ success: false, message: "Failed to fetch channels" });
      }
      return res.json({ success:true, channels: results });
    }
  );
});

// Join a channel
app.post("/join-channel", (req, res) => {
  const { joinId } = req.body;

  if (!joinId) {
    return res.json({ success: false, message: "ChannelJoinId is required " });
  }

  const channelId = connection.query(
    "SELECT * FROM channel WHERE channelJoinId = ?",
    joinId,
    (err, results) => {
      if (err) {
        console.error("Error fetching channel ID: " + err.stack);
      }

  const userChannel = {
    userId: req.session.user.userId,
    channelId: results[0].channelId,
  };

  connection.query(
    "INSERT INTO usersChannel SET ?",
    userChannel,
    (err, results) => {
      if (err) {
        console.error("Error joining channel: " + err.stack);
        return res.json({ success: false, message: "Channel join failed" });
      }
      return res
        .json({ success:true, message: "Joined the channel successfully" });
    }
  );
    }
  );
});

// Get messages for a specific channel
app.get("/channel/:channelId/messages", (req, res) => {
  const channelId = req.params.channelId;

  connection.query(
    "SELECT * FROM message m JOIN users u ON m.userId = u.userId WHERE channelId = ? ORDER BY sentAt",
    channelId,
    (err, results) => {
      if (err) {
        console.error("Error fetching channel messages: " + err.stack);
        return res.json({ success: false, message: "Failed to fetch messages" });
      }
      return res.json({ success:true, messages: results });
    }
  );
});

// Send a message in a channel
app.post("/channel/:channelId/send-message", (req, res) => {
  const channelId = req.params.channelId;
  const { userId, content } = req.body;

  if (!userId || !content) {
    return res
      .json({ success: false, message: "User ID and message content are required" });
  }

  const message = {
    userId: userId,
    channelId: channelId,
    content: content,
  };

  connection.query("INSERT INTO message SET  ?", message, (err, results) => {
    if (err) {
      console.error("Error sending message: " + err.stack);
      return res.json({ success: false, message: "Message sending failed" });
    }
    return res.json({ success:true, message: "Message sent successfully" });
  });
});

server.listen(port , () => {
  console.log(`App is listening on port ${port }`);
});
