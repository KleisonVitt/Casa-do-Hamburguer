import { useState } from "react";

const HomePage = () => {
  const [category, setCategory] = useState("Hamburguer");

  const handleChangeCategory = (newCategory: string) => {
    setCategory(newCategory);
  };

  const getClassCategory = (categoryName: string) => {
    const selectedCategoryClass =
      "bg-aux border-aux text-secondary md:text-md flex h-7 w-24 cursor-pointer items-center justify-center rounded-md border text-sm font-bold md:h-9 md:w-32";

    const notSelectedCategoryClass =
      "bg-secondary border-aux text-aux hover:bg-aux hover:text-secondary md:text-md flex h-7 w-24 cursor-pointer items-center justify-center rounded-md border text-sm font-bold md:h-9 md:w-32";

    if (category === categoryName) {
      return selectedCategoryClass;
    }

    return notSelectedCategoryClass;
  };

  return (
    <div className="mx-auto w-full px-4 md:max-w-4xl md:px-0">
      <div className="flex gap-2 py-4">
        <div
          className={getClassCategory("Hamburguer")}
          onClick={() => handleChangeCategory("Hamburguer")}
        >
          Hamburguer
        </div>
        <div
          className={getClassCategory("Bebidas")}
          onClick={() => handleChangeCategory("Bebidas")}
        >
          Bebidas
        </div>
        <div
          className={getClassCategory("Porcoes")}
          onClick={() => handleChangeCategory("Porcoes")}
        >
          Porçoes
        </div>
      </div>
    </div>
  );
};

export default HomePage;
