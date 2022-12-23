const fs = require("fs");
const http = require("http");

const server = http.createServer()

server.on('request', (req ,res) => {
    fs.readFile('input.txt', (err, data) => {
        if (err) return console.log(err);
        res.end(data.toString())
    })
})
server.listen(3000, (err,data) => {
    console.log("listening at port 3000")
})