
const Discord = require('discord.js');
const Canvas = require('canvas');
const superagent = require('snekfetch');
module.exports.run = async (client, message, args) => {
    var user = message.mentions.users.first() || message.author;
    const canvas = Canvas.createCanvas(960, 540);
    const ctx = canvas.getContext("2d");
    const background = await Canvas.loadImage("https://cdn.glitch.com/748c6eab-747a-4a36-bac7-d7c44ecea839%2FSUKABLYAT.png?1541781833181");
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
    const { body: buffer } = await superagent.get(user.displayAvatarURL);
    const avatar = await Canvas.loadImage(buffer);
    ctx.drawImage(avatar, 400, 210, 130, 110);
    const attachment = new Discord.Attachment(canvas.toBuffer(), 'pidoras.png');
    message.channel.send(attachment);
}
module.exports.help = {
    name: "deltarune",
    desc: "Sending a SUKABLYAT picture.",
    category: "Fun",
    usage: "gb!deltarune <tag anyone>"
}