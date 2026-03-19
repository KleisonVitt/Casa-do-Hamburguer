import { ChevronLeft } from "lucide-react";
import { ChevronRight } from "lucide-react";
import { Trash } from "lucide-react";

const CartItem = () => {
  return (
    <>
      <div className="flex items-center gap-3">
        <img
          src="./1DuploDaCasa.png"
          alt="hamburguer"
          className="w-24 rounded-md"
        />

        <div className="flex-1">
          <p className="font-bold uppercase">Duplo da Casa</p>
          <p className="text-placeholder font-bold">R$ 28,90</p>
          <div className="mt-1 flex gap-3">
            <ChevronLeft
              className="bg-red cursor-pointer rounded-md p-1 text-white"
              size={25}
            />
            <p className="font-bold">1</p>
            <ChevronRight
              className="bg-red cursor-pointer rounded-md p-1 text-white"
              size={25}
            />
          </div>
        </div>

        <Trash className="cursor-pointer" size={18} />
      </div>
    </>
  );
};

export default CartItem;
