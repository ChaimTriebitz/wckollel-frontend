import { createContext, useReducer } from 'react'
import { reducer } from './reducer'
import { initialState } from './initialState'

export const Context = createContext()

export const ContextProvider = ({ children }) => {
   const [state, dispatch] = useReducer(reducer, initialState)
   return (
      <Context.Provider value={{ ...state, dispatch }}>
         {children}
      </Context.Provider>
   )
}
