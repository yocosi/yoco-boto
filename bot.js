const client = require('./client');
const commands = require('./commands');
const timers = require('./timers');

// Permet de reconnaître une commande et son argument si il y en a un
const regexpCommand = new RegExp(/^!([a-zA-Z0-9]+)(?:\W+)?(.*)?/);

client.connect();
client.on('message', (channel, tags, message, self) => {

  // Variable s'assurant que la personne écrivant la commande n'est pas un bot
  const isNotBot = tags.username.toLowerCase() !== process.env.TWITCH_BOT_USERNAME.toLowerCase();
  if (!isNotBot) return; // Si c'est le bot qui essaie d'écrire une commande, on sort du script

  console.log(`${tags.username}: ${message}`);
  // La méthode 'match' va retourner un tableau de valeur ou l'index 0 est le !, l'index 1 la commande et l'index 2 l'argument de la commande
  const [raw, command, argument] = message.match(regexpCommand);

  // La valeur 'command' va chercher la commande correspondante dans l'objet 'commands'. On ajoute un objet vide pour éviter une erreur de destructuration
  // On recupère ensuite la réponse de notre commande
  const { response } = commands[command] || {};

  if (typeof response === "function") {
    client.say(channel, response(argument));
  } else if (typeof response === "string") {
    client.say(channel, response);
  }

});

client.on('connected', (adress, port) => {
  setInterval(() => {
    timers.discordMessage();
  }, 3600000)

  setInterval(() => {
    timers.drinkMessage();
  }, 1800000)
});



