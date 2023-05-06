
let handler = async(m, { conn, usedPrefix, command }) => {

    let don = `
≡ *DONATION*
ONLY WANT YOUR LOVE
SUPPORT ME BY MAKING 1 MILLION SUBSCRIBERS ON MY YOUTUBE`
let img = 'https://graph.org/file/bdbd277fa00f864120cd0.jpg'
conn.sendHydrated2(m.chat, don, '▢ MAY LORD JAGANNATH BLESS YOUR DAY\n▢ ᵖᵃⁱⁿ  ┃ ᴮᴼᵀ\n▢ Subscribe  Youtube\nhttps://youtube.com/lightdarkedits1072\n', img,'https://www.instagram.com/si_jith', 'Instagram', 'https://telegram.me/moviecomplexofficial', 'TELEGRAM', [
    ], m)
}

handler.help = ['donate']
handler.tags = ['main']
handler.command = ['apoyar', 'donate', 'donar'] 

export default handler
