import { useSearchParams, Link } from "react-router"
export function Products(){
    const [searchParams] = useSearchParams()
    const category = searchParams.get("category")

    return (
        <div>
            <Link to="/">Voltar</Link>
            <h1>Produtos</h1>

            {
                category && (
                    <span>
                        Categoria <strong>{category} </strong>
                    </span>
                )
            }

            <div className="cards">
                <Link to="/details/1">Produto 1</Link>
                <Link to="/details/2">Produto 2</Link>
                <Link to="/details/3">Produto 3</Link>
                <Link to="/details/4">Produto 4</Link>
                <Link to="/details/5">Produto 5</Link>
            </div>
        </div>
    )
}