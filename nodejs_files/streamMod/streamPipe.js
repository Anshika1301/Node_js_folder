const http = require('http');
const fs = require("fs");

const server = http.createServer();

server.on("request", (req,res) =>{
    const streamPipe = fs.createReadStream("show.txt");
    streamPipe.pipe(res);
});

server.listen(8000, "127.0.0.1", ()=>{
    console.log("listening at port 8000");
});