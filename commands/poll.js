const Discord = require('discord.js');

module.exports.run = async (bot, message, args, ops) => {

	if (!message.member.roles.find("name", "@everyone")) { 
		message.channel.send('You haven\'t got any permissions!');
		return;
	}
    
    if (!args[0]) return message.channel.send('Error! Proper usage: *n.<question>**');
    
    const embed = new Discord.RichEmbed()
        .setColor("RANDOM") 
        .setFooter('Created By ' + message.author.tag, message.author.avatarURL)
        .setDescription(args.join(' '))
        .setAuthor(`Poll for that server!`);
        
    let msg = await message.channel.send(embed)
        .then(function (msg) {
            msg.react("❎");
            msg.react("✅"); 
            message.delete({timeout: 1000});
            }).catch(function(error) {
            console.log(error);
        });
};

module.exports.help = {
  name: "poll",
  category: "Utilities",
  desc: "Creating a vote.",
  usage: "gb!po;; <text>"
}
