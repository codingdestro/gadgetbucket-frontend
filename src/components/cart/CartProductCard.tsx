import useCart from "../../store/useCarts";

interface Props {
  img: string;
  title: string;
  price: number;
  id: string;
}
const CartProductCard = ({ img, title, price, id }: Props) => {
  const deleteCartItem = useCart((state) => state.deleteCartItem);
  return (
    <div
      className="
                rounded-lg
                grid grid-cols-6  border items-center justify-items-center p-5 "
    >
      <div className=" flex items-center justify-center w-[2cm]">
        <img src={img} alt="" className=" object-contain  " />
      </div>
      <div className=" col-span-3">
        <span className="text-sm line-clamp-2">{title}</span>
      </div>
      <div className="font-semibold">₹{price.toLocaleString("en-In")} </div>
      <div className="">
        <button
          onClick={() => deleteCartItem(id)}
          className="border px-3 py-1 rounded-md cancelled"
        >
          delete
        </button>
      </div>
    </div>
  );
};

export default CartProductCard;
