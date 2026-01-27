import http from "node:http"

const server = http.createServer((req, res) => {
    const {method, url} = req
    res.statusCode = 200

    if (method === "GET" && url === "/products") {
        return res.writeHead(200).end(JSON.stringify({message: "O método é:", method}))
    }

    if (method === "POST" && url === "/products") {
        return res.writeHead(201).end(JSON.stringify({message: "Produto criado"}))
    }

    
})

server.listen(3333, () => {
    console.log("Server is running on port 3333")
})