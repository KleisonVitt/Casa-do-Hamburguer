import { useState } from "react";
import Input from "../components/Input";
import { Link } from "react-router";
import Button from "../components/Button";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.status === 404) {
        setError("Usuário não encontrado");
      }

      if (response.status === 400) {
        setError("Usuário e senha são obrigatórios");
      }

      if (response.status === 200) {
        setError("");

        const data = await response.json();
        console.log(data);
      }
    } catch (error) {
      console.log(error);
      return;
    }
  }

  return (
    <form
      className="bg-secondary flex h-screen items-center justify-center"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col justify-center gap-2">
        <Link to="/">
          <img
            className="mx-auto mb-4 w-32"
            src="./casa-hamburguer-logo.png"
            alt="logo"
          />
        </Link>

        <div className="mb-3 flex flex-col gap-2">
          <Input
            placeholder="E-mail"
            type="text"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            placeholder="Senha"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <p className="text-red text-sm font-bold">{error}</p>
        </div>

        <Button text="Login" type="submit" />
        <Link to="/register">
          <Button text="Não tem nenhuma conta" variant="outline" />
        </Link>
      </div>
    </form>
  );
};

export default Login;
