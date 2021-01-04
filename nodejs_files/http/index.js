const http = require("http");

const server = http.createServer((req,res)=>{
    if(req.url == "/")
    {res.end("hello from home side");}
    else if(req.url == "/about")
    {res.end("hello from about side");}
    else if(req.url=="/contact")
    {res.end("hello from contact side");}
    else{
        res.writeHead(404,{"Content-type":"text/html"});
        res.end("<h1>404 error,File doesn't exist</h1>");}
});
server.listen(8000,"127.0.0.1",()=> {
    console.log("server is running on port no 8000");
});