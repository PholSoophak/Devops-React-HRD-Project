import React from 'react'
import 'flowbite';

import { TbLogout } from "react-icons/tb";
import { BiCategory } from "react-icons/bi";
import { BsClipboard2Heart, BsClipboard } from "react-icons/bs";
import { CiViewList } from "react-icons/ci";
import { VscOpenPreview } from "react-icons/vsc";
import { TfiAngleDown } from "react-icons/tfi";
import { GrInProgress } from "react-icons/gr";
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getTask } from '../../redux/services/taskService';


const SidebarPage = () => {
    const navigate=useNavigate()
    const logout=()=>{
        localStorage.clear("userToken")
        navigate("")
    }
    return (
        <div className='text-black font-font-primary'>
            <aside id="default-sidebar" className="bg-[#EFFAF9] font-primary fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0">
                <div className="h-full">
                    <div className='inline-flex  px-3 py-6 p-10 '>
                        <p className='rounded-full bg-blue-400 w-6 h-6 text-white text-center'>S</p>
                        <p className='ml-3 text-lg font-bold'>Workspace</p>
                    </div>
                    <ul className="px-5 font-medium align-middle">

                        <li>
                            <NavLink to="/board">
                                <a href="#1" className="p-3 flex items-center text-black rounded-lg hover:bg-blue-100">
                                    <BsClipboard2Heart />
                                    <span className="ml-3">Boards</span>
                                </a>

                            </NavLink>
                        </li>

                        <li>
                            <NavLink to="/category">
                                <a href="1#" className="p-3 flex items-center text-black rounded-lg hover:bg-blue-100">
                                    <BiCategory />
                                    <span className="ml-3">Category</span>
                                </a>
                            </NavLink>
                        </li>

                        {/* status */}
                        <li>
                            <button type="button" className="flex items-center w-full p-2 transition duration-75 rounded-lg group hover:bg-blue-100" 
                            aria-controls="dropdown-example" 
                            data-collapse-toggle="dropdown-example">
                                <span className="flex-1 ml-3 text-black  text-left whitespace-nowrap" sidebar-toggle-item>
                                    Status</span>
                                <TfiAngleDown className='text-black' />
                            </button>
                            <ul id="dropdown-example" className="hidden ml-9 text-black" aria-labelledby="dropdownLargeButton">
                                <li>
                                    <NavLink to="board?status=is_completed">
                                        <a href="" className="p-2 flex items-center text-black rounded-lg hover:bg-blue-100">
                                            <CiViewList />
                                            <span className="ml-3">Done</span>
                                        </a>
                                    </NavLink>
                                </li>


                                <li>
                                    <NavLink to="board?status=is_in_progress">
                                        <a href="#" className="p-2 flex items-center text-black rounded-lg hover:bg-blue-100">
                                            <GrInProgress />
                                            <span className="ml-3">Progress</span>
                                        </a>
                                    </NavLink>
                                </li>

                                <li>
                                    <NavLink to="board?status=is_in_review">
                                        <a href="#" class="p-2 flex items-center text-black rounded-lg hover:bg-blue-100">
                                            <VscOpenPreview />
                                            <span className="ml-3">Reviews</span>
                                        </a>
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="board?status=is_canceled">
                                        <a href="#" className="p-2 flex items-center text-black rounded-lg hover:bg-blue-100">
                                            <BsClipboard />
                                            <span className="ml-3">Not Yet</span>
                                        </a>
                                    </NavLink>
                                </li>
                            </ul>
                        </li>

                        <li>
                            <button onClick={()=>logout()}>
                                <a href="/" className="p-5 flex items-center text-red-500 rounded-lg hover:bg-gray-100">
                                    <TbLogout />
                                    <span className="ml-3">Logout</span>
                                </a>

                            </button>
                        </li>
                    </ul>

                </div>
            </aside >
        </div >
    )
}

export default SidebarPage