import React, { useEffect } from 'react'
// icon 

import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useParams, useSearchParams } from 'react-router-dom';
import TaskCard from '../../components/TaskCard';
import { getTask, getTaskByStatus } from '../../redux/services/taskService';

const BoardPage = () => {
    const { task} = useSelector(state => state.task)
    const dispatch = useDispatch()
    const [param] = new useSearchParams()
    const board = useLocation()
    const status = param.get("status")
    useEffect(() => {
        if (board.pathname === "/board") {
            dispatch(getTask())
        }
        dispatch(getTaskByStatus(status))
    }, [board,status,dispatch])
    return (

        // header 
        <div className='p-10 font-font-primary'>
            <div>
                <h1 className='text-[30px] float-left'>All your boards</h1>
                <Link to="/addNewTask">
                    <a href="">
                        <button className=" float-right hover:bg-[#6ba7a5] h-11 text-[#312473] bg-primary border-[#312473] border-2 shadow-[3px_3px] font-font-primary font-bold px-4 rounded">
                            + Add New Task
                        </button>
                    </a>
                </Link>
            </div>
                <TaskCard datas={task} />
           
        </div>
    )
}

export default BoardPage