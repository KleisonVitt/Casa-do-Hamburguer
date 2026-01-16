import { useState } from "react";
import Input from "../components/Input";
import { Link } from "react-router";
import Button from "../components/Button";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
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

        <Button text="Login" />
        <Button text="Não tem nenhuma conta" variant="outline" />
      </div>
    </form>
  );
};

export default Login;
