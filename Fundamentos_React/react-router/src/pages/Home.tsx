import { useNavigate, Link } from "react-router"
export function Home(){
    const navigate = useNavigate()
    return (
        <div>
            <h1>Página Home</h1>

            <nav>
                <Link to="/products">Produtos</Link>
                <Link to="/products?category=tvs">Categorias</Link>

                <button type="button" onClick={() => navigate("/products")}>Ver Produtos</button>
            </nav>
        </div>
    )
}