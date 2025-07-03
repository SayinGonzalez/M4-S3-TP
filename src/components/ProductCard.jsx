//  Diseño de la Card para los productos en inicio

import { useCartContext } from "../contexts/CartContext";

const ProductCard = ({ product }) => {

  const { addToCart } = useCartContext();

  return (
    <div className='
      bg-[#44803F] dark:bg-indigo-950 
      w-full p-4 xl:p-5 rounded-xl shadow-md text-center
      flex flex-col justify-between
    '>

      {/*  Imágen de la película  */}
      <div className="w-full md:h-80 lg:h-96 overflow-hidden rounded-xl">
        <img
          src={`/img/${product.img}.jpg`}
          alt={product.name}
          className="w-full h-full object-cover" />
      </div>

      {/*  Nombre de la película  */}
      <h2 className="text-lg lg:text-xl font-bold text-white my-3 lg:my-4">{product.name}: ${product.price}</h2>

      {/*  Btn para añadir  */}
      <button
        onClick={() => addToCart(product)}
        className="
          bg-[#D5B71E] hover:bg-[#E6C520]
          dark:bg-lime-700 dark:hover:bg-lime-600 dark:text-white 
          font-medium mt-2 mx-auto h-fit px-5 py-1.5 rounded
        "
      >
        <i className="bi bi-cart-plus md:text-lg flex gap-2 items-center justify-center">Carrito</i>
      </button>

    </div>
  )
}

export default ProductCard