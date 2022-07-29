const fs = require('fs')
const chalk = require('chalk')

// Free Apikey
global.APIs = {
	riy: 'https://api-xriy04.herokuapp.com',
}

// Other
global.owner = ['6281241100804']
global.premium = ['6281241100804']
global.youtube = 'https://youtube.com/c/Riy'
global.ownername = '𝗡𝗲𝗹𝘀𝗼𝗻:𝘃'
global.botname ='𝙉𝙚𝙡𝘽𝙤𝙩-𝐌𝐃'
global.donasi = {
    saweria: 'https://saweria.co/NelBotMD',
    nomor: '081241100804'
}
global.packname = '𝙉𝙚𝙡𝘽𝙤𝙩-𝐌𝐃'
global.author = 'WhatsApp Bot'
global.sessionName = 'session'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    success: '✓ Success',
    admin: 'Fitur Khusus Admin Group!',
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
    owner: 'Fitur Khusus Owner Bot',
    group: 'Fitur Digunakan Hanya Untuk Group!',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!',
    bot: 'Fitur Khusus Pengguna Nomor Bot',
    wait: '```「▰▰▰▱▱▱▱▱▱▱」𝗟𝗼𝗮𝗱𝗶𝗻𝗴...```'
}
global.thumb = fs.readFileSync('./image/hinata.jpg')
global.vn = './sound/menu.mp3'

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
