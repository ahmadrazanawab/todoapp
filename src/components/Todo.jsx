import React, { useContext, useState } from 'react'
import TodoList from './TodoList'
import noteProvider from '../Context/Context'

const Todo = () => {
    const { todos } = useContext(noteProvider);
    
    return (
      <div className="mt-32 w-full">
          <div className="flex justify-center mx-10">
              {
                  todos.map((todo) => {
                      return <div key={todo.id}><TodoList todo={todo}  /></div>
                  })
              }
             
          </div>
    </div>
  )
}

export default Todo
