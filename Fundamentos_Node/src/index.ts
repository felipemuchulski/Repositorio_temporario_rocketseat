import http, {IncomingMessage, ServerResponse} from "node:http"
import { bodyParserMiddleware } from "./middlewares/bodyParser.middlaware.js"
import type { RequestWithBody } from "./types/request.js"
import { routes } from "./routes/rotas.js"

const server = http.createServer((req: IncomingMessage, res: ServerResponse) => {
    // header padrao da API
    res.setHeader("Content-Type", "application/json")

    // middleware
    bodyParserMiddleware(req as RequestWithBody, res, () => {
        const url  = req.url ?? ""

        const matched = routes.find((route) => {
            return route.method === req.method && route.path.test(url)
        })

        if(!matched) {
            res.writeHead(404);
            return res.end(JSON.stringify({message: "Rota não encontrada"}))
        }

        const match = url.match(matched.path)
        const values = match?.slice(1) ?? []

        const params: Record<string,string> = {};
        matched.params.forEach((name, index) => {
            params[name] = values[index]
        });

        (req as RequestWithBody).params = params

        return matched.controller(req as RequestWithBody, res)
    })
})

server.listen(3333, () => {
    console.log("Servidor rodando em http://localhost:3333")
})