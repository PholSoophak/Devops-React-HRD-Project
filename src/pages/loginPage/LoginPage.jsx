import React, { useEffect, useState } from "react";
import gifImg from "../../img/Authentication.gif";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginAuth } from "../../redux/services/authService";

function LoginPage() {
  const { loading, userInfo, error, token, success } = useSelector(
    (state) => state.auth
  );
  const [validate, setValidate] = useState("");
  const [msg, setMsg] = useState("");
  const [user, setUser] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };
  useEffect(() => {
    switch (error) {
      case 404:
        showModel("Invalid email");
        setMsg("Please check your email address and try again!")
        break;
      case 401:
        showModel("Incorrect password")
        setMsg("Please check your password and try again!")
      default:
        break;
    }

    if (userInfo) navigate("/board");
  }, [userInfo, navigate, error]);
  const submitUser = (e) => {
    e.preventDefault();
    dispatch(loginAuth(user));
  };
  const showModel = (smg) => {
    const modelToggle = document.querySelector(".modal-toggle");
    modelToggle.checked = !modelToggle.checked;
    setValidate(smg)
  }
  return (
    <div className="flex justify-center items-center min-h-screen">
      {/* form */}
      <div className="w-2/5 flex flex-col justify-center items-center gap-y-5 font-font-primary mb-20 ">
        <form
          className=" bg-bg-primary shadow-xl w-[480px] p-12 rounded-xl"
          onSubmit={submitUser}
        >
          <div className="mb-12">
            <h1 className="text-3xl text-gray-700  font-font-primary font-bold">
              User Login !
            </h1>
            <p className="text-md text-gray-600 py-2 font-font-primary">
              Welcome back Please enter your details
            </p>
          </div>

          <div class="mb-6 uppercase">
            <label class="block mb-2 text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              class="bg-gray-100 border border-gray-200 text-gray-800 text-sm rounded-lg block w-[400px] px-6 py-2.5 focus:ring-[1.5px] focus:border-primary focus:ring-primary"
              placeholder="pvhG3@gmail.com"
              name="email"
              onChange={handleChange}
            />
          </div>
          <div className="mb-8 uppercase">
            <label
              for="email"
              className="block mb-2 text-sm font-medium text-gray-700"
            >
              Password <span className="text-red-600 text-xl py-2">*</span>
            </label>
            <input
              type="password"
              class="bg-gray-100 border border-gray-200 text-gray-800 text-sm rounded-lg block w-[400px] px-6 py-2.5 focus:ring-[1.5px] focus:border-primary focus:ring-primary"
              placeholder="Password"
              name="password"
              onChange={handleChange}
            />
          </div>
          <div>
            <button
              type="submit"
              className="bg-primary text-lg rounded-lg block w-[400px] px-6 py-2.5 outline-primary text-bg-primary hover:bg-[#27E1C1]"
            >
              Login
            </button>
          </div>

          {/* daisy */}

          <input type="checkbox" id="my-modal" className="modal-toggle" />
          <div className="modal">
            <div className="modal-box">
              <h3 className="font-font-primary font-bold text-xl  border-b-4 border-primary">Oops !</h3>
              <p className="py-4 text-red-600">
                {validate}
                <span className="ml-2 text-gray-600">{msg}</span>
              </p>
              <div className="modal-action">
                <label htmlFor="my-modal" className="bg-primary border-primary btn  hover:bg-status-inProgress hover:border-none hover:text-gray-800 font-font-primary">Close !</label>
              </div>
            </div>
          </div>

          <div className="mb-6 text-center pt-6">
            <p className="text-md text-gray-600">
              Don't have an account ?
              <Link to="/register">
                <span className="text-blue-600 hover:text-blue-800 ml-2 cursor-pointer">
                  Sign up
                </span>
              </Link>
            </p>
          </div>
          {/* The button to open modal */}


          {/* Put this part before </body> tag */}
          <input type="checkbox" id="my-modal-6" className="modal-toggle" />
          <div className="modal modal-bottom sm:modal-middle">
            <div className="modal-box">
              <h3 className="font-bold text-lg">Congratulations random Internet user!</h3>
              <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
              <div className="modal-action">
                <label htmlFor="my-modal-6" className="btn">Yay!</label>
              </div>
            </div>
          </div>
        </form>
      </div>

      {/* line */}
      <div className="bg-gray-400 w-0.5 h-[550px] m-20"></div>

      <div className="w-2/5 flex flex-col justify-center items-center gap-y-5">
        {/* text */}
        <div>
          <h1 className="text-3xl text-gray-700 font-font-primary font-bold ">
            Welcome Back To Task
            <span className="text-3xl text-primary font-semibold ml-2">
              Zone
            </span>
          </h1>
        </div>
        {/* img */}
        <div>
          <img src={gifImg} alt="register" />
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
