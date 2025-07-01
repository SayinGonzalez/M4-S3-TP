//  Maneja el estado global del carrito

import { createContext, useContext } from "react";
import useCart from "../hooks/useCart"

//  1. Crear el contexto (createContext)
const CartContext = createContext();

//  2. Crear el provider
export const CartProvider = ({ children }) => {
  
  // Crea instancia del custom hook useCart
  const cart = useCart();

  return (
    <CartContext.Provider value={cart}>
      {children}
    </CartContext.Provider>
  )
}
//  2.1 Usar el provider en el main.jsx

//  3. Crear un custom hook para consumir el contexto (useContext)
export const useCartContext = () => {
  return useContext(CartContext)
}