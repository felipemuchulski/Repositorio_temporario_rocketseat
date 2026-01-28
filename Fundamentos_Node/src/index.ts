import http, {IncomingMessage, ServerResponse} from "node:http"
import { bodyParserMiddleware } from "./middlewares/bodyParser.middlaware.js"
import type { RequestWithBody } from "./types/request.js"
import { routes } from "./routes/rotas.js"

const server = http.createServer((req: IncomingMessage, res: ServerResponse) => {
    // header padrao da API
    res.setHeader("Content-Type", "application/json")

    // middleware
    bodyParserMiddleware(req as RequestWithBody, res, () => {

        // Fazendo com routes
        const route = routes.find((route) => {
            route.method === req.method && route.path === req.url
        })

        if(!route){
            res.writeHead(404)
            return res.end("Rota não encontrada")
        }

        return route.controller(req as RequestWithBody, res)
    })
})

server.listen(3333, () => {
    console.log("Servidor rodando em http://localhost:3333")
})