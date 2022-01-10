import chalk from "chalk";
const success = () => chalk.bold.green("Added a product to the database");
const warn = () => chalk.bold.yellow("This is a warning");
const error = () => chalk.yellow("Unable to connect to the database");
module.exports = {
  success,
  warn,
  error,
};
