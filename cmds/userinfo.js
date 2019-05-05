const Discord = module.require("discord.js");
const fs = require("fs");
let profile = require("../profile.json");
module.exports.run = async (bot,message,args) => {
    let a = message.author
    let uCoins = profile[message.author.id].coins;
    let enbed = new Discord.RichEmbed()
    .setDescription("Информация о пользователе")
    .setColor('#10c7e2')
    .addField("Имя",a.username)

    .addField("Тег",a.tag)
    .addField(":coffee: Ваш баланс", uCoins)
    .addField("👤 Дискриминатор",a.discriminator)
    .addField("🔑 Создание аккаунта",a.createdAt)
    .addField("🆔",a.id)
    .addField("Вы бот?",a.bot)
    .setThumbnail(a.avatarURL)

    bot.send(enbed);
};
module.exports.help = {
    name: "me"
};
