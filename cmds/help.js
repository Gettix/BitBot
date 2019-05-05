const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
    let enbed = new Discord.RichEmbed()
    .setDescription("Помощь")
    .setColor('#4B0082')
    .addField("Модерация","kick(c!kick (пинг пользователя)) clear(c!clear (количество сообщений))  warn(c!warn (пинг пользователя))   unwarn(c!unwarn (пинг пользователя))  ban(c!ban (пинг пользователя))  say(c!say (ваше сообщение))  tempmute(c!tempmute (пинг пользователя) (сек./мин./час./дни))  report(c!report (пинг пользователя) (Причина или описание))")
    .addField("Экономика", "coffee (c!coffee)  pay (c!pay (имя получателя) (количество валюты)) daily(c!daily)")
    .addField("Развлечения", "8ball(c!8ball (вопрос))  meme(c!meme)  rps(c!rps (r/p/s)  slots(c!slots)")
    .addField("Информация","serverinfo,userinfo,help")
    .addField("Social", "embarassed, kiss (c!kiss (mmm#2222)), hug(c!hug (mmm#2222)), crossover")
    .addField("RolePlay", "health (c!health), attack (c!attack (primer#2222)), attack2 (c!attack2 (primer#2222)), kiss (c!kiss (primer#2222)), kill (c!kill (primer#2222))")
    .addField("Пригласить","https://discordapp.com/oauth2/authorize?client_id=551625781818818590&permissions=8&scope=bot")
    .setThumbnail(message.guild.iconURL)
    .setImage('https://cdn.discordapp.com/attachments/566235609882951681/566235760311926784/rylgIUmPW.gif')

    bot.send(enbed);
};
module.exports.help = {
    name: "help"
};
