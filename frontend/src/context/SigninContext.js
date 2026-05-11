import { createContext, useReducer } from "react";

export const SigninContext = createContext()

export const signinReducer = (state, action) => {
  switch (action.type) {
    case "CREATE_SIGNIN":
      return {
        signins: [action.payload, ...state.signins]
      }
    default:
      return state
  }
}

export const SigninContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(signinReducer, {
    signins: []
  })

  return (
    <SigninContext.Provider value={{ ...state, dispatch }}>
      {children}
    </SigninContext.Provider>
  )
}