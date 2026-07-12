import { Button } from "./components/button"

export function App(){
  return (
    <>
      <h1>Hello World!</h1>
      <Button name="Criar" onClick={() => alert("Criar")} />
      <Button name="Editar" />
      <Button name="Remover" />
    </>
  )
}