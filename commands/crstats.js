const Discord = require('discord.js')
const request = require('request') 

module.exports.run = async (client, message, args, level) => {
  
if (!args[0]) return message.channel.send("Please, provide a users nickname! (Clash Royale)") 

var options = { method: 'GET',
  url: `https://api.royaleapi.com/player/${args[0]}`,
  json: true, 
  headers: { auth: process.env.CRAUTH }
};

request(options, function (error, response, body) {
  if (error) throw new Error(error);
  
  const embed = new Discord.RichEmbed()
  .setTitle(`Stats for ${body.name}`)
  .setColor('RANDOM')
  .setThumbnail("https://cdn.glitch.com/748c6eab-747a-4a36-bac7-d7c44ecea839%2FApp_Icon.png?1544378409713")
  .addField(`Level`, body.stats.level)
  .addField(`Trophies`, `${body.trophies}/${body.stats.maxTrophies}`) 
  .addField(`Arena`, `${body.arena.name} | ${body.arena.arena}`)
  .addField(`Clan`, `${body.clan ? body.clan.name : "None"}`)
  .addField(`Favourite Card`, `${body.stats.favoriteCard.name}`)
  .addField(`Wins/Losses`, `${body.games.wins}/${body.games.losses}`)
  .setFooter(`Requested By ` + message.author.tag, message.author.avatarURL)
  message.channel.send(embed) 
});
} 
  module.exports.help = {
    name: "crstats",
    category: "Clash Royale",
    desc: "Showing user stats from Clash Royale."
  }