import React, { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { FiSearch } from "react-icons/fi";
import { RiDeleteBin5Line } from "react-icons/ri";
import { IoMdAdd } from "react-icons/io";



const Navbar = ({ showModalBtn,setQuarry}) => {
    const [open, setOpen] = useState(false);
    // button color = "#4CAF50"
  return (
    <div className='shadow-md w-full fixed top-0 left-0'>
          <div className='md:flex items-center justify-between bg-[#f2f2f2] py-4 md:px-10 px-7'>
              <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-gray-800'>
                  <span className='text-2xl text-indigo-600  pt-2'>
                  My Notes
                  </span>
                 
              </div>
              <div>
              </div>
              <div onClick={() =>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
                  {open ? <IoClose /> : <GiHamburgerMenu />}
              </div>
              <div className={`md:flex bg-[#ddd] md:bg-[#f2f2f2]  items-center  md:pb-0 pb-12 absolute md:static   md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 px-2 my-2 transition-all duration-500 ease-in ${open ? 'top-16 opacity-100':'top-[-490px]'} md:opacity-100 opacity-0`}>
                  <form action="" className="md:flex items-center text-center md:justify-center " >
                      <button onClick={showModalBtn} className='flex md:mx-2 items-center bg-sky-500 text-white px-4 md:px-6 py-2 rounded-md md:py-2  md:my-0 my-4  font-semibold'><span><IoMdAdd className="text-white size-5 " /></span><small>Add Note</small></button>
                      <button className='flex md:mx-2 items-center bg-red-500 text-white px-4 md:px-6 py-2 rounded-md md:py-2  md:my-0 my-4  font-semibold'><span><RiDeleteBin5Line className="text-white size-5 " /></span><small>Delete All</small></button>
                      <label htmlFor="srch" className="flex items-center justify-end">
                      <input type="text" onChange={(e)=>{setQuarry(e.target.value)}} className="md:px-4 md:py-2 md:bg-gradient-to-r md:from-[#ddd] md:to-transparent border-[1px] border-[#333] w-full mx-4 my-2 px-4 py-2 outline-none rounded-lg " id='srch' placeholder='Search here...' />  
                          <FiSearch className="flex absolute mr-6" />
                    </label>
                  </form>
              </div>
          </div> 
    </div>
  )
}

export default Navbar
