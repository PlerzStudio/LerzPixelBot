var disbut = require('discord-buttons')
const fetch = require('node-fetch')

module.exports = {
    name: "ping",
    description: "",
    aliases: ['pong'],
    hidden: false,
    execute(client, message , args, Discord) {
        const id = message.author.id

        let hypixel = new disbut.MessageMenuOption()
            .setLabel('하이픽셀')
            .setEmoji('1️⃣')
            .setValue(`${id}.hyping`)
            .setDescription('하이PING셀')
        
        let myserver = new disbut.MessageMenuOption()
            .setLabel(`러즈픽셀 봇 `)
            .setEmoji('2️⃣')
            .setValue(`${id}.lerzping`)
            .setDescription('러즈픽셀 봇의 핑!')
                
        let select = new disbut.MessageMenu()
            .setID(`${id}.ping`)
            .setPlaceholder('서버 선택')
            .setMaxValues(1)
            .setMinValues(1)
            .addOptions(hypixel , myserver)       
            
            
            message.channel.send('🏓퐁!' , select)    
    }
}