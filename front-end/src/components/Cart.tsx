import { X } from "lucide-react";
import Button from "./Button";
import CartItem from "./CartItem";

type CartTyperops = {
  setShowCart: React.Dispatch<React.SetStateAction<boolean>>;
};

const Cart = ({ setShowCart }: CartTyperops) => {
  return (
    <div className="bg-primary absolute top-0 right-0 flex h-screen w-[30%] flex-col p-5 xl:w-[25%]">
      <div className="flex justify-between">
        <X
          className="cursor-pointer"
          onClick={() => setShowCart((prev) => !prev)}
        />
        <p className="font-bold uppercase">Meu Carrinho</p>
      </div>

      <div className="mt-10 flex flex-1 flex-col gap-4">
        <CartItem />
        <CartItem />
      </div>

      <Button text="Finalizar pedido" />
    </div>
  );
};

export default Cart;
