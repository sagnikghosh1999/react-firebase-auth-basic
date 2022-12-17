import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../context/userAuthContext";
import { InformationCircleIcon, XMarkIcon } from "@heroicons/react/24/outline";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { logIn } = useUserAuth();

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email, password);
    setLoading(true);

    try {
      await logIn(email, password);
      navigate("/");
      setLoading(false);
      // console.log(user);
    } catch (error) {
      setError(error.message.slice(9));
      setLoading(false);
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };

  return (
    <div>
      <div className="App bg-gray-900 h-screen w-screen relative overflow-hidden flex justify-center items-center">
        <div className="h-[40rem] w-[40rem] bg-gradient-to-r from-green-400 to-blue-500 rounded-full absolute left-2/4 -top-72 transform rotate-160 "></div>

        <div
          className={`${
            error
              ? "bg-white  z-[100]  rounded-lg translate-y-0 duration-500 drop-shadow-[0_35px_135px_rgba(0,0,0,0.5)] px-5 py-3 absolute w-80 top-20 "
              : "bg-white -translate-y-[50rem] scale-50 duration-500 drop-shadow-[0_35px_135px_rgba(0,0,0,0.5)] px-5 py-3 absolute  w-80 top-20"
          }`}
        >
          <div className="flex relative gap-x-4 items-center ">
            <span>
              <InformationCircleIcon className="text-red-600 w-6 h-6" />
            </span>
            <span className="text-center flex-1 text-red-600">{error}</span>
            <span
              onClick={() => {
                setError("");
              }}
            >
              <XMarkIcon className="text-red-600 w-4 h-4 cursor-pointer" />
            </span>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="container w-full h-auto max-w-[30rem] bg-black bg-opacity-30 rounded-2xl shadow-5xl relative z-2 border border-opacity-30 border-r-0  backdrop-filter backdrop-blur-sm"
        >
          <div className="pb-10">
            <img
              src={"/logo.png"}
              alt="login"
              className="w-auto h-40 mx-auto"
            />
            <div className="mx-auto w-full md:px-8 px-6 my-6">
              <p className="font-poppins text-center text-white text-3xl font-medium mb-8 uppercase">
                Login
              </p>
              <div className="relative z-0 my-6 lg:my-8">
                <input
                  type="email"
                  id="email"
                  onChange={(e) => setEmail(e.target.value)}
                  className="block py-2.5  w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-green-600 peer px-2"
                  placeholder=" "
                />
                <label
                  htmlFor="email"
                  className="absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-1 peer-focus:text-green-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Email
                </label>
              </div>

              <div className="relative z-0 my-6 lg:my-8">
                <input
                  type="password"
                  id="password"
                  onChange={(e) => setPassword(e.target.value)}
                  className="block py-2.5  w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-green-600 peer px-2"
                  placeholder=" "
                />
                <label
                  htmlFor="password"
                  className="absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-1 peer-focus:text-green-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Password
                </label>
              </div>

              <p className=" text-sm mt-5 text-white">
                By Continuing, I agree to the{" "}
                <span className="text-green-600">Terms of Use</span> &{" "}
                <span className="text-green-600"> Privacy Policy</span>
              </p>
              <button
                type="submit"
                className="bg-white bg-opacity-50 hover:bg-opacity-80 rounded-lg text-green-900 w-full font-semibold text-lg py-[6px] my-5 uppercase"
              >
                {loading !== true ? "Login" : "Loading..."}{" "}
              </button>
              <p className=" text-sm text-white">
                Have trouble loggging in?{" "}
                <span className="text-green-600">Get help</span>
              </p>
              <p className=" text-sm text-white my-1">
                Don't have an account?{" "}
                <Link to="/signup">
                  <span className="text-green-600 underline font-medium">
                    Signup now
                  </span>
                </Link>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
