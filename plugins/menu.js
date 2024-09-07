const {cmd , commands} = require('../command')

cmd({
    pattern: "menu",
    desc: "menu the bot",
    category: "menu",
    react: "📜",
    filename: __filename
},

async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let dec = `*👋 Helllo ${pushname}*


> *DOWNLOAD COMMANDS* 📥

${menu.download}

> *MAIN COMMANDS* 🖥️

${menu.main}

> *GROUP COMMANDS* ⚜️

${menu.group}

> *OWNER COMMANDS* 📶

${menu.owner}

> *CONVERT COMMANDS* 🫅

${menu.convert}

> *SEARCH COMMANDS* 🔎

${menu.search}

> *OTHER COMMANDS* 👨‍💻

${menu.other}

> *FUN COMMANDS* 🤭

${menu.fun}

*©Qᴜᴇᴇɴ ᴋʏʟɪᴇ-ᴍᴅ ʙʏ ꜱᴀʜᴀꜱ ᴛᴇᴄʜッ*`
await conn.sendMessage(from,{image:{url: `https://telegra.ph/file/938f552daff11c7f73378.jpg`},caption:dec},{quoted:mek});

}catch(e){
console.log(e)
reply(`${e}`)
}
})
