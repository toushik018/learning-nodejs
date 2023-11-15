const http = require('http');
const fs = require('fs');
const { buffer } = require('stream/consumers');
// creating a server using raw node js

const server = http.createServer()

// Server listener

server.on('request', (req, res) => {
    if (req.url === '/read-file' && req.method === 'GET') {



        //streaming reading file
        const readableStream = fs.createReadStream(process.cwd, '/texts/read.txt')
        readableStream.on('data', (buffer) => {
            res.write(buffer)
        })

        readableStream.on('end', () => {
            res.end('Hello from world')

        })
    }


})

server.listen(5000, () => {
    console.log(`Server is listening on port 5000`);
})