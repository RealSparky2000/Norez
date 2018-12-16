const Discord = require('discord.js')
const { search } = require('gdprofiles');
module.exports.run = async (bot, message, args) => { 

  
  let username = args.slice(0).join(" ")
  
  if (!args[0]) return message.channel.send('Please, provide a valid user\'s nickname! (Geometry Dash)') 
  
  let user = await search(username);
    const embed = new Discord.RichEmbed()//шо бля eksdee
    .setColor('#A3C02F')
    .setAuthor('🕵 User Profile')
    .setThumbnail(user.img.player)
    .setTitle(`:floppy_disk: ${username} Stats`)
    .setDescription(`<:Stars:510514203220508683> ${user.stars}, <:Diamond:510514203694596096> ${user.diamonds}, <:Coin:510514203690532884> ${user.secretCoins}, <:UserCoin:510514203300200458> ${user.userCoins}, <:Demon:510514205494083604> ${user.demons}, <:CP:510514204592046083> ${user.cp}`)
    .addField('Links', `<:YouTube:520697255850672154> **Youtube:** [Click here](${user.links ? user.links.youtube : "None"})\n<:Twitter:520697255720648704> **Twitter:** [Click here](${user.links !== null ? user.links.twitter : "None"})\n<:Twitch:520697255636762642> **Twitch:** [Click here](${user.links ? user.links.twitch : "None"})`) 
    .setTimestamp()
    .setFooter('Requested By ' + message.author.tag, message.author.avatarURL)
  message.channel.send(embed) 
  console.log(user.desc)

}

module.exports.help = {
  name: "gdstats",
  category: "Geometry Dash",
  desc: "Player Stats from Geometry Dash.",
  usage: "gb!gdstats [username]"
}