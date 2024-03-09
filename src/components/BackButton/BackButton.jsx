import React from 'react'
import { IoArrowBackCircle } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';


const BackButton = () => {
    const navigate=useNavigate()

  return (
    <div className='fixed left-14 top-20 cursor-pointer'>
        <IoArrowBackCircle size={40} onClick={()=>{navigate(-1)}}  />
    </div>
  )
}

export default BackButton