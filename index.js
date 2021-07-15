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
    .addField('Misc:', 'd!ip, d!ad, d!invite')

    .setFooter('I hope this helped!', (msg.author.avatarURL()))

    const IPEmbed = new Discord.MessageEmbed()
    .setColor('#ffff4d')
    .setTitle('The Server IP:')
    .addField('DuckDupes.minehut.gg', 'Version: 1.17+')
    .addField('Syphere.minehut.gg', 'Version: 1.17+')

    const AdEmbed = new Discord.MessageEmbed()
    .setColor('#ffff4d')
    .setTitle('Advertise the server:')
    .addField("DuckDupes:", 'Advertising on the server: DuckDupes!')
    .addField('Default:', '/ad DuckDupes for a server with Random Items /Dupe Void and more!')
    .addField('VIP:', '/ad DuckDupes &efor a server with &8Random Items /Dupe Void &eand more!')
    .addField("Syphere:", 'Advertising on the server: Syphere!')
    .addField('Default:', '/ad Syphere Can you survive in Bedrock &cSphere without dying?')
    .addField ('VIP:', '/ad Syphere &cCan you survive in a &8Bedrock &cSphere without &c&ldying?')

    .setThumbnail('https://cdn.discordapp.com/icons/737765981807706142/66a075ffe40c1c1a5925c26a432fa6ab.png?size=128')

    if (msg.content === `${PREFIX}help`) {
        msg.channel.send(HelpEmbed);
    } else if (msg.content === `${PREFIX}ip`) {
        msg.channel.send(IPEmbed);
    } else if (msg.content === `${PREFIX}ad`) {
        msg.channel.send(AdEmbed);
    } else if (msg.content === `${PREFIX}invite`) {
        msg.channel.send("https://discord.gg/TeVApzcB3n")
    }
})
