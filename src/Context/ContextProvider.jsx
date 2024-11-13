import React from 'react'
import noteProvider from './Context'
const ContextProvider = ({children}) => {
  return (
    <noteProvider.Provider>
      {children}
    </noteProvider.Provider>
  )
}

export default ContextProvider
