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
  var bean = message.guild.emojis.find(emoji => emoji.name == 'Money');
	// By guild id 
	if(message.guild.id == '574457191218806785') {
	if(bean) {
    		if(message.content.startsWith("<:bean:" + bean.id + ">")) {
    			message.react(bean.id);
    		}
    	}
  let coinEmbed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setColor("#00FF00")
  .addField(`<- ${bean} ->`, uCoins);

  message.channel.send(coinEmbed).then(msg => {msg.delete(5000)});

}

module.exports.help = {
  name: "mypixels"
}
