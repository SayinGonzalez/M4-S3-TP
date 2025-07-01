import { useState } from "react";
import Header from "./components/Header";
import ProductsList from "./components/ProductsList";
import { CartProvider } from "./contexts/CartContext";
import CartSidebar from "./components/CartSidebar";
import Footer from "./components/Footer";

function App() {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <CartProvider>
      <div className='min-h-screen bg-[#56162C]'>

        {/*  Header - Cart Btn  */}
        <Header setIsSidebarOpen={setIsSidebarOpen} />

        {/*  Home con Productos disponibles  */}
        <ProductsList />

        {/*  Carrito  */}
        <CartSidebar
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />

      </div>
    </CartProvider>
  )
}

export default App
