import { useState } from "react";
import OrderCard from "./OrderCard";

const Pedidos = () => {
  const [category, setCategory] = useState("Pedente");

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
      {/* categorias */}
      <div className="flex gap-2 py-4">
        <div
          className={getClassCategory("Pedente")}
          onClick={() => handleChangeCategory("Pedente")}
        >
          Pedente
        </div>
        <div
          className={getClassCategory("Retirado")}
          onClick={() => handleChangeCategory("Retirado")}
        >
          Retirado
        </div>
        <div
          className={getClassCategory("Cancelado")}
          onClick={() => handleChangeCategory("Cancelado")}
        >
          Cancelado
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3">
        <OrderCard
          id={1}
          name="Test"
          date="28/01/2026"
          orderTime="21:04"
          deliveredAt="21:35"
          totalPrice={124.75}
        />
      </div>
    </div>
  );
};

export default Pedidos;
