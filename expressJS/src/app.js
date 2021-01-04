const path = require("path");
const express = require("express");
const app = express();

// console.log(path.join(__dirname, "../public"));

const staticPath = path.join(__dirname,"../public");

//builtin middleware
app.use(express.static(staticPath));

app.get("/",(req,res)=>{
    res.send("hello frnds");
});

app.get("/contact",(req,res)=>{
    res.send("hello frnds from contact");
});

app.get("/about",(req,res)=>{
    res.write("<h1>hello frnds from about</h1>")
    res.write("<h3>thanks for visit this website</h3>");
    res.send();
});

app.listen(8000,()=>{
    console.log("listening port at 8000");
});