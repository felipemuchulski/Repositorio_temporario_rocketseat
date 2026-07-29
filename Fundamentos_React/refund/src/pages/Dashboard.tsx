import { useState } from "react";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { RefundItem } from "../components/RefundItem";
import type { RefundItemProps } from "../components/RefundItem";
import { Pagination } from "../components/Pagination";

import { formatCurrency } from "../utils/formatCurrency";
import searchSvg from "../assets/search.svg";
import { CATEGORIES } from "../utils/categories";

const REFUND_EXAMPLE = {
  id: "123",
  name: "Felipe",
  category: "Transporte",
  amount: formatCurrency(34.5),
  categoryImg: CATEGORIES["transport"].icon,
};

export function Dashboard() {
  const [name, setName] = useState("");
  const [page, setPage] = useState(1);
  const [totalOfPage, setTotalOfPages] = useState(10);
  const [refunds, setRefunds] = useState<RefundItemProps[]>([REFUND_EXAMPLE])

  function fecthRefunds(event: React.FormEvent) {
    event.preventDefault();
  }

  function handlePagination(action: "next" | "previous") {
    setPage((prevPage) => {
      if (action === "next" && prevPage < totalOfPage) {
        return prevPage + 1;
      }

      if (action === "previous" && prevPage > 1) {
        return prevPage - 1;
      }

      return prevPage;
    });
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

      <div className="my-6 flex flex-col gap-4 max-h-85.5 overflow-y-scroll">
        {
            refunds.map((item) => (
                <RefundItem
                  key={item.id}
                  to={`/refund/${item.id}`}
                  {...item}
                />
            ))
        }
      </div>

      <Pagination
        current={page}
        total={totalOfPage}
        onNext={() => handlePagination("next")}
        onPrevious={() => handlePagination("previous")}
      />
    </div>
  );
}
