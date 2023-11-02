import { Label } from 'flowbite-react'
import React, { useEffect, useState } from 'react'

// icon 
import { HiOutlineClipboardList } from "react-icons/hi";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getCategory } from '../../redux/services/categoryService';
import { addTask } from '../../redux/services/taskService';

const AddTask = () => {
    const data = useSelector((state) => state.category.data);
    const dispatch = useDispatch()
    const [task, setTask] = useState({})
    const navigate = useNavigate()
    useEffect(() => {
        dispatch(getCategory())
    }, [dispatch])

    console.log(data);

    const handlerChange = (e) => {
        setTask({
            ...task, [e.target.name]: e.target.value
        })
    }
    const submitTask = () => {
        dispatch(addTask(task))
        navigate("/board")
    }
    // console.log(task);
    return (
        <div className='p-10 font-font-primary'>
            <p className='text-[40px] font-bold'>Add New Task</p>,
            <div className=' py-5'>
                <div className='float-left mr-8'>
                    <label className='font-bold text-lg'>Date</label>
                    <br />
                    <input className='p-2 mt-3 rounded-lg shadow-lg bg-gray-100' type="datetime-local" name='date' onChange={handlerChange}></input>
                </div>
                <div className='float-left mr-8'>
                    <label className='font-bold text-lg'>Category</label>
                    <br />
                    <select className='p-2 mt-3 rounded-lg shadow-lg bg-gray-100 w-[236px] h-[42px] ' name='categoryId' onChange={handlerChange}>
                        <option value="0" selected>Choose Category</option>
                        {data.map((item) => (
                            <option value={item.categoryId}>{item.categoryName}</option>
                        ))}
                    </select>
                </div>
                <div className='float-left'>
                    <label className='font-bold text-lg'>Status</label>
                    <br />
                    <select className='p-2 mb-12 mt-3 rounded-lg shadow-lg bg-gray-100 w-[236px] h-[42px] ' name='status' onChange={handlerChange}>
                        <option value="0" selected>Choose Status </option>
                        <option value="is_in_progress">In Progress</option>
                        <option value="is_in_review">Review</option>
                        <option value="is_completed">Done</option>
                        <option value="is_canceled">Not Yet</option>
                    </select>
                </div>
                <HiOutlineClipboardList className='float-right text-gray-400 w-[300px] h-[300px] mr-28 ' />
                <div>
                    <label className='font-bold text-lg'>Title</label>
                    <br />
                    <input className='w-[770px] p-2 mt-3 mb-12 rounded-lg border bg-gray-50' type="text" placeholder='Mini Project' name='taskName' onChange={handlerChange}></input>
                </div>
                <div >
                    <label className='font-bold text-lg'>Description</label>
                    <br />
                    <textarea id="message" rows="4" className="w-[1038px] mb-5 block p-2.5 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300" placeholder="This homework is about related routes." name='description' onChange={handlerChange}></textarea>
                </div>
                <div>
                    <button className="bg-transparent hover:bg-blue-500 font-semibold hover:text-white py-2 px-4 border border-black-300 hover:border-transparent rounded">
                        Cancel
                    </button>
                    <button className="ml-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={submitTask}>
                        Create
                    </button>
                </div>
            </div>
            <div>
            </div>
        </div>
    )
}

export default AddTask