exports.run = async(client, message, args) => {
    const { MessageEmbed } = require("discord.js")

    const user = message.mentions.members.first() || message.author

    const embed = new MessageEmbed()
         .setTitle(`${user.username}'s Avatar`)
         .setImage(user.displayAvatarURL({ dynamic: true, size: 2048 }))
         .setColor("bbd2fd")
    message.channel.send(embed)
}