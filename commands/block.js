const { MessageEmbed } = require("discord.js");

exports.run = (client, message) => {
  let args = ["undefined", "undefined", "undefined"];
  args = message.content
    .slice(client.PREFIX.length + 5)
    .trim()
    .split("/");
  if (args.length < 3) {
    message.channel.send(
      "``Argument exepted : !block 𝙖𝙧𝙜𝙨(Title) / 𝙖𝙧𝙜𝙨(Cleint side) / 𝙖𝙧𝙜𝙨(Dev side)``"
    );
    return;
  }

  const embed = new MessageEmbed()
    .setColor("#f2f542")
    .setTitle(args[0])
    .addField("User side", args[1])
    .addField("Dev side", args[2])
    .setFooter(`*Block added by ${message.author.tag}*`);
  message.channel.send(embed);
};
exports.help = {
  name: "block"
}
