const Discord = module.require("discord.js");

module.exports.run = async (bot,message,args) => {
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    let replies = ["Котан🐱 hp:10 lvl:1", "Собака🐶 hp:15 lvl:1", "Дельфин🐬 hp:40 lvl:4", "Лягуха🐸 hp:2 lvl:1", "Птичка🐦 hp:3 lvl:1", "Крокодил🐊 hp: 60 lvl: 10", "Волк🐺 hp:100 lvl:7", "Медведь🐻 hp:150 lvl:23", "Вы никого не поймали🍃", "Вы потеряли след🐾", "Вы услышали как в кустах что то шевелиться, но когда подошли, то обнаружили что это был кабан🐗", "Кит🐋 hp:500 lvl:50", "Вы погибли при охоте на Дракона🐲", "Вы поймали существо из красной книги, вам выписали штраф, а затем вы отпустили животное 🦅", "Вы нашли котлетку с пюрешкой🙃"];

    let result = Math.floor((Math.random() * replies.length));
    let question = args.slice(1).join(" ");

    let ballembed = new Discord.RichEmbed()
    .setAuthor(message.author.tag)
    .addField("Пользователь", message.author)
    .setColor('#FF9900')

    .addField("Вы поймали", replies[result]);

    message.channel.send(ballembed);
}

module.exports.help = {
    name: "hunt"
};
