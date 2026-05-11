import { createContext, useReducer } from "react"

// create context
export const SignupContext = createContext()

// reducer function
export const signupReducer = (state, action) => {
  switch (action.type) {
    case "CREATE_SIGNUP":
      return {
        signups: [action.payload, ...state.signups]
      }
    default:
      return state
  }
}

// context provider
export const SignupContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(signupReducer, {
    signups: []
  })

  return (
    <SignupContext.Provider value={{ ...state, dispatch }}>
      {children}
    </SignupContext.Provider>
  )
}