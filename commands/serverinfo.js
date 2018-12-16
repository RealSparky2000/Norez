const Discord = require('discord.js');
const moment = require("moment");

module.exports.run = async (bot, message, args) => {

            var online = message.guild.members.filter(member => member.user.presence.status !== 'offline');
            var day = message.guild.createdAt.getDate();
            var month = 1 + message.guild.createdAt.getMonth();
            var year = message.guild.createdAt.getFullYear();
            var sicon = message.guild.iconURL;
            var embed = new Discord.RichEmbed()
                .setAuthor(message.guild.name, sicon)
                .setFooter('Server Created • ' + month + "." + day + "." + year)
                .setColor('RANDOM')
                .setThumbnail(sicon)
                .addField('ID', message.guild.id, true)
                .addField('Name', message.guild.name, true)
                .addField('Owner', message.guild.owner.user.tag, true)
                .addField('Region', message.guild.region, true)
                .addField('Channels', message.guild.channels.size, true)
                .addField('Members', message.guild.memberCount, true)
                .addField('Humans', message.guild.memberCount - message.guild.members.filter(m => m.user.bot).size, true)
                .addField('Bots', message.guild.members.filter(m => m.user.bot).size, true)
                .addField('Online', online.size, true)
                .addField('Roles', message.guild.roles.size, true)
                .setFooter('Requested By ' + message.author.tag, message.author.avatarURL)
            message.channel.send({ embed });
    }
module.exports.help = {
  name: "serverinfo",
  category: "Server Options",
  desc: "Info about Discord server.",
}