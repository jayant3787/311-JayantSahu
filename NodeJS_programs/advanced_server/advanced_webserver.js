// http module -in built in node
const http = require('http');
const url = require('url');


const server = http.createServer((req, res) =>{
    const urlParts = url.parse(req.url,true);
    console.log(urlParts);
    const word = urlParts.pathname.substring(1);
    let formattedWord;
    if(urlParts.query.format == 'upper'){
        formattedWord = word.toUpperCase(); 
    }
    else if(urlParts.query.format == 'lower'){
        formattedWord = word.toLowerCase();
    }
    else{
        formattedWord = word;
    }
    res.write(formattedWord+' Jayant');
    
    if(urlParts.query.showDate == 'true'){
    let date = new Date().toDateString();
    res.write(date);
    }



    // console.log(req.url);
    // const word = req.url.substring(1);
    // res.write(word +' Jayant');
    // res.write("Hello Jayant!! this is my first server response");
    res.end();
});


server.on("listening",() =>{
    console.log("server started listening successfully");
});

server.on("error",(err) =>{
    console.log(err.message);
});


//port number >= 1024
server.listen(3000);