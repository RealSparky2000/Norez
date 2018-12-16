module.exports.run = async (client, message, args) => { 
    if(message.author.id !== process.env.ownerID) return message.channel.send("You cannot use this command because, you are not a developer.")

    
  rebootBot(message.channel);
       function rebootBot(channel) {
           message.react('✅')
               .then(message => client.destroy())
               .then(message => client.destroy())
              .then(() => client.login(process.env.TOKEN));
           message.channel.send("**GamingAPIBot has** successfully rebooted!")
       }
    }

module.exports.help = {
  name: "reboot",
  desc: "Rebooting GamerBot.",
  usage: "gb!reboot"
}