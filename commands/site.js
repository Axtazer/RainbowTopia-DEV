const { SlashCommandBuilder } = require('@discordjs/builders');
const { CommandInteraction, MessageActionRow, MessageButton } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('site')
        .setDescription('Donne le lien du site RainbowTopia'),
    /**
     * 
     * @param {CommandInteraction} interaction 
     */
    async execute(interaction) {
        const row = new MessageActionRow()
            .addComponents(new MessageButton()
                .setLabel('RainbowTopia')
                .setStyle('LINK')
                .setURL('https://rainbowtopia.fr')
            );

        await interaction.reply({ content: 'Clique sur bouton ci-dessous pour aller sur **RainbowTopia.fr**', components: [row] });
    }
};