import http, {IncomingMessage, ServerResponse} from "node:http"
import { bodyParserMiddleware } from "./middlewares/bodyParser.middlaware.js"
import type { RequestWithBody } from "./types/request.js"
import { createProduct } from "./controllers/product.controller.js"

const server = http.createServer((req: IncomingMessage, res: ServerResponse) => {
    // header padrao da API
    res.setHeader("Content-Type", "application/json")

    // middleware
    bodyParserMiddleware(req as RequestWithBody, res, () => {
        // controller
        if (req.method === "POST" && req.url === "/products"){
            return createProduct(req as RequestWithBody, res)
        }

        //fallback
        res.statusCode = 404
        return res.end(JSON.stringify({message: "Not found"}))
    })
})

server.listen(3333, () => {
    console.log("Servidor rodando em http://localhost:3333")
})