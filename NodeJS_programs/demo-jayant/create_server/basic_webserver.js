// http module -in built in node
const http = require('http');


const server = http.createServer((req, res) =>{
    res.write("Hello Jayant!! this is my first server response");
    res.end();
});

// server is an "event emitter"
// all event emitter will have a method called "on"
server.on("request",() =>{
    console.log("server recieved a request");
});

server.on("listening",() =>{
    console.log("server started listening successfully");
});

server.on("error",(err) =>{
    console.log(err.message);
});


//port number >= 1024
server.listen(3000);