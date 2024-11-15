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
            description: " Doloribus cum alias expedita nulla quos assumenda autem ipsum! Optio, quos illum!",
        },
        {
            id: uuidv4(),
            title: "Title3",
            description: "excepturi sint quos assumenda autem ipsum! Optio, quos illum!",
        },
        
    ]
    const [todos, setTodos] = useState(todosIntial);
    // add todo
    const addTodo = async (title, description) => {
        const todo = {
            id: uuidv4(),
            title,
            description,
        }
       setTodos([...todos, todo]);
        
    }


    // delete todo 
    const deleteTodo = async (id) => {
         const deleteTodo = await todos.filter((todo) => { return todo.id !== id });
         setTodos(deleteTodo);
        console.log(deleteTodo);
    }

    // update todo
    const updateTodo = async (id,title,description) => {
        let newNotes = todos;
       for (let i = 0; i < newNotes.length; i++){
           const element = newNotes[i];
           if (element.id === id) {
               newNotes[i].title = title;
               newNotes[i].description = description;
               break;
           }
       }
       setTodos(newNotes);
       console.log(newNotes)
    }
    
    
  return (
    <noteProvider.Provider value={{todos,setTodos,addTodo,deleteTodo,updateTodo}}>
          {children}
    </noteProvider.Provider>
  )
}

export default ContextProvider
