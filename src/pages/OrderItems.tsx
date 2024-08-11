import { useEffect } from "react";
import { useParams } from "react-router";
import useFetchOrderItems from "../hooks/userFetchOrderItems";

const OrderItems = () => {
  const { orderId } = useParams();
  const { isLoading, fetch } = useFetchOrderItems();

  useEffect(() => {
    (async () => {
      if (!orderId) return;
      await fetch(orderId);
    })();
  }, []);
  return (
    <main className="flex flex-col items-center w-full">
      <div>
        <h1>Products from your order cart</h1>
        <p>{orderId}</p>
      </div>
      <section className="">
        <p>{isLoading ? "loading" : "loaded"}</p>
      </section>
    </main>
  );
};

export default OrderItems;
