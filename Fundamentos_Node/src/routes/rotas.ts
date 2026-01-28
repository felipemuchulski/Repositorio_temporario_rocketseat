import type { Route } from "./types.js";
import { IncomingMessage, ServerResponse } from "http"

export const routes: Route[] = [
    {
        method: "GET",
        path: "/products",
        controller: (req: IncomingMessage, res: ServerResponse) => {
            res.writeHead(200,{"Content-Type": "application/json"});
            res.end(JSON.stringify({message: "Rota produtos GET"}))
        }
    },
    {
        method: "POST",
        path: "/products",
        controller: (req: IncomingMessage, res: ServerResponse) => {
            res.writeHead(201, {"Content-Type": "application/json"});
            res.end(JSON.stringify({message: "Rota produtos POST"}))
        },
    },
]