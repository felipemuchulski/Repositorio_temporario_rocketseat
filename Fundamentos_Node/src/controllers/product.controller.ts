import type { ServerResponse } from "node:http";
import type { CreateProductDTO } from "../dtos/create-product.dto.js";
import type { RequestWithBody } from "../types/request.js";
import type { Product } from "../models/products.js";
import { products } from "../database/products.db.js";
import { randomUUID } from "node:crypto";

function isCreateProductDTO(body: any): body is CreateProductDTO {
    return (
        typeof body?.name === "string" &&
        typeof body?.price === "number"
    )
}

export function createProduct(req: RequestWithBody, res: ServerResponse){
    if(!isCreateProductDTO(req.body)) {
        res.statusCode = 400;
        return res.end(JSON.stringify({message: "Body inválido"}))
    }

    const product: Product = {
        id: randomUUID(),
        name: req.body.name,
        price: req.body.price
    }

    products.push(product)
    res.statusCode = 201;
    return res.end(JSON.stringify(product))
}

export function listProducts(req: RequestWithBody, res: ServerResponse){
    res.statusCode = 200;
    return res.end(JSON.stringify(products));
}

export function deleteProduct(req: RequestWithBody, res: ServerResponse){
    const id = req.params?.id

    if(!id) {
        res.statusCode = 400;
        return res.end(JSON.stringify({message: "ID é obrigatório "}));
    }

    const index = products.findIndex((product) => product.id === id)
    if(index === -1) {
        res.statusCode = 404;
        return res.end(JSON.stringify({message: "Produto não encontrado"}))
    }

    products.splice(index, 1)
    res.statusCode = 204;
    return res.end();
}