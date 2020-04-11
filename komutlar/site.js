const Discord = require("discord.js")

exports.run = (client, message, args) => {
var embed = new Discord.RichEmbed()


.setTitle(`Sitemizin Linki Aşağıdadır`)
.setDescription("**http://www.tunahanyavuz.com.tr**")
.setColor("#ff0a0a")
.setTimestamp()
message.channel.send(embed)
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["web"],
  permLevel: 0,
  kategori: "genel",
};

exports.help = {
  name: 'site',
  description: 'Botun Sitesini Gösterir.',
  category: 'genel',
  usage: 'test'
};