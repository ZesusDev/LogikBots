const Discord = require('discord.js');

const client = new Discord.Client();

client.on('ready', () => {
    console.log(`${client.user.tag}`)
})

client.on('message', message => {
    if(message.content === 'ping')
    message.channel.send('**pong**' `${client.ws.ping}`)
})


client.login('Nzc3NTg0NTE3NzExMTM0ODEw.X7FkAw.WWstjJTK0UM4Q4kswvZuPq6Ocfc');