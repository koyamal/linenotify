const dotenv = require("dotenv");
const axios = require("axios");

const token = dotenv.config().parsed.token;
console.log(token);