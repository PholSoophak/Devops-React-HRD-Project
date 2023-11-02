import React from 'react'
import { Outlet } from 'react-router-dom'
import SidebarPage from '../pages/dashboardPage/SidebarPage'

export const Root = () => {
    return (
        <div>
            <div className='grid grid-cols-12'>
                <div className='col-span-2'>
                    <SidebarPage />
                </div>
                <div className='col-span-10'>
                <Outlet/>
                </div>

            </div>
        </div>
    )
}
