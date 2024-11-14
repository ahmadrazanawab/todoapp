import React, { useState } from 'react'
import noteProvider from './Context'
import { v4 as uuidv4 } from 'uuid';
const ContextProvider = ({ children }) => {
    const todosIntial = [
        {
            id: uuidv4(),
            title: "Title1",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, blanditiis cupiditate! Doloribus cum alias expedita nulla excepturi sint quos assumenda autem ipsum! Optio, quos illum!",
        },
        {
            id: uuidv4(),
            title: "Title2",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, blanditiis cupiditate! Doloribus cum alias expedita nulla excepturi sint quos assumenda autem ipsum! Optio, quos illum!",
        },
        {
            id: uuidv4(),
            title: "Title3",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, blanditiis cupiditate! Doloribus cum alias expedita nulla excepturi sint quos assumenda autem ipsum! Optio, quos illum!",
        },
        
    ]
    const [todos, setTodos] = useState(todosIntial);
    // add todo
    const addTodo = (title, description) => {
        const todo = {
            id: uuidv4(),
            title,
            description,
        }
        setTodos([...todos, todo]);
        console.log(todo);
    }


    // delete todo 
    const deleteTodo = (id) => {
        const deleteTodo = todos.filter((todo) => { return todo.id !== id });
        setTodos(deleteTodo);
        console.log(deleteTodo);
    }

    // update todo
    
    
  return (
    <noteProvider.Provider value={{todos,setTodos,addTodo,deleteTodo}}>
          {children}
    </noteProvider.Provider>
  )
}

export default ContextProvider
