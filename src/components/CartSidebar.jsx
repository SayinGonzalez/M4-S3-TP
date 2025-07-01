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
        isSidebarOpen && <div className="fixed inset-0 bg-black/90 flex items-center justify-center p-5">
          <div className='bg-slate-950 rounded-xl shadow-lg px-6 py-4 w-11/12 max-w-md relative max-h-full overflow-y-auto'>
            <div className="w-full text-right mb-4">
              {/*  Btn para cerrar el modal  */}
              <button
                onClick={handleCloseSidebar}
                className="text-gray-400 hover:text-gray-300 transform hover:scale-110 duration-300"
              >
                <i className="bi bi-x-square text-2xl font-bold"></i>
              </button>
              {/* <button
								onClick={handleRemoveProductAll}
								className="text-white"
							>
								eliminar todo
							</button> */}
            </div>

            { /*  Si la lista no está vacía se renderizan las pelis sino se muestra un msj  */
              cart.length > 0 ? (
                <ul>
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
            <div className="flex justify-between text-slate-200 py-2 px-5 bg-fuchsia-950 -mx-6 -mb-4">
              <p>Precio Total: </p>
              <p> {totalPrice} </p>
            </div>

          </div>
        </div>
      }
    </>
  )
}

export default CartSidebar