const { MessageEmbed } = require("discord.js");

exports.run = (client, message) => {
  const embed = new MessageEmbed()
    .setTitle("Voici la liste des meilleurs rappeurs **FR** :")
    .addField(
      "Vald",
      "Il a pas dit bonjour, ducoup il s'est fait niquer sa mère."
    )
    .addField("Lorenzo", "J'ai niqué la soeur , de la mère de ta cousine!");

  message.channel.send(embed);
};
exports.help = {
  name: "rap"
}
