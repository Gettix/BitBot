const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    message.delete().catch();
   
    let kissI = ["https://cdn.discordapp.com/attachments/566235609882951681/570170470125535263/YQzo.gif", "https://cdn.discordapp.com/attachments/566235609882951681/570170471442808843/FalseFarawayClam-size_restricted.gif", "https://cdn.discordapp.com/attachments/566235609882951681/570170472197652490/anime-gif-kiss-11.gif"];
    let result = Math.floor((Math.random() * kissI.length));
    let enbed = new Discord.RichEmbed()
    .setAuthor(message.author.username)
    .addField(".•°kiss°•.", `😚 ${rUser} 😚`)
    .setImage(kissI[result])
    .setColor('#F8F8FF')
    message.channel.send(enbed)
};

module.exports.help = {
    name: "kiss"
};
