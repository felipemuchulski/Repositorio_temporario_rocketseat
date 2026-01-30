import http, {IncomingMessage, ServerResponse} from "node:http"
import { bodyParserMiddleware } from "./middlewares/bodyParser.middlaware.js"
import type { RequestWithBody } from "./types/request.js"
import { routes } from "./routes/rotas.js"
import { extractQueryParams } from "./utils/extractQueryParams.js"

const server = http.createServer((req: IncomingMessage, res: ServerResponse) => {
  // header padrao da API
  res.setHeader("Content-Type", "application/json");

  // middleware
  bodyParserMiddleware(req as RequestWithBody, res, () => {
    const url = req.url ?? "/";

    // separa caminho e query string
    const [pathname, queryString = ""] = url.split("?");

    // encontra rota usando SOMENTE o pathname
    const matched = routes.find((route) => {
      return route.method === req.method && route.path.test(pathname);
    });

    if (!matched) {
      res.writeHead(404);
      return res.end(JSON.stringify({ message: "Rota não encontrada" }));
    }

    // extrai params usando SOMENTE o pathname
    const match = pathname.match(matched.path);
    const values = match?.slice(1) ?? [];

    const params: Record<string, string> = {};
    matched.params.forEach((name, index) => {
      params[name] = values[index];
    });

    const reqWithBody = req as RequestWithBody;
    reqWithBody.params = params;

    // extrai query params
    reqWithBody.query = extractQueryParams(queryString);

    return matched.controller(reqWithBody, res);
  });
});

server.listen(3333, () => {
  console.log("Servidor rodando em http://localhost:3333");
});