import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const navigateToDashboard = () => {
    navigate("/dashboard");
  };
  return (
    <div className="bg-slate-100 h-auto grid grid-cols-5 gap-10 font-montserrat">
      {/* left */}
      <div className="bg-black h-screen col-span-2 grid  justify-center content-center ">
        <h2 className="text-white font-montserrat text-5xl font-bold ">
          Board.
        </h2>
      </div>
      {/* right */}
      <div className="grid col-span-3 justify-center content-center">
        {/* sign in text */}
        <div className="w-96 ">
          <div>
            <h3 className="font-semibold text-3xl">Sign in</h3>
            <p>Sign in to your account</p>
          </div>
          {/* Authentication buttons */}
          <div className="grid grid-cols-2 gap-2 mt-6">
            <button
              className="bg-white w-44 rounded-full p-2 flex items-center text-sm"
              onClick={navigateToDashboard}
            >
              <FcGoogle />
              <p className="ml-2">Sign in with Google</p>
            </button>
            <button
              className="bg-white w-44 rounded-full p-2 flex items-center text-sm"
              onClick={navigateToDashboard}
            >
              <FaApple /> <p className="ml-2">Sign in with Apple</p>
            </button>
          </div>
          {/* Login form */}
          <form className="bg-white mt-6 flex flex-col p-8 rounded-2xl">
            <label className="font-semibold text-sm">Email Address</label>
            <input
              type="email"
              required
              className="bg-slate-100 focus:bg-slate-200 focus:outline-none rounded-md h-8 mt-1 p-2 text-sm"
            />

            <label className="font-semibold text-sm  mt-4">Password</label>
            <input
              type="password"
              required
              className="bg-slate-100 focus:bg-slate-200 focus:outline-none	rounded-md h-8 mt-1 p-2 text-xl"
            />
            <p className="cursor-pointer text-blue-700 mt-6 mb-4">
              Forgot Password?
            </p>
            <button
              className="bg-black text-white h-8 rounded-md"
              onClick={navigateToDashboard}
            >
              sign in
            </button>
          </form>
          <div className="text-center mt-4">
            <p>
              don't have an account?
              <span className="text-blue-700 cursor-pointer ml-1">
                Register here
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
