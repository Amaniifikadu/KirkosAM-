import React, { createContext, useContext ,useState, } from 'react'

const YearContext = createContext()

export const YearProvider = ({ children }) => {
  const [year, setYear] = useState("2018");

  return (
    <YearContext.Provider value={{ year, setYear }}>
      {children}
    </YearContext.Provider>
  );
};

export const useYear = () =>  useContext(YearContext);

