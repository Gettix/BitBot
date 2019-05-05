const Discord = require("discord.js");

module.exports.run = async (bot,message,args) => {
  constructor(client);
    super(client, {
      name: "ship",
      group: "utility",
      memberName: "ship",
      description: "Ships two users.",
      examples: ["ship (name1) (name2)"],
      throttling: {
        usages: 5,
        duration: 10
      },
      args: [
        {
          key: "name1",
          prompt: "What's the first name?",
          type: "string",
          default: "bento"
        },
        {
          key: "name2",
          prompt: "What's the second name?",
          type: "string",
          default: "bento"
        }
      ]
    });
  }

  run(msg, { name1, name2 });
    var shippuden = Math.floor(Math.random() * 3) + 2;
    var shipname1 = name1;
    var shipname2 = name2;
    var slice1 = shipname1.slice(0, shippuden);
    var slice2 = shipname2.slice(3);
    var finalshipname = slice1 + slice2;
    return msg.channel.send("Introducing... " + finalshipname + "!");
