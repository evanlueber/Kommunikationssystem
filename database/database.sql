DROP DATABASE IF EXISTS communicationSystem;

CREATE DATABASE communicationSystem;

USE communicationSystem;

DROP TABLE IF EXISTS users;
CREATE TABLE users (
    userId INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    passwordHash VARCHAR(255) NOT NULL   
);

DROP TABLE IF EXISTS channel;
CREATE TABLE channel (
    channelId INT AUTO_INCREMENT PRIMARY KEY,
    channelName VARCHAR(255) NOT NULL,
    channelJoinId VARCHAR(8) NOT NULL
);

DROP TABLE IF EXISTS usersChannel;
CREATE TABLE usersChannel (
    userChannelId INT AUTO_INCREMENT PRIMARY KEY,
    userId INT NOT NULL,
    channelId INT NOT NULL,
    CONSTRAINT FK_usersChannel_User FOREIGN KEY (userId) REFERENCES users(userId) ON DELETE CASCADE,
    CONSTRAINT FK_usersChannel_Channel FOREIGN KEY (channelId) REFERENCES channel(channelId) ON DELETE CASCADE
);

DROP TABLE IF EXISTS message;
CREATE TABLE message (
    messageId INT AUTO_INCREMENT PRIMARY KEY,
    userId INT NOT NULL,
    channelId INT NOT NULL,
    content VARCHAR(255) NOT NULL,
    sentAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT FK_message_User FOREIGN KEY (userId) REFERENCES users(userId) ON DELETE CASCADE,
    CONSTRAINT FK_message_Channel FOREIGN KEY (channelId) REFERENCES channel(channelId) ON DELETE CASCADE
);