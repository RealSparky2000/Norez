const Discord = require("discord.js");
const Client = require('fortnite');
const fortnite = new Client(process.env.TRNAPIKEY);

module.exports.run = async (bot, message, args) => {
    let username = args[0];
    let platform = args[1];

    if(!username) return message.channel.send("Please, provide a users nickname! (Fortnite)")
    if(!platform) return message.channel.send('Did you provide a platform? Proper usage: **g!ftprofile <username> <platform>**') 

    let data = fortnite.user(username, platform).then(data => {
        let stats = data.stats;
        let lifetime = stats.lifetime;

        let score = lifetime[6]['Score'];
        let mplayed = lifetime[7]['Matches Played'];
        let wins = lifetime[8]['Wins'];
        let winper = lifetime[9]['Win%'];
        let kills = lifetime[10]['Kills'];
        let kd = lifetime[11]['K/d'];
        let embed = new Discord.RichEmbed()
        .setTitle("Lifetime Stats")
        .setAuthor(data.username)
        .setColor("RANDOM")
        .addField("Wins", wins, true)
        .addField("Kills", kills, true)
        .addField("Score", score, true)
        .addField("Matches Played", mplayed, true)
        .addField("Win%", winper, true)
        .addField("K/D", kd, true)
        .setTimestamp()
        .setFooter("Requested By " + message.author.tag, message.author.avatarURL)

        message.channel.send(embed);
    }).catch((err) => {
      message.channel.send('User not found!');
      console.error(err);
    });
}

module.exports.help = {
    name:"ftprofile",
    category: "Fortnite",
    desc: "Showing user stats from Fornite API Tracker"
  }