const Discord = require('discord.js');
require('dotenv').config();

const client = new Discord.Client({
    intents: [
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MESSAGES
    ]
});



client.once('ready', () => {
    console.log('Ashima Discord Bot Is Online!')
})


client.login(process.env.TOKEN);
