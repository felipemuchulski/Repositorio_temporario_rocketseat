import { useState } from "react";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import searchSvg from "../assets/search.svg";

export function Dashboard() {
  const [name, setName] = useState("");

  function fecthRefunds(event: React.FormEvent) {
    event.preventDefault();
  }

  return (
    <div className="bg-gray-500 rounded-xl p-10 md:min-w-[768px]">
      <h1 className="text-gray-100 font-bold text-xl flex-1">Solicitações</h1>

      <form
        onSubmit={fecthRefunds}
        className="flex flex-1 items-center justify-between pb-6 border-b-[1px] 
            border-gray-400 md:flex-row gap-2 mt-6"
      >
        <Input
          placeholder="Pesquisar pelo nome"
          onChange={(event) => setName(event.target.value)}
        />

        <Button variant="icon">
            <img src={searchSvg} alt="Ícone de pesquisa" />
        </Button>
      </form>
    </div>
  );
}
