const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {

  const embedyardim = new Discord.RichEmbed()
   .setAuthor(client.user.username, client.user.avatarURL)
  .setDescription(`[Bot Davet Linki](  https://discordapp.com/oauth2/authorize?client_id=588723958153740288&scope=bot&permissions=2146958847  ) | [Destek Sunucusu](  https://discord.gg/vG9ejCs   )\n\n**Ping:** ${Math.round(client.ping)}ms!`)
  .setColor("#7289DA")
    .setThumbnail("https://cdn.glitch.com/59654dfc-f82b-4f0e-b5f8-789b0d938ec0%2Fyard%C4%B1m.png?1548836414883")
  .addField("**YVZ • Genel Komutlar**", `▫️ **|  y!yardım-eğlence:** Eğlence komutlarını gösterir. \n▫️ **|  y!yardım-moderasyon:** Moderasyon komutlarını gösterir.\n▫️ **|  y!yardım-ayarlar:** Ayar komutlarını gösterir. \n▫️ **|  y!yardım-sunucu:** Sunucu komutlarını gösterir.\n▫️ **|  y!yardım-kullanıcı:**Kullanıcı  komutlarını gösterir.\n▫️ **|  y!yardım-profil:**Profil  komutlarını gösterir.\n▫️ **|  y!yardım-oyun:**Oyun  komutlarını gösterir.\n▫️ **|  y!yardım-seviye:**Seviye  komutlarını gösterir.\n▫️ **|  y!yardım-yapımcı:**Yapımcı  komutlarını gösterir.\n▫️ **|  y!yardım-resim:**Resim  komutlarını gösterir.\n▫️ **|  y!yardım-premium:**Premium  komutları gösterir.\n▫️ **|  y!yardım-genel:**Genel komutları gösterir.\n▫️ **|  y!yardım-bot:**Bot komutlarını gösterir. \n\n`)
  .setFooter(`${message.author.username} tarafından istendi.`, message.author.avatarURL)

  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
    message.channel.send(embedyardim);
  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      message.author.send('asciidoc', `= ${command.help.name} = \n${command.help.description}\nDoğru kullanım: ` - prefix - `${command.help.usage}`);
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['h', 'halp', 'help', 'y'],
  permLevel: 0
};

exports.help = {
  name: 'yardım',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım [komut]'
};