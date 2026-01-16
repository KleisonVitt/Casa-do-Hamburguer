import Input from "./components/Input";

const App = () => {
  return (
    <p className="flex gap-2 bg-black p-6">
      <Input name="email" placeholder="E-mail" type="text" />
      <Input name="senha" placeholder="Senha" type="password" />
    </p>
  );
};

export default App;
