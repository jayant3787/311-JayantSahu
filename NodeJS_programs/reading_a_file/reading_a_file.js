const fs = require('fs');
const path = require('path');
fs.readFile('module_demo.js',(err,contents) =>{
    if(err){
        console.log(err.message);
        return;
    }
    console.log(contents);

});

fs.readFile('module_demo.js','utf-8',(err,contents) =>{
    if(err){
        console.log(err.message);
        return;
    }
    console.log(contents);


});

fs.readFile(path.join(__dirname,'..','references-nodejs-express.md'),'utf-8',(err,contents) =>{
    if(err){
        console.log(err.message);
        return;
    }
    console.log(contents);

});

// this line executes even before the file reads
console.log("last line of the script");