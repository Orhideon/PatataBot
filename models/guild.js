const mongoose = require("mongoose");
const { DEFAULTSETTINGS: defaults } = require("../config.js");

const guildSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  guildID: String,
  guildName: String,
  prefix: {
    type: String,
    default: defaults.prefix
  },
  welcomChannel: {
    type: String,
    default: defaults.welcomChannel
  },
  welcomMessage: {
    type: String,
    default: defaults.welcomeMessage
  },
  admin: {
    type: Array,
    default: defaults.admin
  }
});
module.exports = mongoose.model("Guild", guildSchema);
