const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async (client, message, args) => {
  if (message.mentions.users.size < 1) {
  //isim profil
  let isim = await db.fetch(`pisim_${message.author.id}`);
  let isimYazi;
  if (isim == null) isimYazi = 'İsim ayarlanmamış!'
  else isimYazi = `${isim}`
  //soyisim profil
    let soyisim = await db.fetch(`psoyisim_${message.author.id}`);
  let soyisimYazi;
  if (soyisim == null) soyisimYazi = 'Soy İsim ayarlanmamış!'
  else soyisimYazi = `${soyisim}`
  //renk profil
    let renk = await db.fetch(`prenk_${message.author.id}`);
  let renkYazi;
  if (renk == null) renkYazi = "RANDOM"
  else renkYazi = `${renk}`
  //cinsiyet profil
   let cinsiyet = await db.fetch(`pcinsiyet_${message.author.id}`);
  let csYazi;
  if (cinsiyet == null) csYazi = 'Cinsiyet ayarlanmamış!'
  if (cinsiyet == 'kız') csYazi = 'Kız'
  if (cinsiyet == 'erkek') csYazi = 'Erkek'
  if (cinsiyet == 'yok') csYazi = 'Belirtmek istemiyor.'
  //hakkında profil
    let hak = await db.fetch(`phakkinda_${message.author.id}`);
  let hkYazi;
  if (hak == null) hkYazi = 'Hakkında ayarlanmamış!'
  else hkYazi = `${hak}`
  //iş profil
    let is = await db.fetch(`pis_${message.author.id}`);
  let isYazi;
  if (is == null) isYazi = 'İş ayarlanmamış!'
  else isYazi = `${is}`
  //yaş profil
   let yas = await db.fetch(`pyas_${message.author.id}`);
  let yasYazi;
  if (yas == null) yasYazi = 'Yaş ayarlanmamış!'
  else yasYazi = `${yas}`
  //kısabilgi profil
  let kb = await db.fetch(`pkbilgi_${message.author.id}`);
  let kYazi;
  if (kb == null) kYazi = 'Kısa bilgi ayarlanmamış!'
  else kYazi = `${kb}`
  //resim profil
  let resim = await db.fetch(`presim_${message.author.id}`);
  let rYazi;
  if (resim == null) rYazi = `${message.author.avatarURL}`
  else rYazi = `${resim}`
  //rozet profil
  let rozet = await db.fetch(`rozet1${message.author.id}`);
  let rdYazi;
if (rozet == null) rdYazi = '<:Basarisiz:539901544900853781>'
  else rdYazi = `${rozet}`
  //rozet2 profil
  let rozet1 = await db.fetch(`rozet2${message.author.id}`);
  let rsYazi;
if (rozet1 == null) rsYazi = '<:Basarisiz:539901544900853781>'
  else rsYazi = `${rozet1}`                
///////////////
  let rozet2 = await db.fetch(`rozet3${message.author.id}`);
  let ryYazi;
 if (rozet2 == null) ryYazi = '<:Basarisiz:539901544900853781>'
  else ryYazi = `${rozet2}`
///////////////
  let rozet3 = await db.fetch(`rozet4${message.author.id}`);
  let reYazi;
 if (rozet3 == null) reYazi = '<:Basarisiz:539901544900853781>'
  else reYazi = `${rozet3}`
  let rozet4 = await db.fetch(`rozet5${message.author.id}`);
  let rtYazi;
 if (rozet4 == null) rtYazi = '<:Basarisiz:539901544900853781>'
  else rtYazi = `${rozet4}`
  //bayrak profil
   let bayrak = await db.fetch(`pbayrak_${message.author.id}`);
  let bYazi;
  if (bayrak == null) bYazi = `🇹🇷`
  else bYazi = `${bayrak}`
  
  const embed = new Discord.RichEmbed()
  .setAuthor(`${bYazi} | ${message.author.username}`)
  .setColor(renkYazi)
  .addField('İsim', isimYazi, true)
  .addField('Soy isim', soyisimYazi, true)
  .addField('Yaş', yasYazi, true)
  .addField('Cinsiyet', csYazi, true)
  .addField('Meslek', isYazi, true)
  .addField('Biyografi', hkYazi, true)
  .addBlankField()
  .addField('Rozet', `Sahip Rozeti: ${ryYazi} \n Yetkili Rozeti: ${rtYazi} \n Möderatör Rozeti: ${rdYazi}  \n Ekip Rozeti: ${rsYazi}  \n Onay Rozeti: ${reYazi}`  ,true)
  .setFooter(kYazi)
  .setThumbnail(rYazi)
  message.channel.send(embed)

  } else if (message.mentions.users.size > 1) {
    message.channel.send(`:x: Çok Fazla kullanıcıdan bahsediyorsunuz **Maximum 1** kullanıcıdan bahsetmeniz gerekmektedir`);
  } else {
  //isim profil
  let isim = await db.fetch(`pisim_${message.mentions.members.first().id}`);
  let isimYazi;
  if (isim == null) isimYazi = 'İsim ayarlanmamış!'
  else isimYazi = `${isim}`
  //soyisim profil
    let soyisim = await db.fetch(`psoyisim_${message.mentions.members.first().id}`);
  let soyisimYazi;
  if (soyisim == null) soyisimYazi = 'Soy İsim ayarlanmamış!'
  else soyisimYazi = `${soyisim}`
  //renk profil
    let renk = await db.fetch(`prenk_${message.mentions.members.first().id}`);
  let renkYazi;
  if (renk == null) renkYazi = "RANDOM"
  else renkYazi = `${renk}`
  //cinsiyet profil
   let cinsiyet = await db.fetch(`pcinsiyet_${message.mentions.members.first().id}`);
  let csYazi;
  if (cinsiyet == null) csYazi = 'Cinsiyet ayarlanmamış!'
  if (cinsiyet == 'kız') csYazi = 'Kız'
  if (cinsiyet == 'erkek') csYazi = 'Erkek'
  if (cinsiyet == 'yok') csYazi = 'Belirtmek istemiyor.'
  //hakkında profil
    let hak = await db.fetch(`phakkinda_${message.mentions.members.first().id}`);
  let hkYazi;
  if (hak == null) hkYazi = 'Hakkında ayarlanmamış!'
  else hkYazi = `${hak}`
  //iş profil
    let is = await db.fetch(`pis_${message.mentions.members.first().id}`);
  let isYazi;
  if (is == null) isYazi = 'İş ayarlanmamış!'
  else isYazi = `${is}`
  //yaş profil
   let yas = await db.fetch(`pyas_${message.mentions.members.first().id}`);
  let yasYazi;
  if (yas == null) yasYazi = 'Yaş ayarlanmamış!'
  else yasYazi = `${yas}`
  //kısabilgi profil
  let kb = await db.fetch(`pkbilgi_${message.mentions.members.first().id}`);
  let kYazi;
  if (kb == null) kYazi = 'Kısa bilgi ayarlanmamış!'
  else kYazi = `${kb}`
  //resim profil
  let resim = await db.fetch(`presim_${message.mentions.members.first().id}`);
  let rYazi;
  if (resim == null) rYazi = `${message.mentions.users.first().avatarURL}`
  else rYazi = `${resim}`
  //rozet profil
  let rozet = await db.fetch(`rozet1${message.mentions.members.first().id}`);
  let rdYazi;
  if (rozet == null) rdYazi = '<:Basarisiz:539901544900853781>'
  else rdYazi = `${rozet}`
  //rozet2 profil
  let rozet1 = await db.fetch(`rozet2${message.mentions.members.first().id}`);
  let rsYazi;
  if (rozet1 == null) rsYazi = '<:Basarisiz:539901544900853781>'
  else rsYazi = `${rozet1}`
///////////////
  let rozet2 = await db.fetch(`rozet3${message.mentions.members.first().id}`);
  let ryYazi;
  if (rozet2 == null) ryYazi = '<:Basarisiz:539901544900853781>'
  else ryYazi = `${rozet2}`
let rozet3 = await db.fetch(`rozet4${message.mentions.members.first().id}`);
  let reYazi;
 if (rozet3 == null) reYazi = '<:Basarisiz:539901544900853781>'
  else reYazi = `${rozet3}`
  //bayrak profil
   let bayrak = await db.fetch(`pbayrak_${message.mentions.members.first().id}`);
  let bYazi;
  if (bayrak == null) bYazi = `🇹🇷`
  else bYazi = `${bayrak}`
    let rozet4 = await db.fetch(`rozet5${message.mentions.members.first().id}`);
  let rtYazi;
 if (rozet4 == null) rtYazi = '<:Basarisiz:539901544900853781>'
  else rtYazi = `${rozet4}`
  const embed = new Discord.RichEmbed()
  .setAuthor(`${bYazi} | ${message.mentions.users.first().username}  `)
  .setColor(renkYazi)
  .addField('İsim', isimYazi, true)
  .addField('Soy isim', soyisimYazi, true)
  .addField('Yaş', yasYazi, true)
  .addField('Cinsiyet', csYazi, true)
  .addField('Meslek', isYazi, true)
  .addField('Hakkında', hkYazi, true)
  .addBlankField()
 .addField('Rozet', `Sahip Rozeti: ${ryYazi} \n Yetkili Rozeti: ${rtYazi} \n Möderatör Rozeti: ${rdYazi}  \n Ekip Rozeti: ${rsYazi}  \n Onay Rozeti: ${reYazi}`  ,true)
  .setFooter(kYazi)
  .setThumbnail(rYazi)
  message.channel.send(embed)
 }
};
exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: [],
 permLevel: 0
};

exports.help = {
 name: 'profil',
 description: 'kral oldun ho',
 usage: 'kralol'
};