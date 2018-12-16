const Discord = require('discord.js')

module.exports.run = async (client, message, args, ops) => {
  
  
  let embed = new Discord.RichEmbed()
  .setAuthor('Changelog', client.user.avatarURL)
  .setColor('RANDOM')
  .setDescription('New Update 1.3.7! (Release v38)')
  .addField('What came into changes?', `Change bot prefix, name, avatar. Command \`info\` rewrited to \`help\`.\nDeleted command categories: **Economy**, **N.S.F.W**`)
  .addField('New opportunities?', "Added command `cmds` that shows for you commands by categories. And also, ***now Norez can work 24/7!***")
  .setFooter('Updated on **16.12.18** | Replying to ' + message.author.tag, message.author.avatarURL)

  message.channel.send(embed)

}
  
  module.exports.help = {
  name: "changelog",
  category: "Core",
  desc: "List of changes in Norez."
}