module.exports.run = (client, message, args) =>  {
    if(message.member.id !== process.env.ownerID || message.author.id !== process.env.ownerID2) return;
    if(!args || args.size < 1) return message.channel.send("Must provide a command name to reload.");
    const commandName = args[0];
    if(!client.commands.has(commandName)) {
      return message.channel.send("That command does not exist");
    }
    delete require.cache[require.resolve(`./${commandName}.js`)];
    client.commands.delete(commandName);
    const props = require(`./${commandName}.js`);
    client.commands.set(commandName, props);
    message.delete();
};
module.exports.help = {
  name:"reload",
  desc:"reloadcommand"
}