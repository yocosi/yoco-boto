const client = require('./client');

module.exports = {
  discordMessage: () => {
    client.say('yocosi', "N'hésitez pas à nous rejoindre sur le serveur discord: https://discord.gg/Sq4xthdF");
  },

  drinkMessage: () => {
    client.say('yocosi', "N'oubliez pas de vous hydrater, c'est important !");
  },

  followSubMessage: () => {
    client.say('yocosi', "Si vous aimez mon contenu n'hésitez surtout pas à follow ou sub, c'est le meilleur soutien possible!");
  }
};
