const http = require ("http")
const fs = require("fs")


const server = http.createServer((req, res) => {
    console.log("Request received", req.url, req.method)
    res.end("Hello from node.js")

    fs.readFile("/db.json", "utf-8", (err, data) => {
        if(err){
            res.end("Internal server error")
        }
        else{
            res.emd(data)
        }
    })
})


server.listen(8080, () => {
    console.log("Server is running on port 8080")
    console.log("Base URL => http://localhost:8080")
})