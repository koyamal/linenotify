const dotenv = require("dotenv");
const axios = require("axios");

const token = dotenv.config().parsed.lineToken;
console.log(token);
const url = dotenv.config().parsed.url;
console.log(url);

axios({
    method: 'post',
    ContentType: 'application/x-www-form-urlencoded',
    url: 'http://bit.ly/2mTM3nY',
    responseType: 'stream'
  })
    .then(function (response) {
      console.log(response.data);
    });

const {data} = await axios.post(
    url, 
    {
        message: 'This is Test',
    }, 
    {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Bearer ' + token
        }
    }
)

data();