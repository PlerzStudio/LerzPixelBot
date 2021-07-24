var disbut = require('discord-buttons')

module.exports = {
    name: "testbtn",
    description: "",
    aliases: ['tbtn'],
    hidden: false,
        execute(client, message , args, Discord) {
            const id = message.author.id
            const btn = new disbut.MessageButton();
            btn.setLabel("test");
            btn.setStyle("blurple");
            btn.setID(`${id}.testbtn`);
            
            
            message.channel.send('test' , btn)
    }
}