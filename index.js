const dotenv = require("dotenv");
const axios = require("axios");

const token = dotenv.config().parsed.token;
console.log(token);

axios({
    method: 'get',
    url: 'http://bit.ly/2mTM3nY',
    responseType: 'stream'
  })
    .then(function (response) {
      console.log(response.data);
    });