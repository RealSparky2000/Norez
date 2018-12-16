
module.exports.run = async (bot, message, args) => {
    
    

    let msgping1 = new Date();

    let botping = new Date() - message.createdAt;

    let msgping2 = new Date() - msgping1;
        
    return message.channel.send(`:ping_pong: **Pong!**\n\n:loudspeaker: \`API Ping:\` **${Math.floor(bot.ping) + 'ms'}**\n:desktop: \`Bot Ping:\` **${Math.floor(botping) + 'ms'}**\n:diamond_shape_with_a_dot_inside: \`Message Ping:\` **${Math.round(msgping2) + 'ms'}**`);
        

};

module.exports.help = {
    name: "ping",
    category: "Core",
    desc: "Ping statistics.",
    usage: "gb!ping"
};