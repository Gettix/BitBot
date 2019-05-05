const Discord = module.require("discord.js");

module.exports.run = async (bot,message,args) => {

    let replies = ["You gay on 10%.", "You gay on 34%.", "You gay on 56%.", "You gay on 99%.", "You gay on 83%", "You gay on 1000%", "You no gay", "You gay on 1%"];

    let result = Math.floor((Math.random() * replies.length));
    let question = args.slice(1).join(" ");

    let ballembed = new Discord.RichEmbed()
    .setDescription(message.author.tag)
    .setColor('#FF9900')

    .addField("Gay i10Ti machine", replies[result]);

    message.channel.send(ballembed);
}

module.exports.help = {
    name: "gaym"
};
