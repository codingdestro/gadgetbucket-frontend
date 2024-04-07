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
    <section className="">
      <SortButton />
      <section className="w-full px-5  ">
        <div className="grid sm:grid-cols-2 xl:grid-cols-5 md:grid-cols-3  gap-5 animate-fade">
          {products.map((product: ProductType, idx: number) => (
            <div key={idx}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </section>
    </section>
  );
};

export default home;
