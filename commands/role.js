module.exports = (client, message, args, logschannel) => {
  const role = message.guild.roles.find(r => r.name === args[0]);
  message.delete();
  if (!role) return message.channel.send("ce role n'existe pas");
  if (message.member.roles.find(r => r.name === args[0])) {
    message.member.roles.remove(role);
    logschannel.send(`Le role ${role} à été enlevé à ${message.author}`);
  } else {
    message.member.roles.add(role);
    logschannel.send(`Le role ${role} à été ajouté à ${message.author}`);
  }
};
