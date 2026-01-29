import { ShoppingBag } from "lucide-react";
import type { ProductType } from "../types/Product";
import { brlFormatter } from "../utils/brlFormatter";

const Product = ({ id, name, description, price, img }: ProductType) => {
  return (
    <div className="flex gap-2 text-white">
      <img className="max-w-25 md:max-w-50" src={`./${img}`} alt="" />
      <div className="flex w-full flex-col">
        <p className="text-xs font-bold uppercase md:text-lg">{name}</p>
        <p className="text-gray-text flex-1 text-xs md:text-lg">
          {description}
        </p>
        <div className="flex items-center justify-end gap-2">
          <span className="text-aux text-sm font-bold">
            {brlFormatter(price)}
          </span>
          <ShoppingBag className="cursor-pointer" size={18} />
        </div>
      </div>
    </div>
  );
};

export default Product;
