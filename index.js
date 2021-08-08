const keepAlive = require("./server.js")
const TOKEN = process.env['TOKEN'] // Used to login the bot
const PREFIX = process.env['PREFIX'] // Used for commands
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

client.login(TOKEN); // Logs the bot in
keepAlive() // Keeps the bot alive

client.on('message', msg => {
    const HelpEmbed = new Discord.MessageEmbed()
    .setColor('#ffff4d') // Light yellow
    .setTitle('Commands:')
    .addField('Misc:', 'd!ip, d!ad, d!invite, d!apply')

    .setFooter('I hope this helped!', (msg.author.avatarURL())) // User's avatar

    const IPEmbed = new Discord.MessageEmbed()
    .setColor('#ffff4d') // Light yellow
    .setTitle('The Server IP:')
    .addField('DuckDupes.minehut.gg', 'Version: 1.17+')
    .addField('Syphere.minehut.gg', 'Version: 1.17+')

    const AdEmbed = new Discord.MessageEmbed()
    .setColor('#ffff4d') // Light yellow
    .setTitle('Advertise the server:')
    .addField("DuckDupes:", 'Advertising on the server: DuckDupes!')
    .addField('Default:', '/ad DuckDupes for a server with Random Items /Dupe Void and more!')
    .addField('VIP:', '/ad DuckDupes &efor a server with &8Random Items /Dupe Void &eand more!')
    .addField("Syphere:", 'Advertising on the server: Syphere!')
    .addField('Default:', '/ad Syphere Can you survive in Bedrock &cSphere without dying?')
    .addField ('VIP:', '/ad Syphere &cCan you survive in a &8Bedrock &cSphere without &c&ldying?')

    .setThumbnail('https://cdn.discordapp.com/icons/737765981807706142/66a075ffe40c1c1a5925c26a432fa6ab.png?size=128') // Server icon

    if (msg.content === `${PREFIX}help`) {
        msg.channel.send(HelpEmbed); // Sends the help embed
    } else if (msg.content === `${PREFIX}ip`) {
        msg.channel.send(IPEmbed); // Sends the ip embed
    } else if (msg.content === `${PREFIX}ad`) {
        msg.channel.send(AdEmbed); // Sends the Advertisement embed
    } else if (msg.content === `${PREFIX}invite`) {
        msg.channel.send("https://discord.gg/TeVApzcB3n"); // Sends the invite link
    } else if (msg.content === `${PREFIX}apply`) {
        msg.channel.send("https://forms.gle/nxCQqNWtdcP3qfmB6"); // Sends the forum link
    }
})