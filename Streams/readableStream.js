const fs = require("fs");
const http = require("http");

const server = http.createServer((req, res) => {    
  const rstream = fs.createReadStream("input.txt");
  rstream.on('data', (chunkdata) => {
    res.write(chunkdata)
  })
  rstream.on('end', () => {
    res.end()
  })
})

server.listen(8000, () => {
    console.log("listening at port 8000")
})