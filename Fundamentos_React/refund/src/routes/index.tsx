import { BrowserRouter } from "react-router";

import { ManagerRoutes } from "./ManagerRoutes";

export function AppRoutes() {
    return (
        <BrowserRouter>
            <ManagerRoutes />
        </BrowserRouter>
    )
}