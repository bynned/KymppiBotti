const Discord = require('discord.js');
require('dotenv').config();

const client = new Discord.Client({ intents: [
    Discord.GatewayIntentBits.Guilds,
    Discord.GatewayIntentBits.GuildMessages
  ]});


client.once('ready', () => {
    console.log('KymppiBotti Online!');
});

client.login(process.env.BOT_TOKEN);

