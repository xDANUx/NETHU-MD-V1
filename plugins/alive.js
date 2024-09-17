const config = require('../config')
const {cmd , commands} = require('../command')

cmd({
    pattern: "alive",
    desc: "Check bot online or no.",
    category: "main",
    react: "👋",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
const voice = {
    alive: 'media/AUD-20240909-WA0003'
                    }
let des = `*👋 𝙷𝚎𝚕𝚕𝚘 ${pushname}*

Hello I'm alive now 🫧💨

Join Our Support Chanel : https://whatsapp.com/channel/0029VagCogPGufJ3kZWjsW3A 🌟

Subscribe Our Youtube Chanel : https://www.youtube.com/@SlNethuMax 🌟

Bot Owners : 94704227534 , 94787072548 🌟

> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ ɴᴇᴛʜᴍɪᴋᴀ ᴍᴀɪɴ*`
await conn.sendMessage(from, { audio: { url: voice.alive }, mimetype: 'audio/mp4', ptt: true }, { quoted: mek })
return await conn.sendMessage(from,{image: {url: `https://i.ibb.co/tCkmbMx/IMG-20240913-WA0041.jpg`},caption: des},{quoted: mek})
}catch(e){
console.log(e)
reply(`${e}`)
}
})
