import Loading from "../components/status/Loading";
import useCart from "../store/useCarts";
import { useEffect } from "react";
import Error from "../components/status/Error";

const Cart = () => {
  const { cart } = useCart();
  const deleteCartItem = useCart((state) => state.deleteCartItem);
  const isLoading = useCart((state) => state.isLoading);
  const error = useCart((state) => state.error);
  const fetchCart = useCart((state) => state.fetchCart);

  useEffect(() => {
    fetchCart();
  }, []);

  return isLoading ? (
    <Loading />
  ) : error ? (
    <>
      <Error msg={error} />
    </>
  ) : cart.length === 0 ? (
    <Error msg="cart is empty" />
  ) : (
    <section className="p-5">
      <div className="flex flex-wrap gap-2 ">
        {cart.map(({ product, id }: any, idx: number) => {
          return (
            <div
              key={idx}
              className="
                rounded-lg
                relative max-w-[300px]  w-full
                flex flex-col border items-center justify-start p-8 gap-4"
            >
              <div className="absolute w-4 h-4  right-0 top-0 mt-2 mr-2">
                <button onClick={() => deleteCartItem(id)} className="">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/1828/1828665.png"
                    alt=""
                  />
                </button>
              </div>
              <div className=" flex items-center justify-center w-full h-full">
                <img src={product.img} alt="" height={100} width={100} />
              </div>
              <div className="">
                <span className="text-sm line-clamp-2">{product.title}</span>
              </div>
              <div className="self-end">
                <span className=" font-semibold italic">
                  {product.textPrice}{" "}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Cart;
