import http from "node:http"
import { stringify } from "node:querystring";

const server = http.createServer((req, res) => {

    const { method, url } = req
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");


    if (method === "GET" && url === "/products"){
        return res.end(JSON.stringify({message: "Lista de produtos"}))
    }

    if (method === "POST" && url === "/products"){
        return res.writeHead(201).end(JSON.stringify({message: "Criado produto"}))
    }
    return res.end(JSON.stringify({message: "Servidor rodando com TS", method}))

    
})

server.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000");
});