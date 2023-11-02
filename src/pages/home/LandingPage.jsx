import React, { useEffect } from "react";
import mainImg from "../../img/landing.png";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const LandingPage = () => {
  const navigate = useNavigate();
  const { userToken } = useSelector((state) => state.auth)
  useEffect(() => {
    if (userToken) navigate('/board')
  }, [])
  return (
    <div className="container mx-auto px-5 py-8">
      {/* nav */}
      <div className="flex justify-between p-4 text-3xl">
        <h1 className="font-bold  text-gray-700">
          Task
          <span className="font-bold  text-primary ml-2">Zone</span>
        </h1>
        <div className=" text-white font-bold uppercase ">
          <Link to="login">
            <button
              type="button"
              className=" bg-primary hover:bg-green-200 hover:text-gray-700 focus:outline-none focus:ring-4 focus:ring-green-300 rounded-md text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:hover:bg-green-700 dark:focus:ring-green-800"
            >
              Login
            </button>
          </Link>
          <Link to="register">
            <button
              type="button"
              class=" bg-primary hover:bg-green-200 hover:text-gray-700 focus:outline-none focus:ring-4 focus:ring-green-300  rounded-md text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:hover:bg-green-700 dark:focus:ring-green-800">
              Sign Up
            </button>
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-12 px-12 ">
        <div className="col-span-6 flex justify-center items-center h-screen">
          <img src={mainImg} alt="" />
        </div>
        <div className="col-span-6 flex flex-col justify-center h-screen items-center">
          <h1 className="text-3xl ml-48">
            The
            <span className="text-primary m-2">fastest</span>
            way to
          </h1>
          <h1 className="text-3xl">
            <span className="text-primary ">Complete</span> your tasks web way
            to
          </h1>
          <h1 className="text-3xl ml-80">app</h1>
        </div>
      </div>
      <footer class="bg-primary shadow ">
        <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div class="sm:flex sm:items-center sm:justify-between">
            <h1 className="font-bold text-xl text-gray-700">
              Task
              <span className="font-bold  text-bg-primary ml-2">Zone</span>
            </h1>
            <ul class="flex flex-wrap items-center mb-6 text-sm font-medium sm:mb-0  text-bg-primary">
              <li>
                <a href="#" class="mr-4 hover:underline md:mr-6 ">
                  Home
                </a>
              </li>
              <li>
                <a href="#" class="mr-4 hover:underline md:mr-6">
                  About us
                </a>
              </li>
              <li>
                <a href="#" class="mr-4 hover:underline md:mr-6 ">
                  Docs
                </a>
              </li>
            </ul>
          </div>
          <hr class="my-6 border-gray-200 sm:mx-auto lg:my-8" />
          <span class="block text-sm text-gray-500 sm:text-center">
            © 2023 Task Zone Mini Project
          </span>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
