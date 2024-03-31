import axios from "axios";
import { addToCartProduct, useFetchItems } from "../api/products";
import { ProductType } from "../types/productType";
import Loading from "../components/status/Loading";
const home = () => {
  // const [loading, _, products] = useProducts();
  const { isLoading, error, items } = useFetchItems<ProductType>(async () => {
    const { data } = await axios.get(
      "/products/get/products?offset=0&limit=100"
    );
    return data;
  });

  const addToCartHandler = async (id: string) => {
    id && (await addToCartProduct(id));
  };

  return isLoading ? (
    <Loading />
  ) : error ? (
    <div>{error}</div>
  ) : (
    <section className="h-[88%] w-full px-5  fixed overflow-auto scroll-none">
      <div className="grid sm:grid-cols-2 xl:grid-cols-4 md:grid-cols-3  gap-5 animate-fade">
        {items.map((product: ProductType, idx: number) => (
          <div
            key={idx}
            className="border p-5 flex flex-col gap-3 shadow-md rounded-md justify-center items-center"
          >
            <div className="w-[12rem] h-[12rem] p-5 flex items-center justify-center">
              <img src={product.img} alt="this is what is this" />
            </div>
            <div className="">
              <div className=" line-clamp-2">
                <h2>{product.title}</h2>
              </div>
              <div className="mt-1 flex gap-[5px]">
                <span className="font-semibold text-xl">
                  {product.textPrice}
                </span>
              </div>
            </div>
            <div className="flex gap-x-5 md:flex-col lg:flex-row md:gap-y-2 ">
              <button className="bg-accent text-white rounded-lg  px-5 py-2">
                order now
              </button>
              <button
                onClick={() => addToCartHandler(product.id)}
                className="bg-orange-500 rounded-lg py-2 px-5"
              >
                add to cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default home;
