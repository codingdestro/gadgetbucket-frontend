const Loading = () => {
  return (
    <div
      className="bg-red-50 fixed 
  -translate-x-[50%] -translate-y-[50%]
 flex items-start justify-center top-[40%] left-[50%]"
    >
      <div className="w-20 p-5">
        <img
          className="animate-spin"
          src="   https://cdn-icons-png.flaticon.com/512/7794/7794282.png "
          alt="loading "
        />
      </div>
    </div>
  );
};

export default Loading;
