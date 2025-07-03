//  Muestra los productos en el carrito con cantidad y total

import ProductCardSidebar from "./ProductCardSidebar"
import EmptyCart from "./EmptyCart"
import { useCartContext } from "../contexts/CartContext"

const CartSidebar = ({ isSidebarOpen, setIsSidebarOpen }) => {

  const { cart, totalPrice } = useCartContext();

  // Setea el estado isModalOpen a false para poder cerrar el modal
  const handleCloseSidebar = () => setIsSidebarOpen(false)

  return (
    <>
      {
        /*  Renzeriza el Modal si isModalOpen es true  */
        isSidebarOpen && <div className="fixed inset-0 bg-black/90 flex justify-end">
          {/* CONTENEDOR SIDEBAR */}
          <div className='
            bg-[#B4CF66] dark:bg-[#3d348b]
            rounded-xl shadow-lg w-lg h-full overflow-y-auto
            grid grid-rows-[auto_1fr_auto]
          '>
            
            {/* CONTENEDOR BTN X */}
            <div className="
              w-full text-right sticky top-0 px-6 py-3 
              shadow-md shadow-current
              bg-[#44803F]
              dark:bg-[#13102F]
            ">
              {/*  Btn para cerrar el modal  */}
              <button
                onClick={handleCloseSidebar}
                className="
                text-gray-300 hover:text-gray-200
                dark:text-gray-400 dark:hover:text-gray-300 
                transform hover:scale-110 duration-300"
              >
                <i className="bi bi-x-square text-2xl"></i>
              </button>
              {/* <button
								onClick={handleRemoveProductAll}
								className="text-white"
							>
								Eliminar Productos
							</button> */}
            </div>

            { /*  Si la lista no está vacía se renderizan las pelis sino se muestra un msj  */
              cart.length > 0 ? (
                <ul className="m-6">
                  {cart.map((product) => (
                    <ProductCardSidebar
                      key={product.id}
                      product={product}
                    />
                  ))}
                </ul>
              ) : ( /*  Msj de lista vacía  */
                <EmptyCart />
              )
            }

            {/* Precio total de la suma de todos los productos */}
            <div className="sticky bottom-0 flex justify-between text-slate-200 font-semibold py-3 px-5 shadow-inner
            bg-[#397d32] shadow-[#cdff36]
            dark:bg-indigo-950  dark:shadow-[#6055be]">
              <p>Precio Total: </p>
              <p> $ {totalPrice} </p>
            </div>

          </div>
        </div>
      }
    </>
  )
}

export default CartSidebar