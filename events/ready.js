module.exports = client => {
  console.log("Bot logged");
  client.user.setActivity("each of you.", { type: "WATCHING" });
};
