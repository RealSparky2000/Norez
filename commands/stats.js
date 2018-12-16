const Discord = require('discord.js')

module.exports.run = (client, message, args, tools) => {

    const os = require('os');
    const arch = os.arch()
    const used = process.memoryUsage().heapUsed / 1024 / 1024;

    let totalSeconds = process.uptime();
    let realTotalSecs = Math.floor(totalSeconds % 60);
    let days = Math.floor((totalSeconds % 31536000) / 86400);
    let hours = Math.floor((totalSeconds / 3600) % 24);
    let mins = Math.floor((totalSeconds / 60) % 60);

    var ping = client.ping
    const embed = new Discord.RichEmbed()
    .setTitle(':gear: Norez\'s Statistics')
    .setThumbnail(`https://cdn.glitch.com/748c6eab-747a-4a36-bac7-d7c44ecea839%2FIcon-Discord.png?1541871811796`)
    .setDescription('A simple statisctics command that shows characters of that bot.')
    .addField(':minidisc: Memory Usage', `Memory usage: ${Math.round(used * 100) / 100}MB`)
    .addField(':loudspeaker: Ping', Math. round(ping))
    .addField(':battery: Uptime', `Days: ${days} | Hours: ${hours} | Minutes: ${mins} | Seconds: ${realTotalSecs}`)
    .addField(':green_book: Library', `discord.js`)
    .addField(':orange_book: Node Version', process.version)
    .addField(':satellite: Guilds', client.guilds.size)
    .addField(':shield: Users', client.users.size)
    .setFooter('Requested By ' + message.author.tag, message.author.avatarURL)
    message.channel.send(embed)

}
module.exports.help = {
  name: "stats",
  category: "Core",
  desc: "Bot Statistics."
}
