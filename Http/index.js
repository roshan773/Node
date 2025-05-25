const http = require("http")

const server = http.createServer((req, res) => {
    console.log(1)
    console.log(req)
})

server.listen(8080, () => {
    console.log("server is running")
})