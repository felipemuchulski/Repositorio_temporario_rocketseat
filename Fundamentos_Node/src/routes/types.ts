import { IncomingMessage, ServerResponse } from "node:http";

export type HTTPMethod = "GET" | "POST" | "PUT" | "DELETE" | "PATH";

export type Controller = (
    req: IncomingMessage,
    res: ServerResponse
) => void;


export interface Route {
    method: HTTPMethod;
    path: string;
    controller: Controller;
}