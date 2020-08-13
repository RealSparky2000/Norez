const Discord = require('discord.js')
const moment = require("moment");
require("moment-duration-format");
const fs = require('fs');
const db = require('quick.db')
const queue = new Map();
const client = new Discord.Client();
client.commands = new Discord.Collection();

const prefix = "n."
const ownerID = process.env.ownerID

fs.readdir("./commands/", (err, files) => {

  if(err) console.log(err);
  let jsfile = files.filter(f => f.split(".").pop() === "js");
  if(jsfile.length <= 0){
    console.log("Couldn't find commands.");
    return;
  }

  jsfile.forEach((f, i) =>{
    let props = require(`./commands/${f}`);
    console.log(`${f} loaded!`);
    client.commands.set(props.help.name, props);
  });
});

client.on("message", async message => { 

  if(message.author.bot) return;
  if(message.channel.type === "dm") return;
  if(message.content.indexOf(prefix) !== 0) return;
    
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1)
  let user = message.author;
  
  const serverQueue = queue.get(message.guild.id)
  
  let commandfile = client.commands.get(cmd.slice(prefix.length));
  if(commandfile) commandfile.run(client,message,args);

});
client.on('ready', () => { 
  var gamestatus = [
    `Playing on ${client.guilds.size} servers :)`,
    `My default prefix is n.`,
    `Need some help? n.help`,
    `Listening to music...`,
    `Wanna see updates? n.changelog`
]
  console.log('Laucnhed!')
  client.user.setActivity((gamestatus[Math.floor(Math.random() * gamestatus.length)])) // Game Status. ( Rename Above In gamestatus )
    }, 60000)
client.on('error', console.error);
client.login()
