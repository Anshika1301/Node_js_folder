const chalk = require("chalk");
const validator = require("validator");

const email = validator.isEmail("ab@gmail.cm");
// console.log(chalk.bgGreen(email));

const emailValid = email? chalk.bgGreen.bold("true") : chalk.bgRed.bold("false");
console.log(emailValid);