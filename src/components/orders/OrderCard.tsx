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
    <section className="grid grid-cols-2 grid-rows-3 flex-col w-full border gap-y-3 justify-between items-stretch p-5 rounded-lg">
      <div className="text-[12px] place-self-end col-span-2">{date}</div>
      <div className="line-clamp-1 hover:underline  ">
        <Link to={`./${id}`}>{id}</Link>
      </div>
      <div className="text-sm place-self-end">
        <span>₹</span>
        <span className="italic font-[600]">{price}</span>
      </div>

      <span className="line-clamp-1">{address}</span>
      <span
        className={`${status} place-self-end text-center font-[500] px-5 py-1 rounded-lg capitalize `}
      >
        {status}
      </span>
    </section>
  );
};

export default OrderCard;
