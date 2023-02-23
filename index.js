const dotenv = require("dotenv");

const result = dotenv.config();

console.log(result);
console.log(result.parsed);
console.log(result.parsed.KEY1);