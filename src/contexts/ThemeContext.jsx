//  Maneja el tema claro/oscuro

import { createContext, useContext } from "react";
import useTheme from "../hooks/useTheme";

//  1. Crear el contexto (createContext)
const ThemeContext = createContext();

//  2. Crear el provide
export const ThemeProvider = ({ children }) => {

  const toggleTheme = useTheme();

  return (
    <ThemeContext.Provider value={toggleTheme}>
      {children}
    </ThemeContext.Provider>
  )
}
//  2.1 Usar el provider en el main.jsx

//  3. Crear un custom hook para consumir el contexto (useContext)
export const useThemeContext = () => {
  return useContext(ThemeContext);
}


/* 

// src/context/ThemeContext.jsx
import { createContext, useContext, useEffect, useState } from 'react'

const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
  


  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)


*/