const Discord = require("discord.js");
const coins = require("../profile.json");

module.exports.run = async (bot,message,args) => {
  let uid = message.author.id;
  let un = message.author.username;
  bot.send = function (msg){
    message.channel.send(msg);
  }
  let sCoins = coins[message.author.id].coins;

  if(sCoins = 0) return message.reply("У вас нет кофе.");

  
  let u = coins[uid];
  u.coins --;
message.channel.send(`${un} Выпил кофе (-1)`)
};

module.exports.help = {
  name:"drink"
}
