const fs  = require('fs');
const path = require('path');
const content = `<!DOCTYPE html>
<html>
<body>
<h1>
hello jayant</h1>
</body>
</html>`;

fs.writeFile(path.join(__dirname, './newly_created_file', 'hello.html'), content,{encoding:'utf-8'},(err) =>{
    if(err){
        console.log(err.message);
        return;
    }
    console.log("file has been created");

});

// this line executes even before the file reads
console.log("last line of the script");
