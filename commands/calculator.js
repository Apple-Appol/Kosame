const Discord = require("discord.js")
const disbut = require("discord-buttons")
const { Calculator } = require("weky")
const { MessageButton } = require("discord-buttons")
exports.run = async(client, message, args) => {
    await Calculator(message)
}