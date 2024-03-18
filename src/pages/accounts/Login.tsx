import { useState } from "react";
import { Link } from "react-router-dom";

export interface FieldsType {
  name: string;
  value: string;
}

const Home = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
      <section className="border w-[350px] h-[600px] gap-10 p-5  flex flex-col items-center justify-between shadow-md rounded-3xl relative ">
        <h1 className="text-3xl capitalize font-[500]">log in</h1>

        <div className="w-full flex flex-col gap-7  ">
          <div className="flex flex-col w-full ">
            <span className="bg-white capitalize">email</span>

            <div className="relative bg-green0">
              <input
                type="email"
                className="p-2 mt-3 w-full border-b bg-transparent outline-none "
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div className="flex flex-col w-full ">
            <span className="bg-white capitalize">Password</span>
            <div className=" " data-placeholder="test">
              <input
                type="password"
                className="p-2 mt-3 w-full border-b bg-transparent outline-none"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
        </div>

        <div className="w-full">
          <button className="w-full click py-2 border flex justify-center items-center rounded-3xl bg-gradient-to-r to-sky-400 from-pink-400 text-white capitalize">
            login
          </button>
          <div className="text-center mt-2 bottom-5">
            <Link
              to={"../signin"}
              className="italic text-sm text-violet-700 underline"
            >
              {"don't have any accout signin"}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
