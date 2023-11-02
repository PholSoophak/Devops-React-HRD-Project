import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import registerImg from "../../img/register.png";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../../redux/services/authService";
import { useFormik } from "formik";
import * as Yup from "yup";

const RegisterPage = () => {
  // const [user, setUser] = useState({});
  const { loading, userInfo, error, token, success } = useSelector(
    (state) => state.auth
  );
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const handleChange = (v) => {
  //   setUser({
  //     ...user, [v.target.name]: v.target.value
  //   })
  // }
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .matches(
          "[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,6}",
          "Invalid email address @something"
        )
        .required("Please provide your email"),
      password: Yup.string()
        .matches(
          "^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=])(?=\\S+$).{8,}$",
          "Strong password 8 character and 1 special character Uppercase and Lowercase character and No Space"
        )
        .matches()
        .required("password is required"),
    }),
    onSubmit: (values) => {
      dispatch(registerUser(values));
    },
  });
  /*   const register = (e) => {
    e.preventDefault();
    dispatch(registerUser(user));
  }; */
  useEffect(() => {
    if (success) navigate("/login");
    if (userInfo) navigate("/home");
  }, [success, userInfo]);

  return (
    <div className="flex justify-center items-center min-h-screen ">
      <div className="w-2/5 flex flex-col justify-center items-center gap-y-5">
        {/* text */}
        <div>
          <h1 className="text-2xl text-gray-700 font-font-primary font-bold">
            Organize your life, one task at a time with Task <br />
            <span className="text-3xl text-primary font-semibold">Zone</span>
          </h1>
        </div>
        {/* img */}
        <div>
          <img src={registerImg} alt="register" />
        </div>
      </div>

      {/* line */}
      <div className="bg-gray-400 w-0.5 h-[580px] m-20"></div>

      {/* form */}

      <div className="w-2/5 flex flex-col justify-center items-center gap-y-5 font-font-primary ">
        <h1 className="text-2xl text-gray-700 ">
          Sign up for Task{" "}
          <span className="text-primary font-semibold">Zone</span>
        </h1>
        <form
          className="bg-bg-primary shadow-xl w-[500px] p-12 rounded-xl"
          onSubmit={formik.handleSubmit}
        >
          <div className="mb-6 uppercase">
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              className="bg-gray-100 border border-gray-200 text-gray-800 text-sm rounded-lg block w-[400px] px-6 py-2.5 focus:ring-[1.5px] focus:border-primary focus:ring-primary"
              placeholder="somthing@gmail.com"
              name="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            <div className="text-sm text-red-600 lowercase px-2 py-2">
              {formik.touched.email && formik.errors.email ? (
                <div>{formik.errors.email}</div>
              ) : null}
            </div>
          </div>
          <div className=" uppercase">
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Password <span className="text-red-600 text-xl py-2">*</span>
            </label>
            <input
              type="password"
              className="bg-gray-100 border-gray-200  text-gray-800 text-sm rounded-lg block w-[400px] px-6 py-2.5 focus:ring-[1.5px] focus:border-primary focus:ring-primary"
              placeholder="Password"
              name="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
          </div>
          <div className="text-sm text-red-600 lowercase px-2 py-2">
            {formik.touched.password && formik.errors.password ? (
              <div>{formik.errors.password}</div>
            ) : null}
          </div>

          <button
            type="submit"
            className="bg-primary text-lg rounded-lg block w-[400px] px-6 py-2.5 outline-primary text-bg-primary font-semibold mt-8 hover:bg-[#27E1C1]"
          >
            Register
          </button>

          <div className="mb-6 text-center pt-6">
            <p className="text-md text-gray-600">
              Already have an account ?
              <Link to="/login">
                <span className="text-blue-600 hover:text-blue-700 ml-2 cursor-pointer">
                  Sign in
                </span>
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
