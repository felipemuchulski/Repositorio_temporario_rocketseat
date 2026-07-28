import { Navigate, useLocation } from "react-router";
import okSvg from "../assets/ok.svg";

export function Confirm() {
  const location = useLocation();

  if (!location.state?.fromSubmit) {
    return <Navigate to="/" />;
  }

  return (
    <div>
      <h1>Solicitação enviada</h1>

      <img src={okSvg} alt="Ok" className="w-28" />

      <p>
        Agora é apenas aguardar! Sua solicitação será analisada e, em brevre, o
        setor financeiro entrará em contato com você.
      </p>
    </div>
  );
}
