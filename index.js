const { Client , Intents}  = require('discord.js')
const client = new Client({intents:32767})

client.once('ready',()=>{
    console.log("봇이 준비되었습니다")
})

client.on('messageCreate' , message=>{
    if(message.content == "핑"){
        message.reply("퐁!")
    }
})

client.login("OTQ4MDE4NzM1ODI0OTA0MjAy.Yh1tPw.OfF7vHJXdHf7727Y5Hg7DfBRxkg")