const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
    let enbed = new Discord.RichEmbed()
    .setDescription("Информация о сервере")
    .setColor('#10c7e2')
    .addField("Название сервера",message.guild.name)
    .addField("Создание сервера",message.guild.createdAt)
    .addField("Вы присоединились к серверу",message.guild.joinedAt)
    .addField("Кол-Во участников",message.guild.memberCount)
    .addField("Регион",message.guild.region)
    .setThumbnail(message.guild.iconURL)

    bot.send(enbed);
};
module.exports.help = {
    name: "serverinfo"
};