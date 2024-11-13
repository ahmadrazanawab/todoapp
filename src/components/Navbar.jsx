import React, { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { FiSearch } from "react-icons/fi";


const Navbar = () => {
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
              <div onClick={() =>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
                  {open ? <IoClose />: <GiHamburgerMenu />}
              </div>
              <div className={`md:flex bg-[#ddd] md:bg-[#f2f2f2]  items-center  md:pb-0 pb-12 absolute md:static   md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 px-2 my-2 transition-all duration-500 ease-in ${open ? 'top-20 opacity-100':'top-[-490px]'} md:opacity-100 opacity-0`}>
                  <form action="" className="md:flex items-center text-center md:justify-center " >
                      <h4 className="md:mx-2 md:py-0 py-2 md:my-0 my-4 text-xl font-semibold">Home</h4>
                      <h4 className='md:mx-2 md:py-0 py-2 md:my-0 my-4 text-xl font-semibold '>About</h4>
                      <button className='md:mx-2 md:py-0 py-2 md:my-0 my-4 text-xl font-semibold '>DeleteNotes</button>
                      <label htmlFor="srch" className="flex items-center justify-end">
                      <input type="text" className="md:px-4 md:py-2 md:bg-gradient-to-r md:from-[#ddd] md:to-transparent border-[1px] border-[#333] w-full mx-4 my-2 px-4 py-2 outline-none rounded-lg " id='srch' placeholder='Search here...' />  
                          <FiSearch className="flex absolute mr-6" />
                    </label>
                  </form>
              </div>
          </div> 
    </div>
  )
}

export default Navbar
