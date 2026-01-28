import { IncomingMessage } from "node:http";

export type RequestWithBody = IncomingMessage & {
    body?: unknown
}

