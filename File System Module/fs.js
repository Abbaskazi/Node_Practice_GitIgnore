// In this we used file System for File 

const fs = require('fs')

// Reading the file

const fileContent = fs.readFileSync('f1.txt').toString();

console.log(fileContent)

// Write the file 

fs.writeFileSync('f1.txt', "This is Written by Fs.js")

// append a file

fs.appendFileSync("f1.txt"," This is Add by using Append Method");

console.log("Append is done");

// Delete a file

fs.unlinkSync('f1.txt');