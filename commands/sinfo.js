const { MessageEmbed } = require("discord.js");

module.exports = (client, message) => {
  const embed = new MessageEmbed()
    .setTitle(message.guild.name)
    .setDescription("Create a discord bot with blocks")
    .setThumbnail(message.guild.iconURL())
    .setURL("http://patatabot.com")
    .setColor(0x00ae86)
    .addField("Members", message.guild.memberCount)
    .addField("Hitler", "39 - 45")
    .setFooter(
      message.guild.owner.user.tag,
      message.guild.owner.user.avatarURL()
    )
    .setTimestamp();
  message.channel.send(embed);
};
