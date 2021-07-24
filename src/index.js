require('dotenv').config()
var fs = require("fs")
var Discord = require('discord.js')
var client = new Discord.Client()
var token = process.env.TOKEN;
var commandFiles = fs.readdirSync('./src/commands').filter(f => f.endsWith('.js'));
var prefix = "pp."
client.commands = new Discord.Collection()
const disbut = require('discord-buttons')(client)
const fetch = require('node-fetch')

let time = new Date().toLocaleTimeString()
let date = new Date().toLocaleDateString()
let logdate = `[${date} | ${time}]`

for (file of commandFiles) {
    var command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
    console.log(`${logdate} loaded command ${command.name} in ${file}`)

    if (command.aliases) {
        for (aliase of command.aliases) {
            client.commands.set(aliase, command);
            console.log(`${logdate} loaded aliase ${aliase} in ${file}`);
        }
    }
}

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();

	if (!client.commands.has(command)) {
        message.reply('그딴 명령어가 어ㅄ어요');
    }
	try {
		client.commands.get(command).execute(client , message, args , Discord);
	} catch (error) {
		console.error(error);
	}
    client.commands.set(command.name, command);

    //
});

client.on('clickButton', async (btn) => {
    switch(btn.id) {
        case `${btn.clicker.id}.testbtn`:
            btn.message.edit("text", null)

            break
    }
});

client.on('clickMenu', menu => {
    switch(menu.id) {
        case `${menu.clicker.id}.ping`:
            if(menu.values[0] == `${menu.clicker.id}.hyping`) {
                menu.message.edit("아직 준비중입니다!")
            } else if(menu.values[0] == `${menu.clicker.id}.lerzping`) {
                menu.message.edit("아직 준비중입니다!")
            }
        break;
    }
});



client.login(token)