import { User, CalendarDays, Clock } from "lucide-react";

type OrderCardType = {
  id: number;
  name: string;
  date: string;
  orderTime: string;
  deliveredAt?: string;
  totalPrice: number;
};

const OrderCard = ({
  id,
  name,
  date,
  orderTime,
  deliveredAt,
  totalPrice,
}: OrderCardType) => {
  return (
    <div className="bg-aux text-placeholder rounded-md p-2">
      <div className="flex flex-col justify-between text-sm font-semibold md:flex-row md:text-lg">
        <p># {id}</p>
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
          <p className="text-xs md:text-[15px]">{name}</p>
        </div>
        <div className="flex items-center gap-2">
          <CalendarDays size={18} />
          <p className="text-xs md:text-[15px]">{date}</p>
        </div>

        <div className="flex flex-col gap-2 md:flex-row md:gap-10">
          <div className="flex items-center gap-2">
            <Clock size={18} />
            <p className="text-xs md:text-[15px]">{orderTime}</p>
          </div>
          <div className="flex items-center gap-2">
            <Clock size={18} />
            <p className="text-xs md:text-[15px]">
              {deliveredAt ? deliveredAt : "-"}
            </p>
          </div>
        </div>

        <div className="bg-placeholder mt-1 h-0.5 w-full"></div>

        <p className="text-right text-lg font-bold">R$ {totalPrice}</p>
      </div>
    </div>
  );
};

export default OrderCard;
