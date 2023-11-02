import { Sidebar } from 'flowbite-react'
import React, { useEffect } from 'react'
import BoardPage from './BoardPage'
import SidebarPage from './SidebarPage'
import { Link, useNavigate } from 'react-router-dom'

const Dashboard = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate('/board')
  }, [])
  return (
    <div>
      
    </div>
  )
}

export default Dashboard