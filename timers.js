const client = require('./client');

module.exports = {
  discordMessage: () => {
    client.say('yocosi', "N'hésitez pas à nous rejoindre sur le serveur discord: https://discord.gg/2nn22bpN");
  },

  drinkMessage: () => {
    client.say('yocosi', "N'oubliez pas de vous hydrater, c'est important !");
  }
};
