import React from 'react'
import { RiDeleteBin5Line } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";
const TodoList = () => {
  return (
    <div className="mb-10">
        <div className='shadow-lg rounded-lg bg-[#ddd] py-4 px-6 text-center'>
              <h4 className="mb-4 text-2xl font-semibold text-gray-600 ">Title</h4>
              <div className="flex bg-white h-32 w-60 text-start px-4 py-1 rounded">
                    <p className=''>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa delectus aut molestiae quidem. Cupiditate, dignissimos optio.</p>
              </div>
              <p className="mt-4">13/11/2024 8:40pm</p> 
              <div className="flex justify-between">
                    <FaRegEdit className="text-sky-500  cursor-pointer size-10  p-1 border-[1px] border-sky-600 rounded-sm hover:bg-sky-500 hover:text-sky-700 "   />
                    <RiDeleteBin5Line className="text-red-500 cursor-pointer size-10  p-1 border-[1px] border-red-500 rounded-sm hover:bg-red-400 hover:text-red-700"/>  
              </div>
      </div>
    </div>
  )
}

export default TodoList
