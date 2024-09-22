const chalk=require("chalk")

const validator=require("validator")

const res=validator.isEmail("akash@akash.com");
console.log(res);
console.log(chalk.blue("Hello World"));
console.log(chalk.blue.underline("Hello World"));
console.log(chalk.blue.underline.inverse("Hello World"));