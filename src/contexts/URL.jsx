/* eslint-disable react/prop-types */
import { createContext, useContext } from "react";

const URLContext = createContext()

export default function URLProvider({children}){
  return (
    <URLContext.Provider value={"http://localhost:3000/"}>
      {children}
    </URLContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export function useURLContext() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const value = useContext(URLContext)
  if (value === undefined) throw("The Requested Context Does Not Exist in The Given Scope")
  return value
}