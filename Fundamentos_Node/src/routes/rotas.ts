import type { Route, CompiledRoute } from "./types.js";
import { createProduct } from "../controllers/product.controller.js";
import { listProducts } from "../controllers/product.controller.js";
import { parseRoutePath } from "../utils/parseRoutePath.js";


export const rawRoutes: Route[] = [
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

export const routes: CompiledRoute[] = rawRoutes.map((route) => {
    const {regex, params} = parseRoutePath(route.path);

    return {
        method: route.method,
        path: regex,
        params,
        controller: route.controller
    }
})