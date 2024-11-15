import React, {useState } from "react";
import Navbar from "./components/Navbar";
import Todo from "./components/Todo";
import ContextProvider from "./Context/ContextProvider";
import TodoAdd from "./components/TodoAdd";

const App = () => {
    const [showModal, setShowModal] = useState(false);
    const [quarry, setQuarry] = useState('');
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
          <ContextProvider>
              <Navbar showModalBtn={showModalBtn} setQuarry={setQuarry}/>
              <div>
                  <TodoAdd showModal={showModal}  setShowModal={setShowModal} onClosed={onClosed} />
                  <Todo quarry={quarry} setQuarry={setQuarry} />
              </div>
        </ContextProvider>
    </>
  );
};

export default App;
