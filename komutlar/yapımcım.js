const Discord = require("discord.js")

exports.run = (client, message, args) => {
  message.delete()

  var embed = new Discord.RichEmbed()

.setTitle(`<a:serit:559815474607816718> Yvz | Playboy Bilgi ` ,message.author.avatarURL)
.addField(`Sahip`, `<@465245183332581387>`,true) //imdatt efe dc bak bi haa burda niye hata var
.addField(`Kodlayan`,`<@465245183332581387>`,true)
.addField(`Geliştirici`,`<@414704865877557259>`,true)
.addField(`Geliştirici`,`<@498404260757766154>`,true)
.setColor("GREEN")
.setThumbnail(client.user.avatarURL) // şş saşlkda guild
.addField(`Sunucu Sayısı`,client.guilds.size,true) // bu varmı böyle bişe hm unutum 1 dk
.addField(`Kullanıcı Sayısı`,client.users.size,true) // nası ya sldak neydi ?
.addField(`Komut Sayısı`,client.commands.size,true)
.addField(`Discord.js Versiyon`,Discord.version,true)
.addField(`Bot ID`,client.user.id,true) //cilent olan herşey botla ilgimi ? timam
.setDescription(`** <a:red:572163715139371020> [ Yvz | Playboy!]**`)
.setTimestamp()
.setFooter(`${message.author.username} | Tarafından Kontrol Ediliyor..`, message.author.avatarURL )
message.channel.send(embed)
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["yapıcı"],
  permLevel: 0,
  kategori: "genel",
};

exports.help = {
  name: 'yapımcım',
  description: 'Bot Yapımcısını Gösterir.',
  category: 'genel',
  usage: 'test'
};