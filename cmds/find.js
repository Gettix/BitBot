const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let rreason = args.join(" ").slice(22);

    let reportEmbed = new Discord.RichEmbed()
    .setDescription("Find")
    .setColor("#15f153")
    .addField("User", `${message.author}`)
    .addField("Find", rreason)
    .addField("Time", message.createdAt);

    message.delete().catch(O_o=>{});
    message.channel.send(reportEmbed);

}
 
module.exports.help = {
  name: "find"
}
