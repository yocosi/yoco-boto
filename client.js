require('dotenv').config();
const tmi = require("tmi.js");
const client = new tmi.client({
  connection: {
    secure: true,
    reconnect: true
  },
  identity: {
    username: process.env.TWITCH_BOT_USERNAME,
    password: process.env.TWITCH_OAUTH_TOKEN
  },
  channels: ["yocosi"]
});

module.exports = client;