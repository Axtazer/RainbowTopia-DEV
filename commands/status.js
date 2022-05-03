const { SlashCommandBuilder } = require('@discordjs/builders');
const { CommandInteraction, MessageActionRow, MessageButton } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('status')
        .setDescription('Donne le lien du site du status RainbowTopia'),
    /**
     * 
     * @param {CommandInteraction} interaction 
     */
    async execute(interaction) {
        const row = new MessageActionRow()
            .addComponents(new MessageButton()
                .setLabel('Status | RainbowTopia')
                .setStyle('LINK')
                .setURL('https://status.rainbowtopia.fr')
            );

        await interaction.reply({ content: 'Clique sur bouton ci-dessous pour aller sur **Status.RainbowTopia.fr**', components: [row] });
    }
};