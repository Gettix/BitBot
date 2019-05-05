const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
    message.delete().catch();
    message.channel.send(`${message.author} health +30 hp`);
    let enbed = new Discord.RichEmbed() 
};

module.exports.help = {
    name: "health"
};
