const path = require("path");
const express = require("express");
const ejs = require("ejs");
const app = express();

const staticPage = path.join(__dirname,"../public")
const templatePath = path.join(__dirname,"../templates")
// to set the view engine
app.set("view engine","ejs");
// app.set("views", templatePath)



//built in middleware
// app.use(express.static(staticPage));

app.get("/",(req,res) => {
    res.render("index",{
        name:"anshika gupta",
        age:20,
    });
    res.send();
});

app.get("*",(req,res) =>{
    res.send("file is not found! 404 error");
});



app.listen(8000,() => {
    console.log("listening at 8000 port");
})