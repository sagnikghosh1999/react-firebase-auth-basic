import React from "react";
import { useNavigate } from "react-router-dom";
import { useUserAuth } from "../context/userAuthContext";

const Home = () => {
  const { logOut, user } = useUserAuth();
  console.log(user);
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <>
      <div className="p-4 text-lg mt-3 text-center">
        Hello Welcome <br />
        <code>{user.email}</code>
      </div>
      <div className="grid justify-center items-center gap-2">
        <button
          onClick={handleLogout}
          className="bg-red-500 px-6 py-2 font-poppins rounded-md text-white font-bold"
        >
          Log out
        </button>
      </div>
    </>
  );
};

export default Home;
