import { useContext } from "react";
import { SigninContext } from "../context/SigninContext";

export const useSigninContext = () => {
  const context = useContext(SigninContext) 
  if (!context) {
    throw Error("useSigninContext must be used inside a SigninContextProvider")
  }
  return context;
}