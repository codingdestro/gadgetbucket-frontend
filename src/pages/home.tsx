import { ProductType } from "../types/productType";
import Loading from "../components/status/Loading";
import Error from "../components/status/Error";
import useProducts from "../store/useProducts";
import ProductCard from "../components/products/ProductCard";
import SortButton from "../components/products/SortButton";

const home = () => {
  const { products } = useProducts();
  const isLoading = useProducts((state) => state.isLoading);
  const error = useProducts((state) => state.error);

  return isLoading ? (
    <Loading />
  ) : error ? (
    <>
      <Error msg={error || "error occure!"} />
    </>
  ) : (
    <>
      <SortButton />
    <section className="h-[85%] w-full px-5 border  fixed overflow-auto scroll-none">
      <div className="grid sm:grid-cols-2 xl:grid-cols-4 md:grid-cols-3  gap-5 animate-fade">
        {products.map((product: ProductType, idx: number) => (
          <div key={idx}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </section>
    </>
  );
};

export default home;
