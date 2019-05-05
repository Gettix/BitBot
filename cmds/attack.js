const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    message.delete().catch();
    message.channel.send(`${message.author} attack ${rUser} -10 hp`);
    let enbed = new Discord.RichEmbed() 
};

module.exports.help = {
    name: "attack"
};
