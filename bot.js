const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('ready', () => {
var kanalver = client.channels.find(channel => channel.id === '527502675915440139');    
console.log("Turning On Bot")
bot.user.setActivity("Sola's agony", {type: 2});

setInterval(()=> {
kanalver.send("Please don't forget bumping the server.");
}, 5000);

});

bot.on('guildMemberAdd', member => {
    let channel = member.guild.channels.find('name', 'welcome');
    let memberavatar = member.user.avatarURL
        if (!channel) return;
        let embed = new Discord.RichEmbed()
        .setColor('0x1BF235')
        .setThumbnail(memberavatar)
        .addField(':bust_in_silhouette: | Name : ', `${member}`)
        .addField(':microphone2: | Welcome!', `Welcome to the server, ${member} please check #read-me and #rules.`)
        .addField(':family_mwgb: | You are the member', `${member.guild.memberCount}`)
        .setFooter(`${member.guild.name}`)
        .setTimestamp()

        channel.sendEmbed(embed);
});

bot.on('guildMemberAdd', member => {

    console.log(`${member}`, "has joined" + `${member.guild.name}`)

});

bot.on('guildMemberRemove', member => {
    let channel = member.guild.channels.find('name', 'welcome');
    let memberavatar = member.user.avatarURL
        if (!channel) return;
        let embed = new Discord.RichEmbed()
        .setColor('0xFF0D00')
        .setThumbnail(memberavatar)
        .addField(':bust_in_silhouette: | Name:', `${member}`)
        .addField(':microphone2: | Has left the server', 'We will miss you!')
        .addField(':family_mwgb: | The server now has', `${member.guild.memberCount}` + " members")
        .setFooter(`${member.guild.name}`)
        .setTimestamp()

        channel.sendEmbed(embed);
});

bot.on('guildMemberRemove', member => {
    console.log(`${member}` + "has left" + `${member.guild.name}` + "Sending leave message now")
    console.log("Leave Message Sent")
});

const token = process.env.TOKEN;
bot.login(process.env.TOKEN)
