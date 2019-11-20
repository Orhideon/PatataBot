const Discord = require("discord.js");
const { TOKEN, PREFIX } = require("./config");
const client = new Discord.Client();

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
client.on("message", msg => {
  const args = msg.content.split(/ +/g);
  const cmd = args.shift().toLowerCase();
  if (cmd === `${PREFIX}ping`) {
    msg.reply("pong");
  }
});

client.login(TOKEN);
