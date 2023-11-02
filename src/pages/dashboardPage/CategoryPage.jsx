import React, { useEffect, useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";
import { RiErrorWarningLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { api } from "../../api/api";
import { deleteData, fetchData } from "../../redux/slice/categorySlice";
const CategoryPage = () => {
  const [name, setName] = useState();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.category.data);
  const token = localStorage.getItem("userToken");
  const [deleteId, setDeleteId] = useState();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const addCategory = async (e) => {
    e.preventDefault();
    try {
      await api
        .post(
          "/categories/users",
          {
            name: name,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.error(error);
        }, deleteId);
      navigate("/category");
    } catch (error) {
      if (error.response) {
        // setMsg(error.response.data.msg);
      }
    }
  };
  const convertDate = (date) => {
    let dateDisplay = new Date(date);
    let time = dateDisplay.toLocaleDateString("en-US", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
    return time;
  };

  const handleDelete = () => {
    dispatch(deleteData(deleteId));
  };

  const updateProduct = async (e) => {
    e.preventDefault();
    try {
      await api
        .put(
          `/categories/${deleteId}/users`,
          {
            name: name,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    } catch (error) {
      if (error.response) {
        console.log(error);
      }
    }
  };
  return (
    <div className="p-10 font-font-primary">
      <h1 className="text-[30px] float-left">Categories</h1>
      <div className="mt-20 grid grid-cols-3 gap-6 w-[1000px] ">
        {/* create category button  */}
        <div>
          <label
            htmlFor="my-modal-3"
            className="btn bg-white hover:bg-gray-100 border-none shadow-md p-5 rounded-xl w-[288px] pb-6 h-[120px] items-center justify-center block"
            type="button"
          >
            <p className="font-bold text-black text-lg capitalize ">
              Create Category
            </p>
            <button className="bg-primary  text-white font-bold text-2xl w-8 h-8 mt-4 rounded-full">
              +
            </button>
          </label>

          {/* Popup Create Category */}
          <input type="checkbox" id="my-modal-3" className="modal-toggle" />
          <div className="modal">
            <div className="modal-box relative">
              <label
                htmlFor="my-modal-3"
                className="btn btn-sm text-center bg-primary border-none font-bold btn-circle absolute right-2 top-2"
              >
                ✕
              </label>

              <h3 className="mb-4 text-2xl text-gray-900 font-bold">
                Create Category
              </h3>
              <hr className="w-full " />
              <form className="space-y-6 p-4" action="#" onSubmit={addCategory}>
                <div>
                  <label className="block mb-2 text-md text-gray-900 font-bold mt-5">
                    Category Name
                  </label>
                  <input
                    onChange={({ target }) => setName(target.value)}
                    className="border-2 border-primary text-sm rounded-lg focus:outline-[#2da199] focus:border-2 block w-full p-2.5"
                    placeholder="Category Name"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-primary hover:bg-[#2da199] focus:ring-4 focus:outline-slate-500 focus:ring-primary font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                  Create
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* task button */}
        {data.map((e) => (
          <button
            className="h-[120px] shadow-md rounded-xl w-72 p-1 hover:bg-gray-50"
            type="button"
          >
            <p className="bg-primary h-full w-[9px] rounded-lg float-left"> </p>
            <div className="text-xl text-left py-4 px-6">
              <div>
                <p className=" font-bold float-left">{e.categoryName}</p>

                {/* open modal (...) to delete and edit  */}
                <div className="dropdown float-right mb-10">
                  <label tabIndex={0}>
                    {" "}
                    <BsThreeDots />
                  </label>

                  <label htmlFor="my-modal-4">
                    <div className="dropdown">
                      {/* popup dropdown button  */}
                      <ul
                        tabIndex={0}
                        className="dropdown-content p-2 shadow bg-base-100 rounded-box"
                      >
                        {/* edit  */}
                        <div>
                          <li onClick={() => setDeleteId(e.categoryId)}>
                            <a className=" px-4 py-2 w-[150px] align-middle hover:bg-gray-100 mb-2 text-lg hover:rounded-xl  border rounded-xl float-left inline-flex">
                              <span className="mr-4">
                                <FiEdit className="w-[25px] h-[25px]" />
                              </span>
                              Edit
                            </a>
                          </li>
                        </div>
                        {/* delete  */}
                        <div>
                          <label
                            onClick={() => setDeleteId(e.categoryId)}
                            htmlFor="my-modal-5"
                          >
                            <li>
                              <a className="px-4 py-2 w-[150px] align-middle hover:bg-gray-100 text-lg hover:rounded-xl  border rounded-xl float-left inline-flex text-red-500">
                                <span className="mr-4">
                                  <AiOutlineDelete className="w-[25px] h-[25px]" />
                                </span>{" "}
                                Delete
                              </a>
                            </li>
                          </label>
                        </div>
                      </ul>
                    </div>
                  </label>

                  {/* edit popup  */}
                  <input
                    type="checkbox"
                    id="my-modal-4"
                    className="modal-toggle"
                  />
                  <div className="modal">
                    <div className="modal-box relative">
                      <label
                        htmlFor="my-modal-4"
                        className="btn btn-sm text-center bg-primary border-none font-bold btn-circle absolute right-2 top-2"
                      >
                        ✕
                      </label>
                      <h3 className="mb-4 text-2xl text-gray-900 font-bold">
                        Edit Category
                      </h3>
                      <hr className="w-full " />
                      <form
                        className="space-y-6 p-4"
                        action="#"
                        onSubmit={updateProduct}
                      >
                        <div>
                          <label className="block mb-2 text-md text-gray-900 font-bold mt-5">
                            Category Name
                          </label>
                          <input
                            onChange={({ target }) => setName(target.value)}
                            className="border-2 border-primary text-sm rounded-lg focus:outline-[#2da199] focus:border-2 block w-full p-2.5"
                            //
                            placeholder={`Category Name`}
                            required
                          />
                        </div>

                        <button
                          type="submit"
                          className="w-full text-white bg-primary hover:bg-[#2da199] focus:ring-4 focus:outline-slate-500 focus:ring-primary font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                        >
                          update
                        </button>
                      </form>
                    </div>
                  </div>

                  {/* delete popup  */}
                  <input
                    type="checkbox"
                    id="my-modal-5"
                    className="modal-toggle"
                  />
                  <div className="modal">
                    <div className="modal-box relative">
                      <label
                        htmlFor="my-modal-5"
                        className="px-5 text-gray-500 text-center font-bold  absolute right-2 top-2"
                      >
                        ✕
                      </label>
                      <form className="space-y-6 p-4" action="#">
                        {/* icon  */}
                        <div className="items-center justify-center flex">
                          <RiErrorWarningLine className="w-16 h-16 text-gray-400" />
                        </div>
                        <p>Are you sure you want to delete this category?</p>
                        <div className="flex items-center justify-center">
                          <label
                            onClick={handleDelete}
                            className="mr-3 text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-slate-500 focus:ring-primary font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                          >
                            Yes I'm sure
                          </label>
                          <label
                            htmlFor="my-modal-5"
                            className=" text-black border hover:bg-gray-100 focus:ring-4 focus:outline-slate-500 focus:ring-primary font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                          >
                            No, Cancel
                          </label>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <p className="float-left text-[15px] mt-10 ml-3">
                Created: {convertDate(e.date)}
              </p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
