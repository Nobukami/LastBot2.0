const Discord = require('discord.js')

module.exports = {
    run: message => {
        message.channel.send(new Discord.MessageEmbed()
            .setTitle('Aide LastBot2.0')
            .setDescription('[LastCraft](https://lastcraft.fr/)')
            .setColor('#1E8449')
            .addField('lb!ip','Vous donnera l\'ip du serveur')
            .addField('lb!site','Vous donnera l\'adresse du site')
            .addField('lb!help','Ouvrira ce menu')
            .setThumbnail('https://cdn.discordapp.com/attachments/807903137159315476/822914620976660480/Logo27-2.png')
            .setFooter('lastcraft.fr')
            .setTimestamp())
    },
    name: 'help'
}

module.exports = {
    run: message => {
        message.channel.send(new Discord.MessageEmbed()
            .setTitle('IP du serveur')
            .setColor('#1E8449')
            .addField('play.lastcraft.fr','1.16.4')
            .setThumbnail('https://cdn.discordapp.com/attachments/807903137159315476/822914620976660480/Logo27-2.png'))
    },
    name: 'ip'
}

module.exports = {
    run: message => {
        message.channel.send(new Discord.MessageEmbed()
            .setTitle('Site du serveur')
            .setColor('#1E8449')
            .addField('[Lastcraft.fr]', '(https://lastcraft.fr/)')
            .setThumbnail('https://cdn.discordapp.com/attachments/807903137159315476/822914620976660480/Logo27-2.png'))
    },
    name: 'site'
}