const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = async (client, message, args) => {


const are = new Discord.RichEmbed()
.setColor("#7289DA")
.addField("**YVZ • Moderasyon Komutları**", `▫️ **|  y!yasakla:** İstediğiniz kişiyi sunucudan yasaklar. \n▫️ **|  y!at:** İstediğiniz kişiyi sunucudan atar.\n ▫️ **|  y!konuştur:** Susturulmuş bir kişinin susturmasını kaldırmayı sağlar.\n ▫️ **|  y!mod-log-ayarla:** Moderasyon kayıtları kanalını ayarlar.\n ▫️ **|  y!reklam-taraması:** Kullanıcıların oynuyor mesajlarındaki ve kullanıcı adlarındaki reklamları tarar.\n ▫️ **|  y!yavaş-mod:**Bulunduğunuz kanala yazma sınırı (süresi) ekler.\n ▫️ **|  y!sustur-rol-ayarla:**Birisi susturulunca verilecek rolü ayarlar.\n ▫️ **|  y!sustur:**İstediğiniz kişiyi susturur.\n ▫️ **|  y!temizle-üye:**Belirtilen kişinin belirtilen miktarda mesajını siler.\n ▫️ **|  y!temizle:**Belirtilen miktarda mesaj siler.\n ▫️ **|  y!uyar:**İstediğiniz kişiyi uyarır.\n ▫️ **|  y!uyarı-kaldır:**İstediğiniz kişinin uyarılarını kaldırır..\n ▫️ **|  y!uyarılar:**İstediğiniz kişinin uyarılarını gösterir.\n\n`) 
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
 name: 'yardım-yapımcı',
 description: 'Avatarınızı veya etiketlediğiniz kişinin avatarını atar.',
 usage: 'yetkili'
 }




