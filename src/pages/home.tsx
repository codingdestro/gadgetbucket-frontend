import { ProductType } from "../types/productType";
import Loading from "../components/status/Loading";
import Error from "../components/status/Error";

import useProducts from "../store/useProducts";
import ProductCard from "../components/products/ProductCard";
import SortButton from "../components/products/SortButton";
const home = () => {
  // const [loading, _, products] = useProducts();
  const { products } = useProducts();
  const isLoading = useProducts((state) => state.isLoading);
  const isAddedToCart = useProducts((state) => state.isAddedToCart);
  const error = useProducts((state) => state.error);

  const sortPrice = useProducts((state) => state.sortPrice);

  const addToCartProduct = useProducts((state) => state.addToCartProduct);

  const addToCartHandler = async (id: string) => {
    addToCartProduct(id);
  };

  return isLoading ? (
    <Loading />
  ) : error ? (
    <>
      <Error msg={error} />
    </>
  ) : (
    <section className="h-[88%] w-full px-5  fixed overflow-auto scroll-none">
      <SortButton />
      <div className="grid sm:grid-cols-2 xl:grid-cols-4 md:grid-cols-3  gap-5 animate-fade">
        {products.map((product: ProductType) => (
          <div key={product.id}>
            <ProductCard
              product={product}
              isAddedToCart={isAddedToCart}
              addToCartHandler={addToCartHandler}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default home;
