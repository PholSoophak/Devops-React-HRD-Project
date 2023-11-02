import React, { useEffect } from "react";
import closeImg from '../img/closeCard.svg'

export const EditCategory = ({edit}) => {
    const showModel = () => {
        const modelToggle = document.querySelector(".modal-toggle");
        modelToggle.checked = !modelToggle.checked;
      }
      useEffect(() => {
        if(edit){
            showModel()
        }
      })
  return (
    <div>
      <div>
        <input type="checkbox" id="my-modal-4" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box relative w-[400px]">
            <label
              htmlFor="my-modal-4"
              className="btn btn-sm bg-white hover:bg-white border-0 btn-circle absolute right-2 top-2"
            >
              <img src={closeImg} className="w-8 h-8 hover:text-black" />
            </label>
            <div className="px-6">
              <h3 className="mb-4 text-xl font-medium text-gray-900">
                Update Category
              </h3>
              <hr />
              <form
                className="mt-5 flex flex-col gap-y-5"
                // onSubmit={onSubmitCategory}
              >
                <input
                  type="text"
                  className="w-full border-primary focus:border-primary focus:ring-primary rounded-lg"
                  placeholder="Category Name"
                //   onChange={onChangeCategory}
                />
                <hr />
                <button type="submit" className="flex">
                  <label
                    htmlFor="my-modal-4"
                    className="w-full text-white bg-primary font-medium rounded-lg text-sm px-10 py-2.5 text-center cursor-pointer"
                  >
                    Update
                  </label>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
