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
    <section className="w-full flex flex-col  items-center">
      <div className="flex max-w-[800px] flex-col items-center  gap-5 animate-fade">
        <div className="self-start">
          <SortButton />
        </div>
        <div className="w-full border" />
        {products.map((product: ProductType, idx: number) => (
          <div key={idx}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default home;
