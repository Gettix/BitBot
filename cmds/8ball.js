const Discord = module.require("discord.js");

module.exports.run = async (bot,message,args) => {
    if(!args[2]) return message.reply("Пожалуйста задайте полный вопрос!");
    let replies = ["Да.", "Нет.", "Я не знаю.", "Повторите вопрос позже."];

    let result = Math.floor((Math.random() * replies.length));
    let question = args.slice(1).join(" ");

    let ballembed = new Discord.RichEmbed()
    .setAuthor(message.author.tag)
    .setColor('#FF9900')
    .addField("Вопрос", question)
    .addField("Ответ", replies[result]);

    message.channel.send(ballembed);
}

module.exports.help = {
    name: "8ball"
};
