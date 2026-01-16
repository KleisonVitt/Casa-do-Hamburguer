import { useState } from "react";
import Input from "../components/Input";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [cep, setCep] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  return (
    <form
      className="bg-secondary flex h-screen items-center justify-center"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col justify-center gap-2">
        <img
          className="mx-auto mb-4 w-32"
          src="./casa-hamburguer-logo.png"
          alt="logo"
        />

        <Input
          placeholder="Nome"
          type="text"
          onChange={(e) => setName(e.target.value)}
        />
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
        <Input
          placeholder="Confirme sua senha"
          type="password"
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <Input
          placeholder="CEP"
          type="text"
          onChange={(e) => setCep(e.target.value)}
        />

        <button className="bg-red mt-3 w-full cursor-pointer rounded-md py-2 text-sm font-bold text-white">
          Login
        </button>
      </div>
    </form>
  );
};

export default Register;
