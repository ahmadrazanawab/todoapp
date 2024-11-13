import React from 'react'
import noteProvider from './Context'
//import { v4 as uuidv4 } from 'uuid';
const ContextProvider = ({children}) => {
  return (
    <noteProvider.Provider>
      {children}
    </noteProvider.Provider>
  )
}

export default ContextProvider
