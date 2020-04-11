const Discord = require('discord.js');

exports.run = (client, message, args) => {

 let pages = [
"**ÖA • Ayar Komutları**\n" + `▫️ **|  y!caps-engelle:** Büyük harf engelleme sistemini açıp kapatmanızı sağlar. \n▫️ **|  y!giriş-mesaj-ayarla:** Giriş mesajını değiştirmenizi sağlar.\n ▫️ **|  y!oto-rol-ayarla:** Sunucuya birisi katıldıgında verilecek rolü ayarlar.\n ▫️ **|  y!davet-kanal-ayarla:** Davet kanalını ayarlar. \n ▫️ **|  y!giriş-çıkış-ayarla:** Giriş çıkış kanalını ayarlar.\n ▫️ **|  y!sayaç-ayarla:**Sayacı ayarlar.\n ▫️ **|  y!destek-kanal-ayarla:**Birisi susturulunca verilecek rolü ayarlar.\n ▫️ **|  y!sustur:**İstediğiniz kişiyi susturur.`,
"**ÖA • Ayar Komutları**\n" + `\n ▫️ **|  y!küfür-engelle:**Küfür engelleme sistemini açıp kapatmanızı sağlar.\n ▫️ **|  y!sayaç-kanal-ayarla:**Sayaç kanalını ayarlar.\n ▫️ **|  y!link-engelle:**Lİnk engelleme sistemini açıp kapatmanızı sağlar.\n ▫️ **|  y!tag-ayarla:**Sunucuya katılan üyeye otomatik tag verir.\n ▫️ **|  y!destek-rol-ayarla:**Gelişmiş Destek Sistemindeki destek ekibi rolünü değiştirmenizi sağlar.\n ▫️ **|  y!log-ayarla:**Sunucu kayıtları kanalını ayarlar.\n ▫️ **|  y!çıkış-mesaj-ayarla:**Çıkış mesajını değiştirmenizi sağlar.\n ▫️ **|  y!ön-ek:**Botun ön ekini sunucuya özel olarak değiştirir.\n\n`,
              ];
  let page = 1;

  const embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setThumbnail('https://cdn.glitch.com/59654dfc-f82b-4f0e-b5f8-789b0d938ec0%2FE%C4%9Flence.png?1548756296480')
    .setFooter(`Sayfa ${page} / ${pages.length}`)
    .setDescription(pages[page-1])
  message.channel.send(embed).then(msg => {

  msg.react('⬅')
  .then(r => {
    msg.react('➡')

      //Filter
      const backwardsFilter = (reaction, user) => reaction.emoji.name === '⬅' && user.id === message.author.id;
      const forwardsFilter = (reaction, user) => reaction.emoji.name === '➡' && user.id === message.author.id;

      const backwards = msg.createReactionCollector(backwardsFilter, { time: 100000 });
      const forwards = msg.createReactionCollector(forwardsFilter, { time: 100000 });

      forwards.on('collect', r => {
        if(page === pages.length) return;
        page++;
        embed.setDescription(pages[page-1]);
        embed.setColor('RANDOM')
        embed.setFooter(`Sayfa ${page} / ${pages.length}`)
        msg.edit(embed)
      })
      backwards.on('collect', r => {
        if(page === 1) return;
        page--;
        embed.setColor('RANDOM')
        embed.setDescription(pages[page-1]);
        embed.setFooter(`Sayfa ${page} / ${pages.length}`)
        msg.edit(embed)
      })

    })
  })
};


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
 };
 
 exports.help = {
 name: 'yardım-ayarlar',
 description: 'Avatarınızı veya etiketlediğiniz kişinin avatarını atar.',
 usage: 'yetkili'
 }

