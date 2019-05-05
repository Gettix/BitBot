const Discord = require("discord.js");
const client = new Discord.Client();
let coins = require("../profile.json");

module.exports.run = async (bot, message, args) => {
  //!coins
  if(!coins[message.author.id]){
    coins[message.author.id] = {
      coins: 0
    };
  }
  let uCoins = coins[message.author.id].coins;
  const emojim = client.emojis.find(emoji => emoji.name === "Money");

  let coinEmbed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setColor("#00FF00")
  .addField(`<${emojim}>`, uCoins);

  message.channel.send(coinEmbed).then(msg => {msg.delete(5000)});

}

module.exports.help = {
  name: "mypixels"
}
