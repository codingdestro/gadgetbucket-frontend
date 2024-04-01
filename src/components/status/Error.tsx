const Error = ({ msg }: { msg: string }) => {
  return (
    <div className="max-w-300px rounded-lg border shadow-sm text-red-500 absolute
    p-5 top-[40%] left-[50%] translate-x-[-50%]">
      <h1>{msg}</h1>
    </div>
  );
};

export default Error;
