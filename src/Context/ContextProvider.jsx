import React, { useState } from 'react'
import noteProvider from './Context'
import { v4 as uuidv4 } from 'uuid';
const ContextProvider = ({ children }) => {
    
    const [todos, setTodos] = useState([]);
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
    // all delete todo
    const allDeleteTodo = () => {
       setTodos([]);
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
    <noteProvider.Provider value={{todos,setTodos,addTodo,deleteTodo,updateTodo,allDeleteTodo}}>
          {children}
    </noteProvider.Provider>
  )
}

export default ContextProvider
