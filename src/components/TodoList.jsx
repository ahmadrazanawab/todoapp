import React from 'react'
import { RiDeleteBin5Line } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";
const TodoList = () => {
  return (
    <div>
        <div className='shadow-md rounded-lg bg-[#ddd] py-4 px-6 text-center'>
              <h4 className="mb-4">Title</h4>
              <div className="bg-[#f2f2f2] flex h-32 w-60 text-start px-4 py-1 rounded">
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa delectus aut molestiae quidem. Cupiditate, dignissimos optio.</p>
              </div>
              <p className="mt-4">13/11/2024 8:40pm</p> 
              <div className="flex justify-between">
                    <FaRegEdit className="text-sky-500 cursor-pointer " size={30} />
                    <RiDeleteBin5Line className="text-red-500 cursor-pointer" size={30} />  
              </div>
      </div>
    </div>
  )
}

export default TodoList
