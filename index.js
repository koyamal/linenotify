const dotenv = require("dotenv");

const token = dotenv.config().parsed.token;
console.log(token);