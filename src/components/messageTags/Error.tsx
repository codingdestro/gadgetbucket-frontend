const Error = ({ message }: { message: string }) => {
  return (
    <div className="error-container">
      <span className="icon">❌</span>
      {message}
    </div>
  );
};

export default Error;
