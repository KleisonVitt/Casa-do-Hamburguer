const HomePage = () => {
  return (
    <div className="mx-auto w-full px-4 md:max-w-4xl md:px-0">
      <div className="flex gap-2 py-4">
        <div className="bg-aux border-aux text-secondary md:text-md flex h-7 w-24 cursor-pointer items-center justify-center rounded-md border text-sm font-bold md:h-9 md:w-32">
          Hamburguer
        </div>
        <div className="bg-secondary border-aux text-aux hover:bg-aux hover:text-secondary md:text-md flex h-7 w-24 cursor-pointer items-center justify-center rounded-md border text-sm font-bold md:h-9 md:w-32">
          Bebidas
        </div>
        <div className="bg-secondary border-aux text-aux hover:bg-aux hover:text-secondary md:text-md flex h-7 w-24 cursor-pointer items-center justify-center rounded-md border text-sm font-bold md:h-9 md:w-32">
          Porçoes
        </div>
      </div>
    </div>
  );
};

export default HomePage;
