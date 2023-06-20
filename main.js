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

client.login(process.env.BOT_TOKEN);
