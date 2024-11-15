import React, { useContext, useState } from 'react'
import { RiDeleteBin5Line } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";
import noteProvider from '../Context/Context';
const TodoList = ({ todo}) => {
    const { deleteTodo, updateTodo } = useContext(noteProvider);
    const [isEditing, setIsEditing] = useState(false);
    const [etitle, setEtitle] = useState('');
    const [edescription, setEdescription] = useState('');
    const [editId, setEditId] = useState('');

    const handleEditNote = (todo) => {
        setEditId(todo.id);
        setEtitle(todo.title);
        setEdescription(todo.description);
    }

    const hanleUpdateTodo = (e) => {
        e.preventDefault();
            updateTodo(editId,etitle, edescription);
            setEditId(null);
            setIsEditing(false);
    }
   
    

  return (
      <div className="mb-5 mx-2">
        <div className='shadow-lg rounded-lg bg-[#ddd] py-4 px-6 text-center'>
              <div className="mb-4 flex justify-center  font-semibold">
                  {isEditing ? <input type="text" value={etitle} onChange={(e)=>{{setEtitle(e.target.value)}setIsEditing(true)}} className="text-xl  w-[95%] text-gray-600 rounded outline-none " />
                  : <h4 className="text-2xl text-gray-600">{todo.title}</h4>} </div>
              <div className="flex  bg-white min-h-32 w-60 text-start px-4 py-1 rounded">
                  {isEditing ? <textarea name="" value={edescription} onChange={(e)=>{{setEdescription(e.target.value)}setIsEditing(true)}} id="" cols="40" className="text-xl outline-none"></textarea>
                  : <p className=''>{todo.description}</p>}
              </div>
              <p className="mt-4">13/11/2024 8:40pm</p> 
              <div className="flex justify-between">
                  {isEditing ? <button onClick={hanleUpdateTodo} className="px-2 py-2 rounded text-xl text-[#fff] bg-sky-400 w-full border-[1px] border-sky-600 cursor-pointer outline-none">save</button>: (<>
                    <FaRegEdit onClick={()=>{{setIsEditing(true)}handleEditNote(todo)}} className="text-sky-500  cursor-pointer size-10  p-1 border-[1px] border-sky-600 rounded-sm hover:bg-sky-500 hover:text-sky-700 "   />
                    <RiDeleteBin5Line onClick={()=>{deleteTodo(todo.id)}} className="text-red-500 cursor-pointer size-10  p-1 border-[1px] border-red-500 rounded-sm hover:bg-red-400 hover:text-red-700"/>
                  </>)
                  }
            </div>
          </div>
    </div>
  )
}

export default TodoList
