import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Todo from "./components/Todo";
import Model from "./components/Model";

const App = () => {
    const [showModal, setShowModal] = useState(false);
    const showModalBtn = (e) => {
        e.preventDefault();
        setShowModal(true)
    }

    const onClosed = (e) => {
        e.preventDefault();
        setShowModal(false);
    }
  return (
    <>
      <Navbar showModalBtn={showModalBtn} />
          <div>
              <Model isVisible={showModal} onClose={() => setShowModal(false)}>
                  <div className="mb-4 px-6 text-left">
                  <h3 className="mb-4 text-xl font-medium text-gray-900">Add Todo</h3>
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
                          <button  className="mx-1 bg-cyan-600 text-slate-50 font-bold px-2 py-1 rounded-md shadow-md hover:scale-95">Cancel Todo</button>
                          <button type="submit"  className="mx-1 bg-cyan-600 text-slate-50 font-bold px-2 py-1 rounded-md shadow-md hover:scale-95">Add Todo</button>
                      </div>
                      
                  </form>
              </div>
              </Model>
              <Todo />
      </div>
    </>
  );
};

export default App;
