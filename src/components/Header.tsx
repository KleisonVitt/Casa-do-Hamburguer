const Header = () => {
  return (
    <header className="w-full pt-4 px-4 md:pt-4 md:px-0 md:max-w-4xl mx-auto">
      <div className="flex justify-between items-center">
        <img src="casa-hamburguer-logo.png" alt="logo casa hamburguer" />

        <button className="bg-primary py-2 px-9 rounded font-medium cursor-pointer">
          Entrar
        </button>
      </div>
    </header>
  );
};

export default Header;
