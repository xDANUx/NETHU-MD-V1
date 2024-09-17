const {cmd , commands} = require('../command')

cmd({
    pattern: "owner",
    desc: "owner the bot",
    category: "main",
    react: "👨‍💻",
    filename: __filename
},

async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let dec = `*👋 Hello ${pushname}*

*➣ᴏᴡɴᴇʀ ɴᴀᴍᴇ* -: ɴᴇᴛʜᴍɪᴋᴀ ᴍᴀɪɴ
*➣ɴᴜᴍʙᴇʀ* -: 94704227534 ᴏʀ 94787072548
*➣ʏᴏᴜᴛᴜʙᴇ* -: https://www.youtube.com/@SlNethuMax
*➣ᴡʜᴀᴛꜱᴀᴘᴘ ᴄʜᴀɴɴᴇʟ* -: https://whatsapp.com/channel/0029VagCogPGufJ3kZWjsW3A

> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ ɴᴇᴛʜᴍɪᴋᴀ ᴍᴀɪɴ*
`
await conn.sendMessage(from,{image:{url: `https://i.ibb.co/98y2Jzz/IMG-20240913-WA0046.jpg`},caption:dec},{quoted:mek});

}catch(e){
console.log(e)
reply(`${e}`)
}
})
