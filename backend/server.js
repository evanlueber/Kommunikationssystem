require('dotenv').config();
const express = require('express');
const https = require('https');
const socketIo = require('socket.io');
const session = require('express-session');
const mysql = require('mysql');
const app = express();
const server = https.createServer(app);
const io = socketIo(server);
const port = 5003;

const generateRandomString = (length) => {
  let result = '';
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};


app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {}
  })
)

io.on('connection', (socket) => {
  console.log('A users connected');

  socket.on('chat message', (message) => {

    io.emit('chat message', message);
  });

  socket.on('disconnect', () => {
    console.log('A users disconnected');
  });
});

//Database Conncection
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "WWFOTmlDa0lTaEdheTg9PUQK",
  database: "communicationSystem",
  port: 3306
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
app.post('/register', (req, res) => {
  const { username, passwordHash } = req.body;

  if (!username || !passwordHash) {
    return res.status(400).json({ message: 'Username and password are required' });
  }

  const user = {
    username: username,
    passwordHash: passwordHash
  };

  connection.query('INSERT INTO users SET ?', user, (err, results) => {
    if (err) {
      console.error('Error registering user: ' + err.stack);
      return res.status(500).json({ message: 'Registration failed' });
    }
    return res.status(200).json({ message: 'Registration successful' });
  });
});

// Login endpoint
app.post('/login', (req, res) => {
  const { username, passwordHash } = req.body;

  if (!username || !passwordHash) {
    return res.status(400).json({ message: 'Username and password are required' });
  }

  connection.query('SELECT * FROM users WHERE username = ? AND passwordHash = ?', [username, passwordHash], (err, results) => {
    if (err) {
      console.error('Error logging in: ' + err.stack);
      return res.status(500).json({ message: 'Login failed' });
    }

    if (results.length === 0) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }

    // Store user session or token here
    req.session.userId = results[0].UserId;
    return res.status(200).json({ message: 'Login successful' });
  });
});

// Logout endpoint
app.get('/logout', (req, res) => {
  // Clear the user session or token here
  req.session.destroy((err) => {
    if (err) {
      console.error('Error logging out: ' + err.stack);
      return res.status(500).json({ message: 'Logout failed' });
    }
    return res.status(200).json({ message: 'Logout successful' });
  });
});

// Create a new channel
app.post('/create-channel', (req, res) => {
  const { channelName } = req.body;

  if (!channelName) {
    return res.status(400).json({ message: 'Channel name is required' });
  }

  const channel = {
    channelName: channelName,
    channelJoinId: generateRandomString(8)
  };

  connection.query('INSERT INTO channel SET ?', channel, (err, results) => {
    if (err) {
      console.error('Error creating channel: ' + err.stack);
      return res.status(500).json({ message: 'Channel creation failed' });
    }
    connection.query('INSERT INTO usersChannel SET ?', {userId:req.session.userId, channelId:results.channelId}, (err, results) => {
      if (err) {
        console.error('Error joining channel: ' + err.stack);
        return res.status(500).json({ message: 'Channel join failed' });
      }
      return res.status(200).json({ message: 'Channel created successfully' });
    }
    );
  });
});

// Get all channels
app.get('/channels', (req, res) => {
  connection.query('SELECT * FROM channel c JOIN usersChannel uc ON c.channelId = uc.channelId WHERE uc.userId = ?', [req.session.userId], (err, results) => {
    if (err) {
      console.error('Error fetching channels: ' + err.stack);
      return res.status(500).json({ message: 'Failed to fetch channels' });
    }
    return res.status(200).json({ channels: results });
  });
});

// Join a channel
app.post('/join-channel', (req, res) => {
  const { userId, joinId } = req.body;

  if (!userId || !joinId) {
    return res.status(400).json({ message: 'User ID and Channel ID are required' });
  }

  const channelId = connection.query('SELECT channelId FROM channel WHERE channelJoinId = ?', joinId, (err, results) => {
    if (err) {
      console.error('Error fetching channel ID: ' + err.stack);
    }
    return results[0].ChannelId;
  })

  const userChannel = {
    userId: userId,
    channelId: channelId
  };

  connection.query('INSERT INTO usersChannel SET ?', userChannel, (err, results) => {
    if (err) {
      console.error('Error joining channel: ' + err.stack);
      return res.status(500).json({ message: 'Channel join failed' });
    }
    return res.status(200).json({ message: 'Joined the channel successfully' });
  });
});

// Get messages for a specific channel
app.get('/channel/:channelId/messages', (req, res) => {
  const channelId = req.params.channelId;

  connection.query('SELECT * FROM message WHERE channelId = ? ORDER BY sentAt', channelId, (err, results) => {
    if (err) {
      console.error('Error fetching channel messages: ' + err.stack);
      return res.status(500).json({ message: 'Failed to fetch messages' });
    }
    return res.status(200).json({ messages: results });
  });
});

// Send a message in a channel
app.post('/channel/:channelId/send-message', (req, res) => {
  const channelId = req.params.channelId;
  const { userId, content } = req.body;

  if (!userId || !content) {
    return res.status(400).json({ message: 'User ID and message content are required' });
  }

  const message = {
    userId: userId,
    channelId: channelId,
    content: content
  };

  connection.query('INSERT INTO message SET  ?', message, (err, results) => {
    if (err) {
      console.error('Error sending message: ' + err.stack);
      return res.status(500).json({ message: 'Message sending failed' });
    }
    return res.status(200).json({ message: 'Message sent successfully' });
  });
});

app.listen(port, () => console.log(`App is listening on port ${port}`))
server.listen(port+1, () => {
  console.log(`App is listening on port ${port+1}`);
});