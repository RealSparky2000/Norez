const Discord = require('discord.js')
const osu = require('node-osu');
const api = new osu.Api(process.env.OSUTOKEN, {
    notFoundAsError: true,
    completeScores: false 
})

module.exports.run = async (bot, message, args) => { 

  //convert
      function convertMS(s) {
        var m, s;
        m = Math.floor(s / 60);
        s = s % 60;
        m = m % 60;
        return {
              m: m
            , s: s
        };
      }
    
  //convert
  
  let beatmap = args[0]
  if (!args[0]) return message.channel.send('Please, provide a valid ID of beatmap! (osu!)')
  
api.getBeatmaps({b: beatmap}).then(beatmaps => {
  let a = convertMS(beatmaps[0].time.total);
  const embed = new Discord.RichEmbed()
  .setTitle('Beatmap Osu Search System')
  .setDescription(`using with node-osu module`)
  .setImage(`https://assets.ppy.sh/beatmaps/${beatmaps[0].beatmapSetId}/covers/cover.jpg?1`)
  .setColor("#D0436A")
  .addField('Name', beatmaps[0].title, true)
  .addField('Song Author', beatmaps[0].artist)
  .addField('Creator', beatmaps[0].creator)
  .addField('ID', beatmap)
  .addField('Max Combo', `${beatmaps[0].maxCombo}x`)
  .addField('Length', `${a.m}:${a.s}`)
  .addField('Passes', beatmaps[0].counts.passes)
  .setFooter('Requested By ' + message.author.tag, message.author.avatarURL)
  message.channel.send(embed)
  console.log(beatmaps[0])
})

}

module.exports.help = {
  name: "obeatmap",
  category: "osu!",
  desc: "Shows info of a beatmap from osu!.",
  usage: "gb!obeatmap [beatmap ID]"
}