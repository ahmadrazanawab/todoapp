import React, { useState } from 'react'
import Model from './Model'
import DemoModel from './DemoModel';

const TodoAdd = () => {
    const [showModal, setShowModal] = useState(false);
    const showModalBtn = () => {
        setShowModal(true)
    }

    const onClosed = (e) => {
        e.preventDefault();
        setShowModal(false);
    }

  return (
    <div className="flex justify-center mb-5">
        {/* <div className="flex flex-col w-full mx-40">
            <input type="text" className="px-4 my-3 py-2 text-xl border-[1px] border-[#333] outline-none rounded" placeholder="Enter Title..." />
            <textarea className="bg-[#fff] py-2 px-2 text-xl border-[1px] border-[#333] outline-none rounded" name="" id="" cols="30" rows="2" placeholder="Enter a Description..."></textarea> 
            <div className="my-4"><button className="bg-[#4CAF50] text-white text-xl px-6 py-2  rounded-md">Add Note</button> </div> 
      </div> */}
         
          <button onClick={showModalBtn}>Show Model</button>
          <Model isVisible={showModal} onClose={() => setShowModal(false)}>
                  <div className="mb-4 px-6 text-left">
                  <h3 className="mb-4 text-xl font-medium text-gray-900">Edit Note</h3>
                  <form action="" className="space-y-6">
                      <div>
                          <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-600">Title</label>
                          <input type="text"  name="title" id="title" className="bg-gray-300 border-gray-300 outline-none text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"  />
                      </div>
                      <div>
                          <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-600">Description</label>
                          <textarea type="text" name="edescription"  id="edescription" className="bg-gray-300 outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"  ></textarea>
                      </div>
                      <div onClick={onClosed}>
                          <button  className="mx-1 bg-cyan-600 text-slate-50 font-bold px-2 py-1 rounded-md shadow-md hover:scale-95">Cancel Note</button>
                          <button type="submit"  className="mx-1 bg-cyan-600 text-slate-50 font-bold px-2 py-1 rounded-md shadow-md hover:scale-95">Save Note</button>
                      </div>
                      
                  </form>
              </div>
            </Model>
    </div>
  )
}

export default TodoAdd
