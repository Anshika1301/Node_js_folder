 const http = require("http");
 const fs = require("fs");
 const requests = require("requests");

 const server = http.createServer((req,res) =>{
    if(req.url == "/"){
        requests("http://api.openweathermap.org/data/2.5/weather?q=london&appid=e67044cc7ab6f696ada70cc0c4a9bb46&units=metric")
        .on("data",(chunk) =>{
            // console.log(chunk);
            const data = JSON.parse(chunk);
            const arr = [data];
            console.log(arr);
            console.log(arr[0].name);
            console.log(arr[0].main.temp);
            console.log(arr[0].main.temp_min);
            console.log(arr[0].main.temp_max);
            // res.end();
        })
        .on("end", (err) =>{
            if(err)
            {
                console.log("connection closed due to error",err);
            }
            console.log("end");
        });
    }
 });

 server.listen(8000, "127.0.0.1", () => {
     console.log("server is listening at 8000 port");
 });