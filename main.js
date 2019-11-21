const Discord = require("discord.js");
const { TOKEN, PREFIX } = require("./config");
const client = new Discord.Client();

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
client.on("message", msg => {
  if (msg.author.bot) return;
  const args = msg.content.split(/ +/g);
  const cmd = args.shift().toLowerCase();
  if (cmd === `${PREFIX}ping`) {
    msg.reply("pong");
  }
  if (cmd === `nlb`) {
    msg.channel.send(
      "la vie de ma mère ,la douane des stupes , majeur en l'aire , ves-ki les quef j'sais comment faire , oué la justice **QUEL SAOPE**!!! *Bipe boup..*"
    );
  }
});

client.login(TOKEN);

client.on("guildMemberAdd", member => {
  const channel = client.channels.find(r => r.name === "welcom");
  channel.send(`Welcom ${member}`);
});
