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
______________________________________________________
|*👨‍💻 ᴏᴡɴᴇʀ ɴᴀᴍᴇ* -: ɴᴇᴛʜᴍɪᴋᴀ ᴍᴀɪɴ

|*✳️ ɴᴜᴍʙᴇʀ* -: 94704227534 ᴏʀ 94787072548

|*⭕ ʏᴏᴜᴛᴜʙᴇ* -: https://www.youtube.com/@SlNethuMax

|*⭕ ᴡʜᴀᴛꜱᴀᴘᴘ ᴄʜᴀɴɴᴇʟ* -: https://whatsapp.com/channel/0029VagCogPGufJ3kZWjsW3A
______________________________________________________

> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ ɴᴇᴛʜᴍɪᴋᴀ ᴍᴀɪɴ*
`
await conn.sendMessage(from,{image:{url: `https://imgtr.ee/images/2024/09/17/37f9be869d1404ef1a5d188178450537.jpeg`},caption:dec},{quoted:mek});

}catch(e){
console.log(e)
reply(`${e}`)
}
})
