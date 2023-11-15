const http = require('http')

const server = http.createServer()

server.on('request', (req, res) => {
console.log(req)
res.end('Server is running')
})

server.listen(5000, () => {
    console.log(`Server is running on 5000`);
})