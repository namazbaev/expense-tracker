import appReducer from "./appReducer";
import { createContext, useReducer } from "react";

// Initial state
const initialState = {
  transaction: []
}
// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);
  // Functions
  const addTransaction = data => {
    dispatch({
      type: 'ADD_TRANSACTION',
      payload: data
    })
  }
  const deleteTransaction = id => {
    dispatch({
      type: 'DELETE_TRANSACTION',
      payload: id
    })
  }
  return (<GlobalContext.Provider value={{
    addTransaction,
    deleteTransaction,
    transaction: state.transaction
  }}>
    {children}
  </GlobalContext.Provider>)
}