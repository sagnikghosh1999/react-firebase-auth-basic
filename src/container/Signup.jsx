import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../context/userAuthContext";
import { InformationCircleIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";
import { signUp } from "../firebase/firebaseUtils";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [confirmPassword, setConfirmPassword] = useState("");

  // const { signUp } = useUserAuth();

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  const navigate = useNavigate();

  if (error) {
    setTimeout(() => {
      setError("");
    }, 5000);
  }

  function validateInputs(email, password, confirmPassword) {
    if (password !== confirmPassword) {
      setError("Passwords Doesn't Match");
      return false;
    }
    if (password.length < 6) {
      setError("Password should be 6 charcters long !!");
      return false;
    }
    const mailformat = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    if (mailformat.test(email)) {
      return true;
    } else {
      setError("Invalid Email");
      return false;
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email, password);
    setLoading(true);

    if (!validateInputs(email, password, confirmPassword)) {
      setLoading(false);
      return;
    }

    try {
      await signUp(email, password);
      navigate("/");
      setLoading(false);
      // console.log(user);
    } catch (error) {
      setError(error.message.slice(9));
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="App bg-gray-900 h-screen w-screen relative overflow-hidden flex justify-center items-center">
        <div
          className={`${
            error
              ? "bg-white  z-[100]  rounded-lg translate-y-0 duration-500 drop-shadow-[0_35px_135px_rgba(0,0,0,0.5)] px-5 py-3 absolute w-80 top-10 "
              : "bg-white -translate-y-[50rem] scale-50 duration-500 drop-shadow-[0_35px_135px_rgba(0,0,0,0.5)] px-5 py-3 absolute  w-80 top-10"
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

        <div className="h-[40rem] w-[40rem] bg-gradient-to-r from-green-400 to-blue-500 rounded-full absolute left-2/4 -top-72 transform rotate-160 "></div>

        <div className="container w-full h-auto max-w-[30rem] bg-black bg-opacity-30 rounded-2xl shadow-5xl relative z-2 border border-opacity-30 border-r-0  backdrop-filter backdrop-blur-sm">
          <div className="pb-10">
            <img
              src={"/logo.png"}
              alt="login"
              className="w-auto h-40 mx-auto"
            />
            <div className="mx-auto w-full md:px-8 px-6 my-6">
              <p className="font-poppins text-center text-white text-3xl font-bold mb-8 tracking-wider uppercase">
                Sign Up
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
                  type={showPassword ? "text" : "password"}
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
                <div
                  className="text-green-500  absolute right-2 top-2 cursor-pointer"
                  onClick={() => {
                    setShowPassword((prev) => !prev);
                  }}
                >
                  {showPassword ? (
                    <EyeSlashIcon className="h-6 w-6" />
                  ) : (
                    <EyeIcon className="h-6 w-6" />
                  )}
                </div>
              </div>

              <div className="relative z-0 my-6 lg:my-8">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  id="confirmPassword"
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="block py-2.5  w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-green-600 peer px-2"
                  placeholder=" "
                />
                <label
                  htmlFor="confirmPassword"
                  className="absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-1 peer-focus:text-green-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Confirm Password
                </label>
                <div
                  className="text-green-500  absolute right-2 top-2 cursor-pointer"
                  onClick={() => {
                    setShowConfirmPassword((prev) => !prev);
                  }}
                >
                  {showConfirmPassword ? (
                    <EyeSlashIcon className="h-6 w-6" />
                  ) : (
                    <EyeIcon className="h-6 w-6" />
                  )}
                </div>
              </div>

              <p className=" text-sm mt-5 text-white">
                By Continuing, I agree to the{" "}
                <span className="text-green-600">Terms of Use</span> &{" "}
                <span className="text-green-600"> Privacy Policy</span>
              </p>
              <button
                type="submit"
                disabled={loading ? true : false}
                onClick={handleSubmit}
                className="bg-white bg-opacity-50 hover:bg-opacity-80 rounded-lg text-green-900 w-full font-semibold text-lg py-[6px] my-5 uppercase"
              >
                {loading !== true ? "Sign up" : "Loading..."}{" "}
              </button>
              <p className=" text-sm text-white">
                Have trouble loggging in?{" "}
                <span className="text-green-600">Get help</span>
              </p>
              <p className=" text-sm text-white my-1">
                Already have an account?{" "}
                <Link to="/login">
                  <span className="text-green-600 underline font-medium">
                    Login now
                  </span>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
