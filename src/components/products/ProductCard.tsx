import ProductType from "../../types/productType";

interface Props {
  product: ProductType;
}

const ProductCard = ({ product }: Props) => {
  return (
      <div className="">
        <div>{product.name}</div>
        <div>{product.price} Rs/-</div>
      </div>
  );
};

export default ProductCard;
