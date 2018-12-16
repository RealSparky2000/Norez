const Discord = require("discord.js"); 

module.exports.run = async (bot, message, args) => { 

    var footertext = [`${bot.user.username}: oof sexy`, `${bot.user.username}: cool`, `${bot.user.username}: owo`, `${bot.user.username}: bad`, `${bot.user.username}: oof very bad`, `${bot.user.username}: looking sexier than i thought`];
    var rand = Math.floor(Math.random() * footertext.length);
    var randomfooter = footertext[rand];


    message.channel.startTyping(); 


    let msg = await message.channel.send('``Loading that avatar...``') 

    let user = message.mentions.users.first() || message.author; 
    let embed = new Discord.RichEmbed()
        .setAuthor(`${user.username}'s Avatar`) 
        .setImage(user.displayAvatarURL) // USER'S AVATAR
        .setColor(msg.guild.me.highestRole.color) 
        .setFooter(`${randomfooter}`, `${bot.user.avatarURL}`) 
        .setTimestamp(); 

    await message.channel.send(embed) 

    message.channel.stopTyping(true); 

    msg.delete(); 
}

module.exports.help = {
  name:"avatar",
  category: "Server Options",
  desc: "Your Discord Face :)",
  usage: "gb!avatar <tag anyone>"
}
