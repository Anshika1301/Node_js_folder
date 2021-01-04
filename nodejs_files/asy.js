const fs = require("fs");

// fs.writeFile("./chhlg/asy/bio.txt", "asychronous file system", (err)=>{
//     console.log("file created");
// });

// fs.appendFile("./chhlg/asy/bio.txt", " are u understand this concept?", (err) => {
//     console.log("added more data");
// });

// fs.readFile("./chhlg/asy/bio.txt", "utf-8", (err,data) => {
//     console.log(data);
// });
// console.log("AFTER the read data");

// fs.rename("./chhlg/asy/bio.txt", "./chhlg/asy/mybio.txt", (err) => {
//     console.log("file is renamed");
// })

// fs.unlink("./chhlg/asy/mybio.txt", (err)=>{
//     console.log("file deleted");
// })

fs.rmdir("./chhlg", (err) => {
    console.log("folder deleted");
})

