const Loading = () => {
  return (
    <div
      className="fixed 
  -translate-x-[50%] -translate-y-[50%]
 flex items-start justify-center top-[40%] left-[50%]"
    >
      <div className="w-[4.5rem] p-5">
        <img
          className="animate-spin"
          src="/assets/loading.png"
          alt="loading "
        />
      </div>
    </div>
  );
};

export default Loading;
