
const { SlashCommandBuilder, EmbedBuilder, PermissionsBitField } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName("ban")
        .setDescription("Bans a user from the server")
        .addUserOption(option => option
            .setName("user")
            .setDescription("User to be banned"))
        .addStringOption(option => option
            .setName("user_id")
            .setDescription("The ID of the user to be banned"))
        .addStringOption(option => option
            .setName("reason")
            .setDescription("Reason for ban"))
        .setDMPermission(false),

    async execute(interaction) {
        
        if (!interaction.member.permissions.has(PermissionsBitField.BanMembers)) return await interaction.reply({
            content: `You do not have permission to use this command!`,
            ephemeral: true
        });

        const { options } = interaction;
        const userOption = options.getUser("user");
        const userIdOption = options.getString("user_id");
        const reason = options.getString("reason");

        let memberToBan;

        if (userOption) {
            memberToBan = userOption;
        } else if (userIdOption) {
            try {
                memberToBan = await interaction.client.users.fetch(userIdOption);
            } catch (error) {
                console.error(error);
                return await interaction.reply("No such user found!");
            }
        } else {
            return await interaction.reply("You did not enter a user or ID for banning!");
        }

        if (memberToBan, memberToBan.id === interaction.user.id) {
            return await interaction.reply("You can't ban yourself!");
        }

        try {
            const banOptions = { reason };
            const guildMember = interaction.guild.members.cache.get(memberToBan.id);

            if (guildMember) {
                if (guildMember.roles.highest.position >= interaction.member.roles.highest.position) {
                    return await interaction.reply(`You cannot ban ${guildMember.user} because they have a higher/same role!`);
                }

                await guildMember.ban(banOptions);
            } else {
                await interaction.guild.bans.create(memberToBan, banOptions);
            }

            const embed = new EmbedBuilder()
                .setDescription(`${userID} user successfully banned from the server!`)
                .setTitle("Ban")
                .setColor("#ffffff")
                .setAuthor({ name: interaction.client.user.username, iconURL: interaction.client.user.displayAvatarURL() })
                .setTimestamp()
                .addFields({ name: 'Reason', value: `${reason || "No reason"}` });

            await interaction.reply({ embeds: [embed] });
        } catch (error) {
            console.error(error);
            await interaction.reply("An error occurred while banning!");
        }
    }
};