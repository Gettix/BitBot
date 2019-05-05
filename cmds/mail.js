const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    
    let rreason = args.join(" ").slice(22);
    let rmsg = args.join(" ").slice(1);

    let reportEmbed = new Discord.RichEmbed()
    .setDescription("Mail.sru")
    .setColor("#15f153")
    .addField("Msg By", `${message.author} with ID: ${message.author.id}`)
    .addField("Channel", message.channel)
    .addField("Time", message.createdAt)
    .addField("Msg", rreason)

    let reportschannel = message.guild.channels.find(`name`, rmsg);
    if(!reportschannel) return message.channel.send("Не удалось найти канал сообщений.");


    message.delete().catch(O_o=>{});
    reportschannel.send(reportEmbed);

}
 
module.exports.help = {
  name: "mail"
}
