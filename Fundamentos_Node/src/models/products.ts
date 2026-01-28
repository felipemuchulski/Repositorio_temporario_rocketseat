import type { CreateProductDTO } from "../dtos/create-product.dto.js";

export interface Product extends CreateProductDTO {
    id: string
}