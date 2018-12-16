const Discord = require('discord.js')
const vimeworld = require('vimelib');
const vime = new vimeworld(process.env.VIMETOKEN);
module.exports.run = async (bot, message, args) => { 

  
  let guildname = args.slice(0).join(" ")
  
   if (!args[0]) return message.channel.send('Please, provide name of a guild! (VimeWorld)')
  
vime.getGuildByName(guildname).then((guild) => {

  const embed = new Discord.RichEmbed()
  .setTitle(`Guild Info On VimeWrold`)
  .setThumbnail(`https://cdn.glitch.com/748c6eab-747a-4a36-bac7-d7c44ecea839%2FVimeWorld.png?1541858673752`)
  .setColor('#3498db')
  .setDescription('using with **vimelib** module')
  .addField('Guildname', guild.name)
  .addField('ID', guild.id)
  .addField('Tag', guild.tag)
  .addField('Color', guild.color)
  .addField('Level', guild.level)
  .addField('Coins', guild.totalCoins)
  .setFooter('Requested By ' + message.author.tag, message.author.avatarURL)
  message.channel.send(embed)
});
  

}

module.exports.help = {
  name: "vmguild",
  category: "Vimeworld",
  desc: "Showing guild stats from guild."
}