const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = async (client, message, args) => {


const are = new Discord.RichEmbed()
.setColor("#7289DA")
.addField("**YVZ • Eğlence Komutları**", `▫️ **|  y!ascii:** Yazdığınız yazıyı ascii formatına dönüştürür. \n▫️ **|  y!aşk-ölçer:** İki kullanıcı arasındaki aşkı ölçer.\n ▫️ **|  y!dans:** Yazdığınız şeyi dans ascii şekline çevirir.\n ▫️ **|  y!düello:** İstediğiniz bir kişi eğlenceli ve zorlu bir kapışma yaparsınız!.\n ▫️ **|  y!mesaj:** IDini verdiğiniz mesaj hakkında bilgi verir. (IDi verilen mesaj komutun kullanıldığı kanalda yok ise mesajı bulamaz.).\n ▫️ **|  y!pokemon:**Belirtilen Pokemon hakkında bilgi verir.\n ▫️ **|  y!sor:**Yapay zeka ile sorularınıza cevap verir..\n ▫️ **|  y!yazdır:**İstediğiniz yazıyı bota webhook ile etiketlenen kullanıcının ağzından yazdırır.\n\n`) 
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
 name: 'yardım-eğlence',
 description: 'Avatarınızı veya etiketlediğiniz kişinin avatarını atar.',
 usage: 'yetkili'
 }
