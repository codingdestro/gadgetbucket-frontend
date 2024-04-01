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
      <section className="flex border max-w-[200px] justify-center gap-2 mb-2 items-center">
        <div className="text-lg">
          <span>sort :</span>
        </div>
        <select
          className="bg-transparent border-none px-2 py-2 rounded-lg outline-none cursor-pointer"
          onChange={(e) => handleSelectedOption(e.target.value)}
        >
          <option value="default">defult</option>
          <option value="low">low to high</option>
          <option value="high">high to low</option>
        </select>
      </section>
    </>
  );
};

export default SortButton;
