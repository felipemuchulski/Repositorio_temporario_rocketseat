import type { Route } from "./types.js";
import { createProduct } from "../controllers/product.controller.js";

export const routes: Route[] = [
    {
        method: "GET",
        path: "/products",
        controller: createProduct
    },
    {
        method: "POST",
        path: "/products",
        controller: createProduct,
    },
]