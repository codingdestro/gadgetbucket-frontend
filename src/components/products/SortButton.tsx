import SelectOptions from "./SelectOptions";
import useProducts from "../../store/useProducts";
const SortButton = () => {
  const sortPrice = useProducts((state) => state.sortPrice);
  const fetchProducts = useProducts((state) => state.fetch);

  const handleSelectedOption = (key: string) => {
    if (key == "default") fetchProducts();
    else if (key == "low" || key == "high") sortPrice(key);
  };
  return (
    <>
      <section className="flex gap-2 text-sm items-center border rounded-md  cursor-pointer ">
        <div className="w-6 ml-2">
          <img src="/assets/sort.png" />
        </div>
        <SelectOptions onSelect={(value) => handleSelectedOption(value)} />
      </section>
    </>
  );
};

export default SortButton;
