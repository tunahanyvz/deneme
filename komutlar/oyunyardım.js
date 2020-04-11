const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = async (client, message, args) => {


const are = new Discord.RichEmbed()
.setColor("#7289DA")
.addField("**YVZ • Oyun Komutları**", `▫️ **|  y!fortnite:** İstediğiniz bir fortnite kullanıcısının istatistiklerini gösterir. \n▫️ **|  y!oyun-ara:** Verilen oyun hakkında bilgi verir.\n ▫️ **|  y!csgo:** Girilen oyuncunun csgo istatistiklerini gösterir.\n\n`) 
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
 name: 'yardım-oyun',
 description: 'Avatarınızı veya etiketlediğiniz kişinin avatarını atar.',
 usage: 'yetkili'
 }


