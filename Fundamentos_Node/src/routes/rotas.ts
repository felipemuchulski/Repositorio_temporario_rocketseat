import type { Route } from "./types.js";
import { createProduct } from "../controllers/product.controller.js";
import { listProducts } from "../controllers/product.controller.js";

export const routes: Route[] = [
    {
        method: "GET",
        path: "/products",
        controller: listProducts
    },
    {
        method: "POST",
        path: "/products",
        controller: createProduct,
    },
]