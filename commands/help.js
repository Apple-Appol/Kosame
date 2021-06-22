exports.run = async(client, message, args) => {
    const { MessageEmbed } = require("discord.js")
    let embed = new MessageEmbed()
         .setTitle("Help")
         .setDescription("| av/avatar | \n | kosame |")
         .setColor("ffb7c5")
         .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
         message.channel.send(embed)
}