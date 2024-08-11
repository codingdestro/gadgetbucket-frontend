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
    <section className="flex text-sm justify-center items-start w-full relative">
      <div className="max-w-[1200px] flex flex-col p-5 gap-5 h-[80%] overflow-auto scroll-none fixed border rounded-lg shadow-md  w-full">
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
      </div>
    </section>
  );
};

export default Order;
