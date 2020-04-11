const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = async (client, message, args) => {


const are = new Discord.RichEmbed()
.setColor("#7289DA")
.addField("**YVZ • Sunucu Komutları**", `▫️ **|  y!ayarlar:** Sunucu ayarlarını gösterir. \n▫️ **|  y!dil-değiştir:** Botun dilini değiştirir.\n ▫️ **|  y!emoji:** Bulunduğunuz sunucudaki emojiler sayfalı gösterir.\n ▫️ **|  y!emojiler:** Bulunduğunuz sunucudaki emojileri gösterir.\n ▫️ **|  y!oylama:** Sunucunuzda oylama yapmanızı sağlar.\n ▫️ **|  y!roller:**Bulunduğunuz sunucudaki rolleri gösterir.\n ▫️ **|  y!sunucu-bilgi:**Bulunduğunuz sunucu hakkında bilgi verir.\n ▫️ **|  y!yetkililer:**Bulunduğunuz sunucudaki yetkilileri çevrimiçi, çevrımdışı/görünmez, rahatsız etmeyin ve boşta modlarında olup olmadıklarını göstererek listeler. (Yönetici yetkisine sahip kullanıcıları yetkili olarak sayar.)\n\n`) 
.setFooter(`${message.author.username} tarafından istendi.`, message.author.avatarURL)
      message.channel.send(are) 

}


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
 };
 
 exports.help = {
 name: 'yardım-sunucu',
 description: 'Avatarınızı veya etiketlediğiniz kişinin avatarını atar.',
 usage: 'yetkili'
 }


