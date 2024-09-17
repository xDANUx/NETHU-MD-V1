const {cmd , commands} = require('../command')

cmd({
    pattern: "repo",
    desc: "repo the bot",
    category: "main",
    react: "📡",
    filename: __filename
},

async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let dec = `*👋 Hello ${pushname}*

*REPO LINK 👇*
🧚‍♀️◦පුකද බලන්නේ 😹

*PLEASE SUBSCRIBE MY YOUTUBE CHANNEL 👇*
🧚‍♀️◦ https://www.youtube.com/@SlNethuMax

*PLEASE FOLLOW MY WHATSAPP CHANNEL 👇*
🧚‍♀️◦ https://whatsapp.com/channel/0029VagCogPGufJ3kZWjsW3A

> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ ɴᴇᴛʜᴍɪᴋᴀ ᴍᴀɪɴ*

`
await conn.sendMessage(from,{image:{url: `https://imgtr.ee/images/2024/09/17/37f9be869d1404ef1a5d188178450537.jpeg`},caption:dec},{quoted:mek});

}catch(e){
console.log(e)
reply(`${e}`)
}
})
