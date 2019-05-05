const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
    message.delete().catch();

    message.channel.send(`${message.author} crossed ✝️`);
    let enbed = new Discord.RichEmbed() 
};

module.exports.help = {
    name: "crossover"
};
