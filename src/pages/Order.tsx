import { useEffect, useState } from "react";
import OrderCard from "../components/orders/OrderCard";
import Error from "../components/status/Error";
import axios from "axios";
import Loading from "../components/status/Loading";
type OrderType = {
  id: string;
  payment: string;
  address: string;
  status: "pending" | "ordered" | "delivered" | "cancelled";
  createdAt:string
};

const fetchOrders = () => {
  const [isLoading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [orders, setOrders] = useState([]);

  const fetch = async () => {
    setLoading(true);
    const token = localStorage.getItem("token");

    try {
      const { data } = await axios.post("/orders/get", {
        token,
      });

      if (data?.orders) {
        setSuccess(true);
        setOrders(data?.orders);
      } else {
        setSuccess(false);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
      setSuccess(false);
    }
  };
  return { isLoading, success, orders, fetch };
};

const Order = () => {
  const { isLoading, success, orders, fetch } = fetchOrders();
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
          orders.length !== 0? orders.map((ele: OrderType, idx: number) => (
            <OrderCard
              key={idx}
              id={ele.id}
              price={ele.payment}
              status={ele.status}
              address={ele.address}
              date={(new Date(ele.createdAt).toLocaleDateString())}
            />
          )):<Error msg="no order yet"/>
        ) : (
          <Error msg="failed to fetch orders" />
        )}
      </div>
    </section>
  );
};

export default Order;
