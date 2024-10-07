const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "UyVlmKDa#2akcd7rPAfthLrRMIh8Ux0at3a1VCkErUJnivVmJdUI",
ALIVE_IMG: process.env.ALIVE_IMG || "https://i.ibb.co/Rj6sSqR/d42734f1-a858-4ea1-8ae5-7b004302ad40.jpg",
ALIVE_MSG: process.env.ALIVE_MSG || "Hello I'm alive now",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
MODE: process.env.MODE || "public",
SUDO_NB: process.env.SUDO_NB || "94704227534",
OWNER_NAME: process.env.OWNER_NAME || "Nethmika MAIN",
BOT_NAME: process.env.BOT_NAME || "DANU-BOT",
AUTO_VOICE: process.env.AUTO_VOICE || "true"

};

