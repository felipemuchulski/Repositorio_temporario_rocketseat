import { IncomingMessage } from "node:http";

export type RequestWithBody = IncomingMessage & {
    body?: unknown;
    params?: Record<string, string>;
    query?: Record<string, string>;
}

