//  Diseño de la Card para los productos en el sidebar

import { useCartContext } from "../contexts/CartContext"

//  Card para las pelis en el modal
const ProductCardSidebar = ({ product }) => {

 const {removeFromCart, updateQuantity} = useCartContext();

  return (

    <li key={product.id} className="bg-gray-800 flex gap-3 items-center justify-between p-2 mb-3 rounded-lg">

      {/* {/*  Imágen de la película  
      <div className="min-w-20 max-w-20 h-20 overflow-hidden rounded-lg">
        <img
          src={`/assets/imgProducts/${product.img}.jpg`}
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div> */}
      {console.log(product.quantity)}
      {/*  Nombre de la película  */}
      <span className="text-white text-center">{product.name}</span>

      <div className="flex gap-2 items-center">
        {/*  Btn para quitar una unidad del producto  */}
        <button
          className="text-slate-400 hover:text-slate-50 w-8 h-8 rounded-md"
          onClick={() => updateQuantity(product.id, product.quantity-1)}
        >
          <i className="bi bi-dash-lg  "></i>
        </button>
        {/*  Cantidad del producto  */}
        <p className="text-white border border-slate-400 px-1.5 py-0.5 rounded-sm">{product.quantity}</p>
        {/*  Btn para agregar una unidad del producto  */}
        <button
          className="text-slate-400 hover:text-slate-50  w-8 h-8 rounded-md"
          onClick={() => updateQuantity(product.id, product.quantity+1)}
        >
          <i className="bi bi-plus-lg  "></i>
        </button>
      </div>

      {/*  Btn para remover el producto  */}
      <button
        className="bg-transparent text-slate-400 hover:text-slate-50 w-8 h-8 rounded-md"
        onClick={() => removeFromCart(product.id)}
      >
        <i className="bi bi-trash3 text-lg"></i>
      </button>

    </li>
    

  )
}

export default ProductCardSidebar