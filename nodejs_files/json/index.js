const fs = require("fs");

const data = {
    name : "Anshika Gupta",
    age : 20,
    graduation : "B-tech"
}

const jsonData = JSON.stringify(data);

fs.writeFile('jsondata.json', jsonData, (err)=>{
    console.log("file created");
})

fs.readFile("jsondata.json","utf-8",(err, data)=>{
    console.log(data);
    const origData = JSON.parse(data);
    console.log(origData);
})


// console.log(jsonData.age);
// const dataObj = JSON.parse(jsonData);
// console.log(dataObj.name);
