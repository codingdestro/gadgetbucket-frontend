const home = () => {
  return (
    <div className="grid sm:grid-cols-2 xl:grid-cols-4 md:grid-cols-3  gap-5 animate-fade">
      {[1, 11, 1, 1, 1, 1].map((_, idx: number) => (
        <div
          key={idx}
          className=" border p-5 flex flex-col gap-3 shadow-md rounded-md justify-center items-center"
        >
          <div className="w-[18rem] h-[15rem] p-5">
            <img
              src="https://m.media-amazon.com/images/I/618d5bS2lUL._AC_UY218_.jpg"
              alt="this is what is this"
            />
          </div>
          <div>
            <div className="line-clamp-2">
              <h2>
                Apple 2023 MacBook Pro (16-inch, M3 Max chip with 16‑core CPU
                and 40‑core GPU, 48GB Unified Memory, 1TB) - Space Black
              </h2>
            </div>
            <div className="mt-1 flex gap-[5px]">
              <span className="text-sm">₹</span>
              <span className="font-semibold text-xl">3,99,900</span>
            </div>
          </div>
          <button className="bg-accent text-white rounded-lg w-[10rem] py-2">
            order now
          </button>
          <button className="bg-orange-500 rounded-lg py-2 w-[10rem]">
            add to cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default home;
