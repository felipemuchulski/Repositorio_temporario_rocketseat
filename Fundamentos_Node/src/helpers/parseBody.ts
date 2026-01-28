import { IncomingMessage } from "node:http";


export async function parseBody<T>(req: IncomingMessage): Promise<T> {
    const buffers: Buffer[] = []

    for await (const chunck of req){
        buffers.push(chunck)
    }

    return JSON.parse(Buffer.concat(buffers).toString())
}