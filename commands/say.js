module.exports = (client, message, args, logschannel) => {
  message.channel.send(args.join(" "));
  logschannel.send(
    `${message.author} said \`\`${args.join(
      " "
    )}\`\` with the <@643107509674180610>`
  );
  message.delete().then(console.log("Message delete"));
};
