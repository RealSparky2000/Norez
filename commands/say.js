module.exports.run = async (client, message, args, ops, prefix) => {

            message.delete();
            if (message.author.bot) return;

            let msg = message.content.toUpperCase();
            var args = msg.split(" ")
            if (!args[0]) return message.channel.send("You have to provide a message for me to say!");
            let arg = message.content.split(" ").slice(1);
            message.channel.send(arg.join(" "));
    }
  
  module.exports.help = {
  name: "say",
  category: "Fun",
  desc: "You can say something by bot.",
  usage: "gb!say <text>"
}