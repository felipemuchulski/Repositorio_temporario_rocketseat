import { ServerResponse } from "node:http";
import type { RequestWithBody } from "../types/request.js";

export type HTTPMethod = "GET" | "POST" | "PUT" | "DELETE" | "PATCH";

export type Controller = (
    req: RequestWithBody,
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