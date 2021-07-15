const keepAlive = require("./server.js")
const TOKEN = process.env['TOKEN']
const PREFIX = process.env['PREFIX']

const Discord = require('discord.js');
const client = new Discord.Client();


client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);

    client.user.setPresence({
        status: 'online',
        activity: {
            name: "d!help | d!ip",
            type: "LISTENING"
        }
    });
});

client.login(TOKEN);

keepAlive()

client.on('message', msg => {
    const HelpEmbed = new Discord.MessageEmbed()
    .setColor('#ffff4d')
    .setTitle('Commands:')
    .addField('Misc:', 'd!ip')

    .setFooter('I hope this helped!', (msg.author.avatarURL()))

    if (msg.content === `${PREFIX}help`) {
        msg.channel.send(HelpEmbed);
    } else if (msg.content === `${PREFIX}ip`) {
        msg.channel.send("The Server IP is: DuckDupes.minehut.gg");
    }
})
