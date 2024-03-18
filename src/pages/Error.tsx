type Props = {
  message?: string;
};
const Error = ({ message }: Props) => {
  return (
    <div className="absolute w-full px-5 top-[40%] left-[50%] translate-x-[-50%]">
      <h2 className="text-2xl text-center text-red-500 capitalize p-5 border-b-2">
        {message || "Error 404 not found!"}
      </h2>
    </div>
  );
};

export default Error;
