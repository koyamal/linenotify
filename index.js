const dotenv = require("dotenv");
const axios = require("axios");

const token = dotenv.config().parsed.lineToken;
const url = dotenv.config().parsed.lineUrl;
const message = dotenv.config().parsed.message;

const handle = async function(){
    const pubMsg = await axios.post(
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
    ).then(function (response) {
        console.log(response.data);
        
    }).catch(function (error) {
        console.log(error);
        
    });;
};

handle();