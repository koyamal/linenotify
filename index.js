const dotenv = require("dotenv");
const axios = require("axios");

const token = dotenv.config().parsed.lineToken;
const url = dotenv.config().parsed.lineUrl;
const message = dotenv.config().parsed.message;

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
        message,
    }, 
    {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Bearer ' + token
        }
    }
);