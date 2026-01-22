import { useState } from "react";
import Input from "../components/Input";
import { Link } from "react-router";
import Button from "../components/Button";
import { useNavigate } from "react-router";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!email || !password) {
      setError("E-mail e senha são obrigatórios");
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      switch (response.status) {
        case 200:
          setError("");
          navigate("/");
          break;

        case 400:
          setError("Usuário e senha são obrigatórios");
          break;

        case 401:
          setError("Usuário ou senha incorretos");
          break;

        case 404:
          setError("Usuário não encontrado");
          break;

        case 500:
          setError("Erro no servidor");
          break;

        default:
          setError("Erro inesperado");
          break;
      }
    } catch (err) {
      console.error(err);
      setError("Não foi possível conectar ao servidor");
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
            type="email"
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
