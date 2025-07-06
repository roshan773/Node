const fs = require("fs")
const http = require("http")

const server = http.createServer((req, res) => {

    if (req.url === "/" && req.method === "GET") {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("This is Home page")
    }

    else if(req.url==="/about" && req.method==="GET"){
        res.writeHead(200, {"content-type": "text/plain"})
        res.end("This is About page")
    }

    else if(req.url==="/getproductdata" && req.method==="GET"){
        fs.readFile("db.json", "utf-8", (err, data) => {
            if(err){
                req.writeHead(500, {"Content-type": "text/plain"})
                console.log("Internal Server Error")
                return;
            }

            const Jsondata = JSON.parse(data)
            res.writeHead(200, {"content-type": "text/plain"})
            res.end(JSON.stringify(Jsondata.products))
        })
    }

    else if(req.url==="/user" && req.method === "GET"){
        fs.readFile("db.json", "utf-8", (err, data) => {
            if(err){
                req.writeHead(500, {"Content-type":"text/plain"})
                console.log("Internal server Error")
                return;
            }

            const Jsondata = JSON.parse(data)
            res.writeHead(200, {"content-type": "text/plain"})
            res.end(JSON.stringify(Jsondata.user))
        })
    }

})

server.listen(8080, () => {
    console.log("Server is running")
})