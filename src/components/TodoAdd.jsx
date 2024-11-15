import React, { useContext, useState } from 'react'
import Model from './Model'
import noteProvider from '../Context/Context';

const TodoAdd = ({showModal,setShowModal,onClosed}) => {
    const {addTodo} = useContext(noteProvider);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleAddTodo = (e) => {
        e.preventDefault();
        addTodo(title, description);
        setTitle('');
        setDescription('');
    }
  return (
    <div className="flex justify-center mb-5">
          <Model isVisible={showModal} onClose={() => setShowModal(false)}>
                  <div className="mb-4 px-6 text-left">
                  <h3 className="mb-4 text-xl font-medium text-gray-900">Add Todo</h3>
                  <form action="" className="space-y-6">
                      <div>
                          <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-600">Title</label>
                          <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}}  name="title" id="title" className="bg-gray-300 border-gray-300 outline-none text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"  />
                      </div>
                      <div>
                          <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-600">Description</label>
                          <textarea type="text" value={description} onChange={(e)=>{setDescription(e.target.value)}} name="edescription" rows={5}  id="edescription" className="bg-gray-300 outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"  ></textarea>
                      </div>
                      <div onClick={onClosed}>
                          <button  className="mx-1 bg-cyan-600 text-slate-50 font-bold px-2 py-1 rounded-md shadow-md hover:scale-95">Cancel Todo</button>
                          <button type="submit" onClick={handleAddTodo}  className="mx-1 bg-cyan-600 text-slate-50 font-bold px-2 py-1 rounded-md shadow-md hover:scale-95">Save Todo</button>
                      </div>
                      
                  </form>
              </div>
            </Model>
    </div>
  )
}

export default TodoAdd
