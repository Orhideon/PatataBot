module.exports = async (client, message, args, settings) => {
  if (message.author.bot) return;
  function clean(text) {
    if (typeof text === "string")
      return text
        .replace(/`/g, "`" + String.fromCharCode(8203))
        .replace(/@/g, "@" + String.fromCharCode(8203));
    return text;
  }
  // eslint-disable-next-line prettier/prettier
  if (message.author.bot) return;
  if (!settings.admin.includes(message.author.id)) return;
  try {
    const code = args.join(" ");
    if (code.indexOf("process") !== -1) {
      message.channel.send("Nope");
      return;
    }
    let evaled = eval(code);
    if (typeof evaled !== "string") evaled = require("util").inspect(evaled);
    message.channel.send(clean(evaled), { code: "js" });
  } catch (err) {
    message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
  }
};
