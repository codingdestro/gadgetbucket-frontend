const Success = ({ message }: { message: string }) => {
  return (
    <div className="success-container">
      <span className="icon"></span>
      {message}
    </div>
  );
};

export default Success;
