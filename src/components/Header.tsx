const Header = () => {
  return (
    <header className="mx-auto w-full px-4 pt-4 md:max-w-4xl md:px-0 md:pt-4">
      <div className="flex items-center justify-between">
        <img src="casa-hamburguer-logo.png" alt="logo casa hamburguer" />

        <button className="bg-primary cursor-pointer rounded px-9 py-2 font-medium">
          Entrar
        </button>
      </div>
    </header>
  );
};

export default Header;
