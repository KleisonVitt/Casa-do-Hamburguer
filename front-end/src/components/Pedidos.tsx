import { CalendarDays, Clock, User } from "lucide-react";
import { useState } from "react";

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
        <div className="bg-aux text-placeholder rounded-md p-2 font-semibold">
          <div className="flex flex-col justify-between text-sm md:flex-row md:text-lg">
            <p>#1</p>
            <select name="" id="">
              <option value="" defaultChecked disabled>
                Pendente
              </option>
              <option value="">Retirado</option>
              <option value="">Cancelado</option>
            </select>
          </div>

          {/* Info do usuario */}
          <div className="mt-2 space-y-2">
            <div className="flex items-center gap-2">
              <User size={18} />
              <p className="text-xs">Odair Michael</p>
            </div>
            <div className="flex items-center gap-2">
              <CalendarDays size={18} />
              <p className="text-xs">28/01/2026</p>
            </div>

            <div className="flex flex-col gap-2 md:flex-row md:gap-10">
              <div className="flex items-center gap-2">
                <Clock size={18} />
                <p className="text-xs">21:07</p>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={18} />
                <p className="text-xs">21:07</p>
              </div>
            </div>

            <div className="bg-placeholder mt-1 h-0.5 w-full"></div>

            <p className="text-right text-lg font-bold">R$ 124,78</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pedidos;
