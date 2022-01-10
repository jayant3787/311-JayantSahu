console.log(process.argv);
const divide = process.argv[2];
const num1 = parseInt(process.argv[3]);
const num2 = parseInt(process.argv[4]);
if (isNaN(num1) || isNaN(num2)) {
  console.log("please provide a number");
  process.exit(1);
}
console.log(num1 / num2);
