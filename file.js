const fs = require('fs')

// reading a file text

const readText= fs.readFileSync('./texts/read.txt', 'utf-8')

// Writing a text

const writtenText = fs.writeFileSync('./texts/write.txt', readText + "This is my written text by fswriteSyin")

console.log(writtenText); 