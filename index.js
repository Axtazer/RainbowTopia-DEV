const fs = require('fs');
const { Client, Collection, Intents } = require('discord.js');
const { token } = require('./config.json');

const handleCommand = require('./helpers/command');
const handleSelectMenu = require('./helpers/select-menu');

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.commands = new Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.data.name, command);
}

client.once('ready', () => {
    console.log('Bot démarré')
    console.log(`En tant que ${client.user.tag}!`);
});

client.on('interactionCreate', async interaction => {
    if (interaction.isCommand()) handleCommand(client, interaction);
    if (interaction.isSelectMenu()) handleSelectMenu(interaction);
});

client.login(token);