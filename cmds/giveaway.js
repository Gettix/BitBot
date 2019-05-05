const Discord = require('discord.js');


module.exports.run = async (bot, message, args) => {

console.log(`${message.member} ran the "GiveAway" command`);

var item = "";
var time;
var winnerCount
let messageArray = message.content.split(" ");
//-- f!giveaway 1(winnerCount) 60(seconds) Item Giveaway

for (var i = 3; i < messageArray.length; i++){
  item += (messageArray[i] + " ");
}
winnerCount = Number(messageArray[1]);
time = Number(messageArray[2]);


var giveEmbed = new Discord.RichEmbed();
giveEmbed.setDescription(item)
giveEmbed.addField("Количество мест", winnerCount)
var embedSent = await message.channel.send(giveEmbed);
embedSent.react("🎉");
setTimeout(function() {


  var peopleReacted = embedSent.reactions.get("🎉").users;
  var index = Math.floor(Math.random() * peopleReacted.length);
  var winners = [index];
  var winnerMsg = " ";
  for (var i = 0; i < winners.length; i++){
    winnerMsg += (winners[i].toString() + " ");
  }
  var haveHas = "has";
  if (winners.length == 1){
    haveHas = "has";
  }
  else{
    haveHas = "have";
  }
  message.channel.send(winnerMsg + " " + haveHas + ` won ${item}`);
}, time * 1000); //--conversting seconds into miliseconds
}

module.exports.help = {
   name: "giveaway"
}
