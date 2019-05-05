const Discord = module.require("discord.js");
const fs = require("fs");
let profile = require("../profile.json");
module.exports.run = async (bot,message,args) => {
    try{
    function send (msg){
        message.channel.send(msg);
    }


    if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("У Вас нет прав");
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    
    if(!args[0]) return send("Вы не указали пользовтеля");
    if(!rUser) return send("Пользователь не найден");
    let enbed = new Discord.RichEmbed()
    .setDescription("Бан")
    .setColor('#e22216')
    .addField("Администратор",message.author.username)
    .addField("Забанил", `${rUser.user.username}`);

    message.guild.member(rUser).ban("Незнаю, но причина есть");
    message.channel.send(enbed);
    }catch(err){
        if(err.name === "ReferenceError")
        console.log("У Вас ошибка")
        console.log(`1.${err.name}\n2.${err.message}\n3.${err.stack}`);
    }
};
module.exports.help = {
    name: "ban"
};