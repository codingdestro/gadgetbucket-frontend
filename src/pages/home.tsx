import { useProducts, ProductType } from "../api/products";
const home = () => {
  const [loading, _, products] = useProducts();

  return loading ? (
    <div>loading</div>
  ) : (
    <div className="grid sm:grid-cols-2 xl:grid-cols-4 md:grid-cols-3  gap-5 animate-fade">
      {Array.isArray(products) &&
        products.map((product: ProductType, idx: number) => (
          <div
            key={idx}
            className=" border p-5 flex flex-col gap-3 shadow-md rounded-md justify-center items-center"
          >
            <div className="w-[18rem] h-[15rem] p-5 flex items-center justify-center">
              <img src={product.img} alt="this is what is this" />
            </div>
            <div>
              <div className="line-clamp-2">
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
              <button className="bg-orange-500 rounded-lg py-2 px-5">
                add to cart
              </button>
            </div>
          </div>
        ))}
    </div>
  );
};

export default home;
