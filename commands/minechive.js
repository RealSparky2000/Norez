const Discord = require('discord.js');
exports.run = (client, message, args) => {
    
    let txt = args.join('+');
  
    let hug = [
       "1",
       "2",
       "3",
       "4",
       "5",
       "6",
       "7",
       "8",
       "9",
       "10",
       "11",
       "12",
       "13",
       "14",
       "15",
       "16",
       "17",
       "18",
       "19",
       "20",
       "21",
       "22",
       "23",
       "24",
       "25",
       "26",
       "27",
       "28",
       "29",
       "30",
       
     ]
     let hugresult = Math.floor((Math.random() * hug.length));
  
     if(!args[0]) return message.channel.send("Please, provide a text that you want to achive!");
     
     message.channel.send({
       files: [{
                   attachment: `https://minecraftskinstealer.com/achievement/a.php?i=${hugresult}&h=Achievement+Get%21&t=` + txt,
                   name: "minecraft.png"
         }]
     });
}
module.exports.help = {
    name: "minechive",
    desc: "Creating an achievement.",
    category: "Fun"
}