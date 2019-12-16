const { Client, Collection } = require("discord.js");
const fs = require("fs");
const { TOKEN } = require("./config");

const client = new Client();

require("./util/functions")(client);
client.mongoose = require("./util/mongoose.js");

client.commands = new Collection();
client.commands.set("say", require("./commands/say.js"));
client.commands.set("role", require("./commands/role.js"));
client.commands.set("sinfo", require("./commands/sinfo.js"));
client.commands.set("animals", require("./commands/animals.js"));
client.commands.set("rap", require("./commands/rap.js"));
client.commands.set("eval", require("./commands/eval.js"));
client.commands.set("block", require("./commands/block.js"));
client.commands.set("patata", require("./commands/patata.js"));
client.commands.set("config", require("./commands/config.js"));

client.on("ready", () => require("./events/ready.js")(client));
client.on("guildCreate", guild =>
  require("./events/guildCreate.js")(client, guild)
);
client.on("message", message =>
  require("./events/message.js")(client, message)
);
client.on("guildMemberAdd", member =>
  require("./events/guildMemberAdd.js")(client, member)
);

client.mongoose.init();
client.login(TOKEN);
client.on("error", console.error);
client.on("warn", console.warn);
