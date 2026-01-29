import { IncomingMessage, ServerResponse } from "node:http";

export type HTTPMethod = "GET" | "POST" | "PUT" | "DELETE" | "PATCH";

export type Controller = (
    req: IncomingMessage,
    res: ServerResponse
) => void;


export interface Route {
    method: HTTPMethod;
    path: string;
    controller: Controller;
}

export interface CompiledRoute {
    method: HTTPMethod,
    path: RegExp,
    params: string[],
    controller: Controller;
}