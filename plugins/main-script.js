import fetch from 'node-fetch'

let handler = async function (m, { conn, text, usedPrefix }) {

let m2 = `
ᴛʜᴇ ɢᴜʀᴜ ʙᴏᴛ ꜱᴄʀɪᴘᴛ
*നോക്കിയിരുന്നോ ഇപ്പോകിട്ടും 😂*
ᴅᴏ ꜱᴛᴀʀ ᴛʜᴇ ʀᴇᴘᴏ ᴀɴᴅ ꜰᴏʀᴋ
`
let pp = 'Pain-MD' 
conn.sendButton(m.chat, m2, pp, [
  ['⏍ Info', `${usedPrefix}botinfo`],
  ['⌬ Groups', `${usedPrefix}gpPain`]
],m, rpyt)

}

handler.help = ['audios']
handler.tags = ['main']
handler.command = ['script', 'sc', 'repo'] 

export default handler
