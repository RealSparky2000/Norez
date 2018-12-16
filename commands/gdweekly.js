const Discord = require('discord.js')
const { getWeeklyDemon } = require('gdprofiles');
module.exports.run = async (bot, message, args) => { 
  
  let weekly = await getWeeklyDemon()
  let diffs = {
    "Easy Demon": "Easy%20Demon.png",
    "Medium Demon": "Medium%20Demon.png",
    "Hard Demon": "Hard%20Demon.png",
    "Insane Demon": "Insane%20Demon.png",
    "Extreme Demon": "Extreme%20Demon.png"
  }
    let icon;
    let site = "https://gamer.bitoryn.xyz/images/gd/demon/";
    icon = site + diffs[weekly.diff];
    const embed = new Discord.RichEmbed()
    .setColor('#A3C02F')
    .setTitle('Geometry Dash Weekly Demon System')
    .setDescription('using with **node-geometry-dash** module')
    .setThumbnail(icon)
    .addField('Name', weekly.name, true)
    .addField('Creator', weekly.creator, true)
    .addField('ID', weekly.id, true)
    .addBlankField()
    .addField('Difficulty', weekly.diff, true)
    .addField('Featured?', weekly.featured, true)
    .addField('Epic?', weekly.epic, true)
    .setFooter('Requested By ' + message.author.tag, message.author.avatarURL)
  message.channel.send(embed) 
  console.log(icon)
  
  
}
  module.exports.help = {
  name: "gdweekly",
  category: "Geometry Dash",
  desc: "Weekly Demon in Geomtry Dash every Monday.",
  usage: "gb!gdweekly"
}