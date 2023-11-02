import React, { useState } from 'react'
import {  Link } from 'react-router-dom';
import doted from '../../src/img/dotted.png'
import editimg from '../../src/img/edit.svg'
import deleteCat from '../img/delete.svg'
import { EditCategory } from './EditCategory';


const CatagoryCard = () => {

    const [edit,setEdit] = useState(false);

    const convertDate = (date) => {
        let dateDisplay = new Date(date);
        let time = dateDisplay.toLocaleDateString("en-US", {
          day: "numeric",
          month: "long",
          year: "numeric",
        });
        return time;
      };

  return (
    <div>

<div className="rounded-lg p-2 h-28 flex items-center shadow-lg gap-3 relative">
      <div className="dropdown absolute top-4 right-4">
        <label tabIndex={0} className="cursor-pointer">
          <img src={doted} />
        </label>
        <ul
          tabIndex={0}
          className="dropdown-content menu p-5 shadow bg-base-100 rounded-box w-52 space-y-3"
        >
          <li>
              <Link
                // to={updateCard/${categoryId}}
                // to='/edit'
                className="w-full h-full flex border-2 border-gray-300 hover:bg-gray-300 bg-inherit text-black"
                // onClick={() => setOpen(true)}
                onClick={()=> setEdit(true)}
              >
                <img src={editimg} className="mr-3 w-6 h-6" />
                <span>
                  Edit
                </span>
              </Link>
          </li>
          <li>
            <a
              className="border-2 border-gray-300 hover:bg-gray-300 bg-inherit text-red-600"
              // onClick={() => console.log(alert("lub"))}
            >
              <img src={deleteCat} className="w-6 h-6" />
              <span>Delete</span>
            </a>
          </li>
        </ul>
      </div>
      <div className="bg-primary w-2 h-full rounded-full"></div>
      <div className="ml-3">
        <h1 className="mb-5 text-xl font-semibold">CatagroyName</h1>
        <p>Create date</p>

        {/* <p>Create : {convertDate(dateTime)}</p> */}

      </div>
        <EditCategory edit={edit}/>
    </div>


    </div>
  )
}

export default CatagoryCard