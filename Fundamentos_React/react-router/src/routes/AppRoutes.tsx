import { Route, Routes } from "react-router";
import { Home } from "../pages/Home";

export function AppRoutes(){
    return (
        <Routes>
            <Route path="/" index element={<Home/>}></Route>
        </Routes>
    )
}