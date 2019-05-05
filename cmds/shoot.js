const Discord = module.require("discord.js");

module.exports.run = async (bot,message,args) => {
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    let replies = ["-30 hp.", "-20 hp.", "Miss."];

    let result = Math.floor((Math.random() * replies.length));
    let question = args.slice(1).join(" ");

    let ballembed = new Discord.RichEmbed()
    .setAuthor(message.author.tag)
    .addField("Цель", `${rUser}`)
    .setColor('#FF9900')

    .addField("Результат", replies[result]);

    message.channel.send(ballembed);
}

module.exports.help = {
    name: "shoot"
};

