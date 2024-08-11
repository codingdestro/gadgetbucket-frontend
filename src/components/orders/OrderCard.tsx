import { Link } from "react-router-dom";

interface Props {
  price: string;
  status: "pending" | "ordered" | "delivered" | "cancelled";
  address: string;
  date: string;
  id: string;
}
const OrderCard = ({ id, date, price, address, status }: Props) => {
  return (
    <Link
      to={`./${id}`}
      className=" hover:bg-slate-100 text-sm transition-all max-w-[600px] w-full flex justify-between items-center p-5 border border-slate-100  rounded-lg"
    >
      <div className="flex-1 flex flex-col items-start gap-5">
        <div className="text-sm">{date}</div>
        <span className="">{address}</span>
      </div>

      <div className="flex-1 flex flex-col items-end  gap-5">
        <div className="">
          <span>₹</span>
          <span className="italic font-[600]">{price}</span>
        </div>

        <span
          className={`${status} text-center font-[500] px-5 py-1 rounded-lg capitalize `}
        >
          {status}
        </span>
      </div>
    </Link>
  );
};

export default OrderCard;
