const { Client, Collection } = require("discord.js");
const fs = require("fs");
const { TOKEN } = require("./config");

const client = new Client();

require("./util/functions")(client);
client.mongoose = require("./util/mongoose.js");


fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return undefined;
    const event = require(`./events/${file}`);
    const eventName = file.split(".")[0];
    console.log(`Event ${eventName} loaded.`);
    client.on(eventName , event.bind(null, client))
  });
});

client.commands = new Collection();
fs.readdir("./commands/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return undefined;
    const props = require(`./commands/${file}`);
    const cmdName = file.split(".")[0];
    console.log(`Commande ${cmdName} loaded.`);
    client.commands.set(cmdName,props);
  });
});

client.mongoose.init();
client.login(TOKEN);
client.on("error", console.error);
client.on("warn", console.warn);
