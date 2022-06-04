const { SlashCommandBuilder } = require('@discordjs/builders');
const { CommandInteraction, MessageEmbed } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('server')
        .setDescription('Donne les informations de connexion pour les joueurs Bedrock/Windows'),
    /**
     * 
     * @param {CommandInteraction} interaction 
     */
    async execute(interaction) {
        const bedrock = new MessageEmbed()
            .setColor('#9258f7')
	        .setTitle('Information de connexion au serveur')
            .setAuthor({ name: 'RainbowTopia', iconURL: 'https://rainbowtopia.fr/storage/img/icon.png'/**, url: 'https://rainbowtopia.fr'*/ })
	        .addFields(
		    { name: 'Pour Java', value: 'Version : **1.16.5-1.18.X**\nIP : `Play.RainbowTopia.fr`', inline: true },
	        )
    
        await interaction.reply({ ephemeral: false, embeds: [bedrock] });
    }
};