import {createContext, useState} from 'react'

const Context = createContext({
  counter: 0,
  setCounter: () => {}
})

export const ContextProvider = ({children}) => {
  const [counter, setCounter] = useState(0)
  const context = {counter, setCounter}

  return <Context.Provider value={context}>{children}</Context.Provider>
}

export default Context
