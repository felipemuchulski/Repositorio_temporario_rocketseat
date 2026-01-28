import type { ServerResponse } from "node:http";
import type { CreateProductDTO } from "../dtos/create-product.dto.js";
import type { RequestWithBody } from "../types/request.js";

function isCreateProductDTO(body: any): body is CreateProductDTO {
    return (
        typeof body?.name === "string" &&
        typeof body?.price === "number"
    )
}

export function createProduct(req: RequestWithBody, res: ServerResponse){
    if(isCreateProductDTO(req.body)) {
        res.statusCode = 400;
        return res.end(JSON.stringify({message: "Body inválido"}))
    }

    const body = req.body;
    res.statusCode = 201;
    return res.end(JSON.stringify(body))
}