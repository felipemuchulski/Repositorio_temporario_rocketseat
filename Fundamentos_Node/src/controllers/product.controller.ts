import type { ServerResponse } from "node:http";
import type { CreateProductDTO } from "../dtos/create-product.dto.js";
import type { RequestWithBody } from "../types/request.js";

export function createProduct(req: RequestWithBody, res: ServerResponse){
    const body = req.body as CreateProductDTO

    res.statusCode = 201
    res.end(JSON.stringify(body))
}