const Discord = require('discord.js')

module.exports = {
    run: message => {
        message.channel.send(new Discord.MessageEmbed()
            .setTitle('Ceci est un test')
            .setDescription('[TEST DE LIEN](https://www.youtube.com/channel/UCaqOyHovnmb456ozHBONbDw)\n+test couleur')
            .setColor('#ff0000')
            .addField('Test de FIELD1','Ceci est le test de Field1')
            .addField('Test de FIELD2','Ceci est le test de Field2')
            .setAuthor('Nobukami', 'https://cdn.discordapp.com/attachments/803681730824241193/815372183416471602/unknown.png', 'https://pornhub.com')
            .setImage('https://cdn.discordapp.com/attachments/803681730824241193/822316412353773579/Screenshot_20210319-045111_YouTube.jpg')
            .setThumbnail('https://cdn.discordapp.com/attachments/803681730824241193/822316412353773579/Screenshot_20210319-045111_YouTube.jpg')
            .setFooter('Cet affichage est un test')
            .setTimestamp())
    },
    name: 'embed'
}