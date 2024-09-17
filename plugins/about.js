const config = require('../config')

const {cmd , commands} = require('../command')



cmd({

    pattern: "about",

    desc: "To get the bot informations.",

    react: "ℹ️",

    category: "main",

    filename: __filename

},

async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {

try{



let about = ` *👋 Hello ${pushname}*
                    
 𝐈 𝐀𝐌 𝐍𝐄𝐓𝐇𝐔-𝐌𝐃 𝐖𝐇𝐀𝐓𝐒𝐀𝐏𝐏 𝐁𝐎𝐓
 
𝐂𝐑𝐄𝐀𝐓𝐄𝐃 𝐁𝐘 𝐍𝐄𝐓𝐇𝐌𝐈𝐊𝐀 𝐌𝐀𝐈𝐍...
           
*ɢɪᴛʜᴜʙ :* පුකද බලන්නේ 😹         
*ʏᴏᴜᴛᴜʙᴇ :* https://www.youtube.com/@SlNethuMax   
*ᴡʜᴀᴛꜱᴀᴘᴘ ᴄʜᴀɴɴᴇʟ :* https://whatsapp.com/channel/0029VagCogPGufJ3kZWjsW3A

> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ ɴᴇᴛʜᴍɪᴋᴀ ᴍᴀɪɴ*`

return await conn.sendMessage(from,{image: {url:`https://imgtr.ee/images/2024/09/17/37f9be869d1404ef1a5d188178450537.jpeg`},caption:about},{quoted: mek})

}catch(e){

console.log(e)

reply(`${e}`)

}

})




