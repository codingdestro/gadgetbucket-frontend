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
    <div className="border p-5 flex flex-col gap-3 shadow-md rounded-md justify-center items-center">
      <div className="w-[12rem] h-[12rem] p-5 flex items-center justify-center">
        <img src={product.img} alt="this is what is this" />
      </div>
      <div className="">
        <div className=" line-clamp-2">
          <h2>{product.title}</h2>
        </div>
        <div className="mt-1 flex gap-[5px]">
          <span className="font-semibold text-xl">{product.textPrice}</span>
        </div>
      </div>
      <div className="flex gap-x-5 md:flex-col lg:flex-row md:gap-y-2 ">
        <button
          className="bg-accent text-white rounded-lg  px-5 py-2"
          onClick={() => redirect(`/make/order/${product.id}`)}
        >
          order now
        </button>
        <div className="bg-orange-500  rounded-lg py-2 px-5">
          {isAddedToCart !== product.id ? (
            <button onClick={() => !isAddedToCart && addToCartProduct(product.id)}>
              add to cart
            </button>
          ) : (
            <div>loading...</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
