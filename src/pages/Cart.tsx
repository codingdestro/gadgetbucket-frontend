import Loading from "../components/status/Loading";
import useCart, { CartType } from "../store/useCarts";
import { useEffect } from "react";
import Error from "../components/status/Error";
import CartProductCard from "../components/cart/CartProductCard";
import CartCheckout from "../components/cart/CartCheckout";

const Cart = () => {
  const { cart } = useCart();
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
    <section className="flex   sm:flex-row flex-col gap-5  relative items-center sm:items-start  ">
      <div
        className=" max-w-[600px] outlet ax-h-[620px] gap-y-5 flex flex-col border
      rounded-lg  shadow-md scroll-none overflow-auto"
      >
        {cart.map(({ product, id }: CartType, idx: number) => {
          return (
            <CartProductCard
              id={id}
              img={product.img}
              title={product.title}
              price={product.price}
              key={idx}
            />
          );
        })}
      </div>

      <CartCheckout />
    </section>
  );
};

export default Cart;
