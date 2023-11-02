import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

function ProtectedRoute({children}) {
    const token=localStorage.getItem("userToken");
    const navigate=useNavigate();
    useEffect(()=>{
      if(!token){
      navigate("board")
      }
    },[navigate])
  return children

}

export default ProtectedRoute