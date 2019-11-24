module.exports = (client, member) => {
  member.send(
    "Welcom on Patata Discord.I invite you to read the welcom channel to know rules.This server is actually in Beta, if a bug is happening , pleasing inform staff."
  );
  const channel = client.channels.find(r => r.name === "welcom");
  channel.send(`Welcom ${member}`);
};
