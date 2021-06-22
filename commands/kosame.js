exports.run = async(client, message, args) => {
    const quotes = [
        "Kosame Cuts Herself To Activate Her Magical Girl Powers",
        "Kosame Practiced Selfharm Before She Met The Other Magical Girls",
        "Kosame Speaks In A Sad Way",
        "Kosame Has A Sad Look On Her Face Usually",
        "Kosame Gets Anxious When People Raise Their Voices At Her",
        "Kosame Is The Mastermind Behind The Plan To Take Out The System Admins"
    ]
    let pick = quotes [Math.floor(Math.random() * quotes.length)];

    const Discord = require("discord.js")

    const Kosame = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRjVC5vr4YvEZhaxNAes5BqWtcjkQ8jqK50Q&usqp=CAU"

    const embed = new Discord.MessageEmbed()
         .setTitle("Kosame Facts")
         .setDescription(pick)
         .setThumbnail(Kosame)
         .setColor("ffb7c5")
         
    message.channel.send(embed)
}