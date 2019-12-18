const { MessageEmbed } = require("discord.js");

exports.run = (client, message) => {
  const embed = new MessageEmbed()
    .setTitle(message.guild.name)
    .setDescription("Create a discord bot with blocks")
    .setThumbnail(message.guild.iconURL())
    .setURL("http://then().bot")
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
exports.help = {
  name: "sinfo"
}
