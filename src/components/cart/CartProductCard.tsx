import useCart from "../../store/useCarts";

interface Props {
  img: string;
  title: string;
  price: number;
  id: string;
}
const CartProductCard = ({ img, title, price, id }: Props) => {
  const deleteCartItem = useCart((state) => state.deleteCartItem);
  const fetchCart = useCart((state) => state.fetchCart);
  const handleDeleteCartItem = async (id: string) => {
    await deleteCartItem(id);
    await fetchCart();
  };
  return (
    <div
      className="
                rounded-lg
                p-2 gap-x-2
                grid grid-cols-4   border items-center justify-items-stretch  "
    >
      <div className=" flex items-center justify-center max-w-[100px]  ">
        <img src={img} alt="" className=" object-contain  " />
      </div>
      <div className="col-span-3 flex flex-col items-end px-5 text-right py-2">
        <div className="">
          <span className="text-sm line-clamp-2">{title}</span>
        </div>

        <div className="font-semibold">₹{price.toLocaleString("en-In")} </div>

        <div className="">
          <button
            onClick={() => handleDeleteCartItem(id)}
            className="border px-3 py-1 rounded-md cancelled"
          >
            delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartProductCard;
