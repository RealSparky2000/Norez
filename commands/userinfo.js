const Discord = require('discord.js');
const moment = require("moment");

module.exports.run = async (bot, message, args) => {

	var user = message.mentions.users.first() || message.author;
    const member = message.guild.member(user);
	
    const embed = new Discord.RichEmbed()
		.setColor('RANDOM')
		.setThumbnail(user.avatarURL)
		.setTitle(user.tag)
		.addField("ID:", user.id)
		.addField("Nickname:", `${member.nickname !== null ? `${member.nickname}` : 'None'}`)
		.addField("Created At:", `${moment.utc(user.createdAt).format('dddd, MMMM Do YYYY, HH:mm:ss')}`)	
    .addField("Joined Server:", `${moment.utc(member.joinedAt).format('dddd, MMMM Do YYYY, HH:mm:ss')}`)
		.addField("Bot:", user.bot, true) 
		.addField("Status:", `${user.presence.status}`, true)
		.addField("Game:", `${user.presence.game ? user.presence.game.name : 'None'}`)
		.addField("Roles:", member.roles.map(roles => `${roles.name}`).join(', '))
		.setFooter(`Replying to ${message.author.tag}`)
     message.channel.send({embed});
  
    }
module.exports.help = {
  name: "userinfo",
  category: "Server Options",
  desc: "Info about your Discord profile."
}