import { StyleSheet, Text, View } from 'react-native'
import React, { createContext, useContext,useState } from 'react'
const ThemeContext = createContext()
export const Mytheme = ({children}) => {
  const [Theme, setTheme] = useState('light')
  const toggleTheme = ()=>{
    setTheme(Theme==='light'?'drak':'light')
  }
  return (
    <ThemeContext.Provider value={{Theme,toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  )
}
export const useTheme = ()=>{
  return  useContext(ThemeContext);
}

export default Mytheme

const styles = StyleSheet.create({})