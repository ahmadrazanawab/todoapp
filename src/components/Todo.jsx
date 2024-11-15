import React, { useContext, useState} from 'react'
import TodoList from './TodoList'
import noteProvider from '../Context/Context'

const Todo = ({quarry,setQuarry}) => {
    const { todos } = useContext(noteProvider);
    // const [quarry, setQuarry] = useState('');
  
    const filterTodo = todos.filter((todo) => (todo.title.toLowerCase().includes(quarry.toLowerCase())));
    
    
    
    return (
        <div className="mt-32 w-full">
            {/* <label htmlFor="srh">search todo
            <input type="text" id='srh' onChange={(e)=>{setQuarry(e.target.value)}} className='px-4 my-4 py-2 text-xl rounded border-[1px] border-[#33]' />
            </label> */}
            <div className="flex justify-between flex-wrap mx-10 mb-10">
              {
                  todos.filter((todo) => (todo.title.toLowerCase().includes(quarry.toLowerCase()))).map((todo) => {
                      return <div key={todo.id}><TodoList todo={todo}  /></div>
                  })
              }
             
          </div>
    </div>
  )
}

export default Todo
