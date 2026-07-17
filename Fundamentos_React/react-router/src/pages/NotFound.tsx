import { Link } from "react-router"
export function NotFound(){
    return (
        <div>
            <h1>Ops! Essa página não existe</h1>
            <Link to="/">Voltar</Link>
        </div>
    )
}