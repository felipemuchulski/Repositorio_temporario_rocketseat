import { BrowserRouter } from "react-router";

import { AuthRoutes } from "./AuthRoutes";

export function AppRoutes() {
    return (
        <BrowserRouter>
            <AuthRoutes />
        </BrowserRouter>
    )
}