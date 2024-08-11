import { useEffect } from "react";
import { useParams } from "react-router";
import useFetchOrderItems from "../hooks/userFetchOrderItems";
import type { CartType } from "../store/useCarts";
import Loading from "../components/status/Loading";

const OrderItems = () => {
  const { orderId } = useParams();
  const { isLoading, items, fetch } = useFetchOrderItems();

  useEffect(() => {
    (async () => {
      if (!orderId) return;
      await fetch(orderId);
    })();
  }, []);
  return (
    <main className="flex flex-col items-center w-full mb-5">
      <h1 className="text-lg capitalize font-semibold my-4">
        Products from your order cart
      </h1>
      <section className="flex flex-col gap-2">
        {isLoading ? (
          <Loading />
        ) : (
          items.map((value: CartType) => {
            return <OrderItem item={value} key={value.id} />;
          })
        )}
      </section>
    </main>
  );
};

export default OrderItems;

const OrderItem = ({ item }: { item: CartType }) => {
  return (
    <section className="border w-[380px] md:w-[600px] lg:w-[800px] px-2 md:px-5 gap-x-5 py-2 flex shadow-md rounded-md justify-center items-center">
      <img className="w-[100px] lg:w-[160px]" src={item.products.img} />
      <div className="flex flex-col  gap-y-2  md:text-md">
        <div className="text-[12px] md:text-sm line-clamp2 text-justify">
          {item.products.title}
        </div>
        <div className="font-semibold self-end mr-2">
          {item.products.textPrice}
        </div>
      </div>
    </section>
  );
};
