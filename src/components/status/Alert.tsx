import { useState } from "react";
export const useShow = () => {
  const [show, setShow] = useState(false);

  const showTrigger = () => {
    if (show) return;
    setShow(true);

    setTimeout(() => {
      setShow(false);
    },  3000);
  };
  return { show, showTrigger };
};

const Alert = ({ show, msg }: { show: boolean; msg: string }) => {
  return (
    show && (
      <section
        className="min-w-[300px]
      animate-fadeInOut
      
      rounded-3xl  
       p-5 bg-white border shadow-sm z-40 flex items-center justify-center absolute translate-x-[-50%] translate-y-[-50%]"
        style={{
          left: "50%",
          top: "13%",
        }}
      >
        <div>{msg}</div>
      </section>
    )
  );
};

export default Alert;
