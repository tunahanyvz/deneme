const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = async (client, message, args) => {


const are = new Discord.RichEmbed()
.setColor("#7289DA")
.addField("**YVZ • Kullanıcı Komutları**", `▫️ **|  y!afk:** AFK olursunuz. (Birisi sizi etiketlediğinde AFK olduğunuzu söyler.) \n▫️ **|  y!atatürk:** : Atatürk ün rastgele bir resmini atar.\n ▫️ **|  y!avatar:** Avatarınızı gösterir.\n ▫️ **|  y!havadurumu:** Yazılan konumun hava durumu bilgisini gösterir.\n ▫️ **|  y!hesapla:** Belirtilen işlemi yapar.\n ▫️ **|  y!kitap-ara:**Yazılan kitabın bilgisini gösterir.\n ▫️ **|  y!kullanıcı-bilgi:**İstediğiniz kullanıcı veya komutu kullanan kullanıcı hakkında bilgi verir.\n ▫️ **|  y!romen:**Yazdığınız sayının romen karşılığını yazar.\n ▫️ **|  y!söz:**Rastgele güzel sözler atar.\n ▫️ **|  y!yetkilerim:**Komutu kullandığınız sunucudaki yetkilerinizi/izinlerinizi gösterir.\n ▫️ **|  y!çevir:**İstediğiniz yazıyı istediğiniz dile çevirir.\n\n`) 
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
 name: 'yardım-kullanıcı',
 description: 'Avatarınızı veya etiketlediğiniz kişinin avatarını atar.',
 usage: 'yetkili'
 }


