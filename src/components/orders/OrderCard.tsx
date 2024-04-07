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
    <section className="grid grid-cols-11 w-full border gap-x-5 justify-items-center items-center p-3 rounded-lg">
      <div className="w-8">
        <img
          src="https://cdn-icons-png.flaticon.com/512/679/679720.png"
          alt="product icon"
        />
      </div>
      <div className="line-clamp-1 hover:underline col-span-4 ">
        <Link to={"/"}>{id}</Link>
      </div>
      <div>{date}</div>
      <div className="">
        <span>₹</span>
        <span className="italic font-[600]">{price}</span>
      </div>

      <span className="line-clamp-1 col-span-3">{address}</span>

      <span
        className={`${status} text-center font-[500] p-2 rounded-lg capitalize `}
      >
        {status}
      </span>
    </section>
  );
};

export default OrderCard;
