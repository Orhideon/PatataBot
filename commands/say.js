exports.run = (client, message, args) => {
  if (args[0] === undefined) {
    message.channel.send("``Argument exepted : !say 𝙖𝙧𝙜𝙨``");
    return;
  }
  const logschannel = client.channels.find(r => r.name === "logs");
  message.channel.send(args.join(" "));
  // eslint-disable-next-line prettier/prettier
  logschannel.send(`${message.author.username} said \`\`${args.join(" ")}\`\` with the <@643107509674180610>`);
  message.delete();
};
exports.help = {
  name: "say"
}
