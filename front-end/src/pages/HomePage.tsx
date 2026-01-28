import { useState } from "react";
import Product from "../components/Product";

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
    <div className="mx-auto w-full px-4 md:max-w-4xl">
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
          className={getClassCategory("Porções")}
          onClick={() => handleChangeCategory("Porções")}
        >
          Porçoes
        </div>
      </div>

      <p className="text-aux mb-3 text-xl font-bold uppercase">{category}</p>
      <div className="space-y-3 md:space-y-5">
        <Product />
        <Product />
        <Product />
      </div>
    </div>
  );
};

export default HomePage;
