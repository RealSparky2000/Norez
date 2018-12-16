const Discord = require('discord.js')

module.exports.run = async (client, message, args, ops) => {
  
    if(args[0] === "Core" || args[0] === "core") {
    
   let Core = new Discord.RichEmbed()
   .setTitle('Commands in category: Core')
   .setColor('RANDOM')
   .setFooter('Choose one command that you want! :)')
   .setDescription(client.commands.filter(cmd => cmd.help.category === 'Core').map(cmd => `Name: **\`${cmd.help.name}\`** ${cmd.help.desc}`).join("\n "))
   return message.channel.send(Core)
    return;
    }
  if(args[0] === "Fun" || args[0] === "fun") {
    
   let fun = new Discord.RichEmbed()
   .setTitle('Commands in category: Fun')
   .setColor('RANDOM')
   .setFooter('Choose one command that you want! :)')
   .setDescription(client.commands.filter(cmd => cmd.help.category === 'Fun').map(cmd => `Name: **\`${cmd.help.name}\`** ${cmd.help.desc}`).join("\n "))
   return message.channel.send(fun)
    return;
  }
  if(args[0] === "Utilities" || args[0] === "utilities") {
    
   let Utilities = new Discord.RichEmbed()
   .setTitle('Commands in category: Utilities')
   .setColor('RANDOM')
   .setFooter('Choose one command that you want! :)')
   .setDescription(client.commands.filter(cmd => cmd.help.category === 'Utilities').map(cmd => `Name: **\`${cmd.help.name}\`** ${cmd.help.desc}`).join("\n "))
   return message.channel.send(Utilities)
    return;
  }
    if(args.slice(0).join(" ") === "Server Options" || args.slice(0).join(" ") === "server options") {
    
   let serverOptions = new Discord.RichEmbed()
   .setTitle('Commands in category: Server Options')
   .setColor('RANDOM')
   .setFooter('Choose one command that you want! :)')
   .setDescription(client.commands.filter(cmd => cmd.help.category === 'Server Options').map(cmd => `Name: **\`${cmd.help.name}\`** ${cmd.help.desc}`).join("\n "))
   return message.channel.send(serverOptions)
    return;
  }
    if(args[0] === "Vimeworld" || args[0] === "vimeworld") {
    
   let Vimeworld = new Discord.RichEmbed()
   .setTitle('Commands in category: Vimeworld')
   .setColor('RANDOM')
   .setFooter('Choose one command that you want! :)')
   .setDescription(client.commands.filter(cmd => cmd.help.category === 'Vimeworld').map(cmd => `Name: **\`${cmd.help.name}\`** ${cmd.help.desc}`).join("\n "))
   return message.channel.send(Vimeworld)
    return;
  }
    if(args.slice(0).join(" ") === "Fortnite" || args.slice(0).join(" ") === "fortnite") {
    
   let Fortnite = new Discord.RichEmbed()
   .setTitle('Commands in category: Fortnite')
   .setColor('RANDOM')
   .setFooter('Choose one command that you want! :)')
   .setDescription(client.commands.filter(cmd => cmd.help.category === 'Fortnite').map(cmd => `Name: **\`${cmd.help.name}\`** ${cmd.help.desc}`).join("\n "))
   return message.channel.send(Fortnite)
    return;
  }
    if(args[0] === "osu!") {
    
   let osu = new Discord.RichEmbed()
   .setTitle('Commands in category: osu!')
   .setColor('RANDOM')
   .setFooter('Choose one command that you want! :)')
   .setDescription(client.commands.filter(cmd => cmd.help.category === 'osu!').map(cmd => `Name: **\`${cmd.help.name}\`** ${cmd.help.desc}`).join("\n "))
   return message.channel.send(osu)
    return;
  }
    if(args.slice(0).join(" ") === "Clash Royale" || args.slice(0).join(" ") === "clash royale") {
    
   let ClashRoyale = new Discord.RichEmbed()
   .setTitle('Commands in category: Clash Royale')
   .setColor('RANDOM')
   .setFooter('Choose one command that you want! :)')
   .setDescription(client.commands.filter(cmd => cmd.help.category === 'Clash Royale').map(cmd => `Name: **\`${cmd.help.name}\`** ${cmd.help.desc}`).join("\n "))
   return message.channel.send(ClashRoyale)
    return;
  }
  if(args.slice(0).join(" ") === "Geometry Dash" || args.slice(0).join(" ") === "geometry dash") {
    
    let GeometryDash = new Discord.RichEmbed()
   .setTitle('Commands in category: Geometry Dash')
   .setColor('RANDOM')
   .setFooter('Choose one command that you want! :)')
   .setDescription(client.commands.filter(cmd => cmd.help.category === 'Geometry Dash').map(cmd => `Name: **\`${cmd.help.name}\`** ${cmd.help.desc}`).join("\n "))
   return message.channel.send(GeometryDash)
    return;
  }
  
  
  
  let embed = new Discord.RichEmbed()
  .setTitle('Command Categories')
  .setThumbnail(client.user.avatarURL)
  .setColor('RANDOM')
  .setDescription('Here you can choose command category that you mean.')
  .addField('All Categories:', `
**Daily Commands**

\`Core\`
\`Fun\`
\`Utilities\`
\`Server Options\`

**Gaming Commands**
\`Vimeworld\`
\`Fortnite\`
\`osu!\`
\`Clash Royale\`
\`Geometry Dash\`
`)
  .addField('Usage:', "n.cmds <category>. Example: **n.cmds Fun**")
  .setFooter('Requested By ' + message.author.tag, message.author.avatarURL)
  message.channel.send(embed)
             

}
  
  module.exports.help = {
  name: "cmds",
  category: "Core",
  desc: "A helpful command list.",
  usage: "gb!help"
}
