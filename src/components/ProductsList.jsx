//  Productos disponibles en inicio

import products from "../api/products.json"
import ProductCard from "./ProductCard"

const ProductList = () => {

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 xl:gap-8 py-4 px-5 xl:py-10 xl:px-24">
      {
        products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))
      }
      
    </div>
  )
}

export default ProductList