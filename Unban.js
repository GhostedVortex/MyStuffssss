const { SlashCommandBuilder, EmbedBuilder, PermissionsBitField } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName("unban")
        .setDescription("Unbans a user")
        .addStringOption(option => option
            .setName("user")
            .setDescription("The name of the banned user to unban")
            .setRequired(true))
        .addStringOption(option => option
            .setName("reason")
            .setDescription("Reason for unbanning"))
        .setDMPermission(false),

    async execute(interaction) {
        
        if (!interaction.member.permissions.has(PermissionsBitField.BanMembers)) return await interaction.reply({
            content: `You do not have permission to use this command!`,
            ephemeral: true
        });

        const { options } = interaction;
        const userID = options.getString("userID");
        const reason = options.getString("reason");

        try {
            const user = await interaction.client.users.fetch(user);
            await interaction.guild.bans.remove(user, reason);

            const embed = new EmbedBuilder()
                .setDescription(`<@${userID}> user successfully unbanned from the server!`)
                .setTitle("Unban")
                .setColor("#ffffff")
                .setAuthor({ name: interaction.client.user.username, iconURL: interaction.client.user.displayAvatarURL() })
                .setTimestamp()
                .addFields({ name: 'Reason', value: `${reason || "No reason"}` });

            await interaction.reply({ embeds: [embed] });
        } catch (error) {
            console.error(error);
            await interaction.reply("An error occurred while unbanning!");
        }
    }
};