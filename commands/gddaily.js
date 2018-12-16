const Discord = require('discord.js')
const { getDailyLevel } = require('gdprofiles');
module.exports.run = async (bot, message, args) => { 
  
  let daily = await getDailyLevel();
    let site = "https://gamer.bitoryn.xyz/images/gd/";
    let icon;
    if(daily.diff == "Easy"){//это работает, доделать с эпиком и фьючером
      icon = site + "Easy.png";
    }else if(daily.diff == "Normal"){
      icon = site + "Normal.png";
    }else if(daily.diff == "Hard"){
      icon = site + "Hard.png";
    }else if(daily.diff == "Harder"){
      icon = site + "Harder.png";
    }else if(daily.diff == "Insane"){
      icon = site + "Insane.png";
    }
    const embed = new Discord.RichEmbed()
    .setColor('#A3C02F')
    .setTitle('Geometry Dash Daily Level System')
    .setDescription('using with **node-geometry-dash** module')
    .setThumbnail(icon)
    .addField('Name', daily.name, true)
    .addField('Creator', daily.creator, true)
    .addField('ID', daily.id, true)
    .addBlankField()
    .addField('Difficulty', daily.diff, true)
    .addField('Featured?', daily.featured, true)
    .addField('Epic?', daily.epic, true)
    .setFooter('Requested By ' + message.author.tag, message.author.avatarURL)
  message.channel.send(embed) 
  

}

module.exports.help = {
  name: "gddaily",
  category: "Geometry Dash",
  desc: "You can know when is new daily level came.",
  usage: "gb!gddaily"
}