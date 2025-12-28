const { formatMessage } = require('../../utils/formatter');

const fs = require("fs");
module.exports.config = {
  name: "chai",
    version: "1.0.1",
  hasPermssion: 0,
  credits: "Kashif Raza", 
  description: "hihihihi",
  commandCategory: "no prefix",
  usages: "tea",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
  var { threadID, messageID } = event;
  if (event.body.indexOf("Chay")==0 || event.body.indexOf("chai")==0 || event.body.indexOf("Chai")==0 || event.body.indexOf("CHAI")==0) {
    var msg = {
        body: "PAKAR CHAI",
        attachment: fs.createReadStream(__dirname + `/noprefix/tea.mp4`)
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🧸", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
