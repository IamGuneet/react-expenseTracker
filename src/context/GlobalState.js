import React,{createContext,useReducer} from "react";
import AppReducer from './AppReducer'


// inital state
const initialState = {
    transactions: [
    ]
}
// creating context (global state type)
 export const GlobalContext = createContext(initialState);

// provider component
export const GlobalProvider = ({children})=>{
                                      // file
  const [state,dispatch] = useReducer(AppReducer,initialState);
// actions
function deleteTransaction(id){
  dispatch({
    type:'DELETE_TRANSACTION',
    payload:id,
  })
}

function addTransaction(transaction){
  dispatch({
    type:'ADD_TRANSACTION',
    payload:transaction,
  })
}



  return (
    <GlobalContext.Provider value ={{
      transactions:state.transactions,
      deleteTransaction,
      addTransaction
    }}>
      {children}
    </GlobalContext.Provider>
  )

}

