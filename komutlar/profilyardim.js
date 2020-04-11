const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = async (client, message, args) => {


const are = new Discord.RichEmbed()
.setColor("#7289DA")
.addField("**YVZ • Profil Komutları**", `▫️ **|  y!bakiye:** Bakiyenizi gösterir. \n▫️ **|  y!slot:** Slot makinesi ile oynarsınız. Kazanırsanız rastgele para kazanır, kaybederseniz rastgele para kaybedersiniz.\n\n`) 
.setFooter(`${message.author.username} tarafından istendi.`, message.author.avatarURL)
      message.channel.send(are)

}

//Normal değil yetkili!

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
 };
 
 exports.help = {
 name: 'yardım-profil',
 description: 'Avatarınızı veya etiketlediğiniz kişinin avatarını atar.',
 usage: 'yetkili'
 }

