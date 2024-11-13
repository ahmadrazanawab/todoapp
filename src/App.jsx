import React from 'react'
import Navbar from './components/Navbar'
import Todo from './components/Todo'
//import { v4 as uuidv4 } from 'uuid';
const App = () => {
  return (
    <div>
          <Navbar />
          <Todo/>
    </div>
  )
}

export default App
