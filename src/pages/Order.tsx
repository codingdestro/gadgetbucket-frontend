import { useEffect } from "react";
import OrderCard from "../components/orders/OrderCard";
import Error from "../components/status/Error";
import Loading from "../components/status/Loading";
import useFetchOrders from "../hooks/useFetchOrders";
type OrderType = {
  id: string;
  cartToken: string;
  payment: string;
  address: string;
  status: "pending" | "ordered" | "delivered" | "cancelled";
  createdAt: string;
};

const Order = () => {
  const { isLoading, success, orders, fetch } = useFetchOrders();
  useEffect(() => {
    fetch();
  }, []);
  return (
    <section className="flex flex-col h-screen text-sm items-center w-full relative gap-5 animate-fade px-5">
      {isLoading ? (
        <>
          <Loading />
        </>
      ) : success ? (
        orders.length !== 0 ? (
          orders.map((ele: OrderType, idx: number) => (
            <OrderCard
              key={idx}
              id={ele.cartToken}
              price={ele.payment}
              status={ele.status}
              address={ele.address}
              date={new Date(ele.createdAt).toLocaleDateString()}
            />
          ))
        ) : (
          <Error msg="no order yet" />
        )
      ) : (
        <Error msg="failed to fetch orders" />
      )}
    </section>
  );
};

export default Order;
