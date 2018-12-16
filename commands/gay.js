const Discord = require("discord.js");

module.exports.run = async (bot, message, args, prefix) => {
  
    var user = message.mentions.users.first() || message.author;

    var member = message.guild.member(user);

    let gay = Math.round(Math.random() * 100);

    let gayembed = new Discord.RichEmbed()
        .setColor("#f442d4")
        .setTitle(`:gay_pride_flag: **I think ${user.username} is gay for ${gay}%!** :gay_pride_flag:`);
    return message.channel.send(gayembed);
};

module.exports.help = {
    name: "gay",
    category: "Fun",
    desc: "A little gay command.",
    usage: "gb!gay <tag anyone>"
};