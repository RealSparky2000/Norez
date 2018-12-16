const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async(bot, message, args) => {
    
    let moonwalk = "https://media.giphy.com/media/Fep8OqK5vmkh9Iv6FU/giphy.gif";
  
    let hentaiEmbed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setTitle("Michael Jackson and his moonwalk, oof sexy... ")
    .setImage(moonwalk)
    .setColor("RANDOM")
    .setTimestamp()

    message.channel.send(hentaiEmbed);

}

module.exports.help = {
    name: "moonwalk",
    desc: "Picture with MoonWalk",
    category: "Fun"
}