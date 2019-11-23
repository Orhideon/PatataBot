const { Client, MessageEmbed } = require("discord.js");
const { TOKEN, PREFIX } = require("./config");
const client = new Client();

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
client.on("message", msg => {
  if (msg.author.bot) return;
  const args = msg.content.split(/ +/g);
  const cmd = args.shift().toLowerCase();
  const logschannel = client.channels.find(r => r.name === "logs");

  if (cmd === `${PREFIX}say`) {
    msg.channel.send(args.join(" "));
    logschannel.send(
      `${msg.author} said \`\`${args.join(
        " "
      )}\`\` with the <@643107509674180610>`
    );
    msg.delete().then(console.log("Message delete"));
  }

  if (cmd === `${PREFIX}serverinfo`) {
    const embed = new MessageEmbed()
      .setDescription(msg.guild.name)
      .setThumbnail(msg.guild.iconURL())
      .addField("Members", msg.guild.memberCount)
      .addField("Members", msg.guild.memberCount)
      .setFooter(msg.guild.owner.user.tag, msg.guild.owner.user.avatarURL())
      .setTimestamp();
    msg.channel.send(embed);
  }

  if (cmd === `${PREFIX}role`) {
    const role = msg.guild.roles.find(r => r.name === args[0]);
    msg.delete();
    if (!role) return msg.channel.send("ce role n'existe pas");
    if (msg.member.roles.find(r => r.name === args[0])) {
      msg.member.roles.remove(role);
      logschannel.send(`Le role ${role} à été enlevé à ${msg.author}`);
    } else {
      msg.member.roles.add(role);
      logschannel.send(`Le role ${role} à été ajouté à ${msg.author}`);
    }
  }
});

client.login(TOKEN);

client.on("guildMemberAdd", member => {
  const channel = client.channels.find(r => r.name === "welcom");
  channel.send(`Welcom ${member}`);
});
