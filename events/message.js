const db = require("quick.db")
const Discord = require("discord.js")
const fs = require("fs")
const config = require("../config.json")
let cooldownusers = []
exports.run = async(client, message) => {
    if (message.channel.type == "dm") return;
    let prefix = config.prefix
    if (db.has("prefix")) prefix = db.get("prefix")
    if (message.content.startsWith(prefix)) {
        if (cooldownusers.includes(message.author.id)) return message.reply("Please wait a few seconds before doing a command again")
        let messageArray = message.content.split(" ")
             cmd = messageArray[0]
             args = messageArray.slice(1);
        if (!client.commands.get(cmd.slice(prefix.length))) return;
        commandfile = client.commands.get(cmd.slice(prefix.length));
        commandfile.run(client, message, args)
        cooldownusers.push(message.author.id)
        setTimeout(() => {
            cooldownusers.splice(cooldownusers.indexOf(message.author.id), 1)
        }, 0);
    } else {
        if (message.content == `<@!${client.user.id}> help`) message.reply(`My prefix for this guild is \`${prefix}\` Type \`${prefix}\`help for help`)
    }
}