const Discord = require("discord.js")
let coins = require("../profile.json")
const fs = require("fs")
const workedRecently = new Set();
module.exports.run = async (bot, message, args) => {
    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }
    if (workedRecently.has(message.author.id)) {
        message.channel.send("Подождите 24 часа и попробуйте заново. - " + message.author.username);
    } else {
        workedRecently.add(message.author.id);
        setTimeout(() => {
            workedRecently.delete(message.author.id);
        }, 86400000);
        if (getRandomInt(200) == 2) {
            coins[message.author.id].coins = Math.round(coins[message.author.id].coins - coins[message.author.id].coins/10)
            clippedEmbed = new Discord.RichEmbed()
            .setAuthor(message.author.username)
            .setColor("#ff0000")
            .addField(":gun:","You were working and you got clipped and lost 10% of your coins")
            .addField("Chance","1/100")
            message.channel.send(clippedEmbed).then(msg => {msg.delete(5000)});
        } else {
            toAdd = getRandomInt(200) + 7;
            coins[message.author.id].coins = Math.round(coins[message.author.id].coins + toAdd)
            workEmbed = new Discord.RichEmbed()
            .setAuthor(message.author.username)
            .setColor("#00ff00")
            .addField(":coffee:","Вы получили, +" + toAdd.toString() + "coffee" )
            .addField("Chance","99/100")
            message.channel.send(workEmbed).then(msg => {msg.delete(5000)});
        }
    }
}


module.exports.help = {
    name : "daily"
}
