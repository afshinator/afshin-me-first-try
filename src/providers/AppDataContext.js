import React, { createContext, useState } from 'react'

export const AppDataContext = createContext()

const AppDataProvider = ({children}) => {
  const [state, setState] = useState({ sound: true, })
  const soundsOff = () => { setState({...state, sound: false }) }
  const soundsOn = () => { setState({ ...state, sound: true }) }

  const value = { state, soundsOff, soundsOn }

  return (
    <AppDataContext.Provider value={value}>
      {children}
    </AppDataContext.Provider>
  )
}

export default AppDataProvider