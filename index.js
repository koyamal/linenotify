const dotenv = require("dotenv");
const axios = require("axios");

const token = dotenv.config().parsed.lineToken;
console.log(token);
const url = dotenv.config().parsed.lineUrl;
console.log(url);
const msg = dotenv.config().parsed.message;
console.log(msg);

axios({
    method: 'post',
    ContentType: 'application/x-www-form-urlencoded',
    url: 'http://bit.ly/2mTM3nY',
    responseType: 'stream'
  })
    .then(function (response) {
      //console.log(response.data);
    });

axios.post(
    url, 
    {
        message: msg,
    }, 
    {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Bearer ' + token
        }
    }
);