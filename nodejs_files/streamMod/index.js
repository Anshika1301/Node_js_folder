const http = require("http");
const fs = require("fs");

const server = http.createServer();

server.on("request", (req,res) =>{
    const stream = fs.createReadStream("streamMod/show.txt");

    stream.on("data",(chunkdata) =>{
        res.write(chunkdata);
    });

    stream.on("end", () =>{
        res.end();
    });

    stream.on("error", (err) => {
        console.log(err);
        res.end("404 error");
    })

});

server.listen(8000, "127.0.0.1", () =>{
    console.log("listening at port 8000");
});