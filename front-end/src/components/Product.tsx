import { ShoppingBag } from "lucide-react";
import type { ProductType } from "../types/Product";
import { brlFormatter } from "../utils/brlFormatter";
import { UserContext } from "../context/UserContext";
import { useContext } from "react";

const Product = ({
  id,
  name,
  description,
  category,
  price,
  img,
  setProducts,
}: ProductType) => {
  const { user } = useContext(UserContext);

  const handleDeleteProduct = async (id: string) => {
    try {
      if (!id) {
        console.log("ID do produto não enviado.");
        return;
      }

      const response = await fetch(`http://localhost:3000/product/${id}`, {
        method: "DELETE",
        credentials: "include",
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.log(errorData.message);
        return;
      }

      getProduct();
    } catch (error) {
      console.error(error);
      return;
    }
  };

  const getProduct = async () => {
    try {
      const response = await fetch("http://localhost:3000/product");

      const data = await response.json();
      setProducts(data);
    } catch (error) {
      return console.log(error);
    }
  };

  return (
    <div className="flex gap-2 text-white">
      <img className="max-w-25 md:max-w-50" src={`./${img}`} alt="" />
      <div className="flex w-full flex-col">
        <div className="flex items-center justify-between">
          <p className="text-xs font-bold uppercase md:text-lg">{name}</p>
          {user?.admin && (
            <div
              className="flex cursor-pointer items-center rounded-md border px-1 text-xs text-red-500 uppercase"
              onClick={() => handleDeleteProduct(id)}
            >
              Deletar
            </div>
          )}
        </div>
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
