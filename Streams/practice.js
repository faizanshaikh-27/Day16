const fs = require("fs");
const http = require("http");

const server = http.createServer((req, res) => {
    if (req.url == "/") {
        fs.readFile("/home/faizanshaikh/Desktop/Day16/Streams/jsonFile.json", (err, data) => {
            console.log(data);
            res.writeHead(200, {"content-Type": "Application/JSON"})
            res.end(data)
        })
    }

    else if (req.url == "/about") {
        fs.readFile("/home/faizanshaikh/Desktop/Day16/Streams/aboutJSONdata.json", (err,data) => {
            console.log(data)
            res.writeHead(200, {"content-Type": "Application/JSON"})
            res.end(data)
        })
    }
    else if (req.url == "/contactus") {
        fs.readFile("/home/faizanshaikh/Desktop/Day16/Streams/contactus.json", (err, data) => {
            console.log(data.toString())
            res.writeHead(200, {"content-Type": "Application/JSON"})
            res.end(data)
        })
    }
    else {
        res.writeHead(404, {"content-Type": "text/HTML"})
        res.end("<h1>ERROR 404</h1>")
    }
})

server.listen(4000, () => {
    console.log("Listening at port 4000")
})