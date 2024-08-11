import { useNavigate } from "react-router";
import { ProductType } from "../../types/productType";
import useProducts from "../../store/useProducts";

interface Props {
  product: ProductType;
}
const ProductCard = ({ product }: Props) => {
  const addToCartProduct = useProducts((state) => state.addToCartProduct);
  const isAddedToCart = useProducts((state) => state.isAddedToCart);

  const redirect = useNavigate();
  return (
    <div className="border w-[380px] md:w-[600px] lg:w-[800px] px-2 gap-x-5 py-5 flex shadow-md rounded-md justify-center items-center">
      <img
        className="w-[100px] lg:w-[160px]"
        src={product.img}
        alt={product.img}
      />

      <div className="flex flex-col text-sm gap-y-2 items-end">
        <div className=" line-clamp-3">
          <h2>{product.title}</h2>
        </div>

        <span className="font-[600] self-start ">{product.textPrice}</span>

        <div className="flex gap-x-2">
          <button
            className="bg-accent text-white rounded-lg text-sm px-3 py-2"
            onClick={() => redirect(`/make/order/${product.id}`)}
          >
            order now
          </button>
          <div className="bg-orange-500 flex items-center justify-center  rounded-lg py-2 px-5 w-32">
            {isAddedToCart !== product.id ? (
              <button
                onClick={() => !isAddedToCart && addToCartProduct(product.id)}
              >
                add to cart
              </button>
            ) : (
              <img
                src="/assets/loading.png"
                alt="loading imge"
                className="animate-spin w-4"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
