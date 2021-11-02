// Liste de toutes les commandes
const commands = {
  bot: {
    response: "Bonjour à tous je suis YocoBoto l'humble serviteur de mon créateur Yoco le gros que vous pouvez voir streamer ici présent ! Passez un bon moment sur ce magnifique stream du plaisir :D"
  },
  discord: {
    response: "https://discord.gg/Sq4xthdF"
  },
  github: {
    response: "https://github.com/yocosi"
  },
  ca: {
    response: "4563-6013-3726"
  },
  twitter: {
    response: "https://twitter.com/ZiGZaG_Dokey"
  },
  commands: {
    response: "Voici le fichier texte qui regroupe toutes les commandes: https://github.com/yocosi/YocoBoto/blob/main/_commandList.txt"
  },
  pub: {
    response: (argument) => `Allez tous follow la chaîne de https://twitch.tv/${argument}`
  },
  hb: {
    response: (argument) => `C'est l'anniversaire de ${argument} aujourd'hui, tout le monde lui souhaite un joyeux anniversaire <3 <3`
  },
  dice: {
    response: (argument) => {
      // Check si l'argument qui a été rentré est bien un nombre entier

      if (!isNaN(argument)) {
        let random = Math.floor(Math.random() * (argument) + 1);
        return `${random}`;
      } else {
        return "L'argument n'est pas valide, le jet de dés est impossible";
      }
    }
  }
}

module.exports = commands;
