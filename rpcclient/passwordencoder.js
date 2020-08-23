const { password } = require("./config");


module.exports = (login , password) =>
(new Buffer(login + ":" + password).toString("base64"))