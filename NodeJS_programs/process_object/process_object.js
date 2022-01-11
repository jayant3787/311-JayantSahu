// console.log(process);    

// an object with the environment variable
// console.log(process.env);
// console.clear();
console.log( process.env.PORT );
console.log(process.argv);
const n1  = parseInt(process.argv[2]);
const n2  = parseInt(process.argv[3]);
if (isNaN(n1)|| isNaN(n2)){
    console.log("please provide a number");
    process.exit(1);
}

// when u want to stop the program

console.log(n1+n2);






