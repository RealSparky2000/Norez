const Discord = require('discord.js')

module.exports.run = async (client, message, args, ops) => {
  
  
  let embed = new Discord.RichEmbed()
  .setTitle('Bot Info')
  .setThumbnail(client.user.avatarURL)
  .setColor('RANDOM')
  .setDescription('My default prefix is `n.` I am Gaming Bot that can show for you statistics for games. Hosted on **Heroku**.')
  .addField('Wanna see my opportunities?', "`n.cmds`")
  .addField('Owned By', `${client.users.get('353271087758573578')}, ${client.users.get('299917043484983296')}`)
  .addField('Links', `[Support Server](https://discord.gg/9UV5Rf3) | [Invite Me](https://bit.ly/2DvTkG2) | [Website](https://gamer.bitoryn.xyz)`)
  .setFooter('Requested By ' + message.author.tag, message.author.avatarURL)
  message.channel.send(embed)

}
  
  module.exports.help = {
  name: "help",
  category: "Core",
  desc: "Info about Norez Bot.",
  usage: "gb!help"
}