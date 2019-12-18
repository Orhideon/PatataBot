module.exports = async (client, message) => {
  if (message.author.bot) return;
  if (message.content.indexOf("<@643107509674180610>") !== -1) {
    message.channel.send("Yes ? It's me . *Bip boup*"); // On a bot mention.
    return;
  }
  const settings = await client.getGuild(message.guild);
  if (message.content.indexOf(settings.prefix) !== 0) return; // Start with prefix
  const args = message.content
    .slice(settings.prefix.length)
    .trim()
    .split(/ +/g);
  const command = args.shift().toLowerCase();

  const cmd = client.commands.get(command)
  if (!cmd) return undefined;
  cmd.run(client,message,args,settings);
};
