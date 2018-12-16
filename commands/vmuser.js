const Discord = require('discord.js')
const vimeworld = require('vimelib');
const vime = new vimeworld(process.env.VIMETOKEN);
module.exports.run = async (bot, message, args) => { 

  
  let username = args[0]
  
   if (!args[0]) return message.channel.send('Please, provide a valid user\'s nickname! (VimeWorld)')
  
  vime.getUsersbyName(username).then((result) => {

  const embed = new Discord.RichEmbed()
  .setTitle(`User Stats On VimeWrold`)
  .setColor('#3498db')
  .setThumbnail(`http://skin.vimeworld.ru/body/${username}.png`)
  .setDescription('using with **vimelib** module')
  .addField('Username', username)
  .addField('ID', result[0].id)
  .addField('Level', result[0].level)
  .addField('Rank', result[0].rank)
  .addField('Guild', `${result[0].guild ? result[0].guild.name : "None"}`)
  .setFooter('Requested By ' + message.author.tag, message.author.avatarURL)
  message.channel.send(embed)
  });
  

}

module.exports.help = {
  name: "vmuser",
  category: "Vimeworld",
  desc: "Showing user stats from VimeWorld."
}