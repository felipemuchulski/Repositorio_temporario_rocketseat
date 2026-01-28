import { ServerResponse } from "node:http";
import { parseBody } from "../helpers/parseBody.js";
import type { RequestWithBody } from "../types/request.js";

export type NextFunction = () => void

export async function bodyParserMiddleware(req: RequestWithBody, res: ServerResponse, next: NextFunction){
    if (req.method === "POST" || req.method === "PUT" || req.method === "PATCH") {
        try {
            req.body = await parseBody(req)
        } catch {
            res.statusCode = 400
            return res.end(JSON.stringify({message: "Invalid JSON" }))
        }
    }

    next()
}