import { ShoppingBag } from "lucide-react";

const Product = () => {
  return (
    <div className="">
      <div className="flex gap-2 text-white">
        <img className="max-w-25 md:max-w-50" src="./1DuploDaCasa.png" alt="" />
        <div className="flex flex-col">
          <p className="text-xs font-bold uppercase md:text-lg">
            Duplo da casa
          </p>
          <p className="text-gray-text flex-1 text-xs md:text-lg">
            Dois suculentos hambúrgueres de 120g, queijo cheddar derretido,
            maionese da casa e picles no pão brioche tostado.
          </p>
          <div className="flex items-center justify-end gap-2">
            <span className="text-aux text-sm font-bold">R$28,90</span>
            <ShoppingBag className="cursor-pointer" size={18} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
