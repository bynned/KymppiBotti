const { Client, IntentsBitField, Collection } = require('discord.js');
require('dotenv').config();
const {REST} = require("@discordjs/rest");
const { Routes } = require("discord-api-types/v9");
const { Player } = require("discord-player");

const fs = require("fs");
const path = require("path");

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
        IntentsBitField.Flags.GuildVoiceStates,
    ],
});

client.on('ready', (c) => {
    console.log(`${c.user.tag} is ready`);
});

client.on('messageCreate', (message) => {
    if (message.author.bot) return; // So that it doesn't spam "bro" forever
    if (message.content === 'bro' || message.content === 'äijä') {
        message.reply('bro');
    }
});

const commands = [];
client.commands = new Collection();

const commandsPath = path.join(__dirname, "commands");
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith(".js"));

for (const file of commandFiles) {
    const filePath = path.join(commandsPath, file);
    const command = require(filePath);

    client.commands.set(command.data.name, command);
    commands.push(command);
}

client.login(process.env.BOT_TOKEN);
