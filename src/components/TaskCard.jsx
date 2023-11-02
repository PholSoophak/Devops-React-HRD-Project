import React, { useEffect, useState } from 'react'
import { FaTimesCircle } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getTaskById, removeTask } from '../redux/services/taskService';
import { RiErrorWarningLine } from "react-icons/ri";
function TaskCard({ datas }) {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [detail, setDetail] = useState({})
  const [taskId, setTaskId] = useState({})
  function detailTask(params) {
    setDetail(params)
  }
  function covertDate(date) {
    let conDate = new Date(date);
    let newDate = conDate.toDateString().split(" ");
    return newDate[0] + "," + newDate[1] + " " + newDate[2];
  }
  console.log(taskId);
  const removeFromTask = (e) => {
    e.preventDefualt()
    dispatch(removeTask(taskId))
  }
  function updateToTask(id) {
    dispatch(getTaskById(id))
    navigate("/updateTask")
  }
  return (
    <div className='grid-cols-3 gap-4 grid mt-16 w-[830px]'>
      {datas.map((data) => (
        <div className={data.status === 'is_completed' ? 'float-left w-[260px] p-5 bg-[#A3EDAA] border border-gray-200 rounded-2xl shadow text-left'
          : data.status === 'is_in_progress' ? 'float-left w-[260px] p-5 bg-[#9ECDF8] border border-gray-200 rounded-2xl shadow text-left' : data.status === 'is_in_review' ? 'float-left w-[260px] p-5 bg-[#FCBE9F] border border-gray-200 rounded-2xl shadow text-left' :
            'float-left w-[260px] p-5 bg-[#E5E5E5] border border-gray-200 rounded-2xl shadow text-left'} key={data.taskId}>
          <div className='inline-flex'>
            <p className="mb-2 text-xl font-bold ">{covertDate(data.date)}</p>
            {/* <span>{data.taskId}</span> */}
            <label
              htmlFor="my-modal-5" onClick={() => setTaskId(data.taskId)}
            >
              <FaTimesCircle className='float-right ml-20 text-2xl ' />
            </label>

          </div>
          <label htmlFor="my-modal" onClick={() => detailTask(data)}>
            <p className="line-clamp-1 mb-3 text-xl font-bold">{data.taskName}</p>
            <p className='line-clamp-3 mb-4'>{data.description}</p>
          </label>
          <div className="dropdown">
            <label tabIndex={0} className="bg-white hover:bg-gray-100 text-black font-bold py-2 px-6 rounded-xl w-[96px] h-[32px] shadow-md">
              {data.status == 'is_completed' ? 'Done' : data.status == 'is_in_progress' ? 'In Progress' : data.status == 'is_in_review' ? 'Review' : 'Not Yet'}
            </label>
            <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
              <li><a>Done</a></li>
              <li><a>In Progress</a></li>
              <li><a>Review</a></li>
              <li><a>Not Yet</a></li>
            </ul>
          </div>
        </div>
      ))}
      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box p-8">
          <div>
            <p className="font-bold text-xl float-left">{detail.taskName}</p>
            <p className='font-bold text-xl text-red-700 float-right'>{covertDate(detail.date)}</p>
          </div>
          <div className='mt-12'>
            <p className='text-gray-400 float-left'>{detail.categoryId}</p>
            <p className='text-primary float-right font-bold text-xl'> {detail.status == 'is_completed' ? 'Done' : detail.status == 'is_in_progress' ? 'In Progress' : detail.status == 'is_in_review' ? 'Review' : 'Not Yet'}</p>
            <hr className='float-left w-full mt-2 ' />
          </div>
          <p className='float-left mt-4 mb-4 text-black'>{detail.description}</p>
          <div className="modal-action clear-left">
            <label htmlFor="" className='btn bg-primary  hover:bg-green-00 border-none font-bold' onClick={() => updateToTask(detail.taskId)}>Update</label>
            <label htmlFor="my-modal" className="btn border-1 bg-transparent hover:bg-gray-400 font-bold text-black">Close</label>
          </div>
        </div>
      </div>
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
                        <p>Are you sure you want to delete this task?</p>
                        <div className="flex items-center justify-center">
                          <label
                           htmlFor="my-modal-5"
                            onClick={removeFromTask}
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
  )
}
export default TaskCard