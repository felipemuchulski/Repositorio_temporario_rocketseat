import { useState } from "react";
import { Link } from "react-router";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
export function SignUp() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("")
  const [isLoading, setIsLoading] = useState(false);

  function onSubmit(event: React.FormEvent) {
    event.preventDefault();
    console.log(name, email, password, passwordConfirm);
  }

  return (
    <form onSubmit={onSubmit} className="w-full flex flex-col gap-4">
      <Input
        required
        legend="Name"
        placeholder="Seu Nome"
        onChange={(event) => setName(event.target.value)}
      />

      <Input
        required
        legend="E-mail"
        type="email"
        placeholder="seu@email.com"
        onChange={(event) => setEmail(event.target.value)}
      />

      <Input
        required
        legend="Senha"
        type="password"
        placeholder="123456"
        onChange={(event) => setPassword(event.target.value)}
      />

      <Input
        required
        legend="Confirmação da Senha"
        type="password"
        placeholder="123456"
        onChange={(event) => setPasswordConfirm(event.target.value)}
      />

      <Button type="submit" isLoading={isLoading}>
        Cadastrar
      </Button>
      <Link
        to="/"
        className="text-sm font-semibold text-gray-100 mt-10 mb-4 text-center
         hover:text-green-800 transition ease-linear "
      >
        Já tenho uma conta
      </Link>
    </form>
  );
}
