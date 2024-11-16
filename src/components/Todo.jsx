import React, { useContext} from 'react'
import TodoList from './TodoList'
import noteProvider from '../Context/Context'

const Todo = ({quarry}) => {
    const { todos, allDeleteTodo } = useContext(noteProvider);
    // const handlealldelete = (e) => {
    //     e.preventDefault();
    //     const dels = allDeleteTodo([]);
    //     console.log(dels);
    // }
    return (
        <div className="mt-32  w-full">
            { todos.length === 0 && <div className="flex  justify-center items-center h-[300px]  mx-10 mb-10">
                <p className="md:text-5xl  text-3xl text-gray-600 font-semibold">No Notes. Create new One</p>
            </div>}
            <div className="flex md:justify-between justify-center flex-wrap mx-10 mb-10">
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
