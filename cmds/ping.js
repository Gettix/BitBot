const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
    message.channel.send('pong!');
    let enbed = new Discord.RichEmbed() 
};

module.exports.help = {
    name: "ping"
};