import { createContext, useReducer } from "react";
// Creating a function which accepts the current state, and an action
const AppReducer = (state, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return {
        ...state,
        expenses: [...state.expenses, action.payload],
      };
    default:
      return state;
  }
};
const initialState = {
  budget: 2000,
  expenses: [],
};

const AppContext = createContext();

export const AppProvider = (props) => {
  // Setting up the useReducer hook which will hold our state, and allow us to update the state via dispatch
  const [state, dispatch] = useReducer(AppReducer, initialState);
  return (
    // We're returning AppContext.Provider. This has a value prop which contains the data which we allow our components to see and have access to, as well as the dispatch function that lets us update the state by dispatching actions
    <AppContext.Provider
      value={{
        budget: state.budget,
        expenses: state.expenses,
        dispatch,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
export { AppContext };
