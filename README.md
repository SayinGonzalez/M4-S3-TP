## 🔗 Enlace de despliegue en Netlify
https://mod-4-sprint-3-carrito.netlify.app/

## 📁 Estructura del Proyecto

```
/S2-TP
├── /public/assets/...
│   └── ...
├── /src
│   ├── /api
│   │   └── products.json     #  Info de productos
│   ├── /components
│   │   ├── ProductList.jsx           #  Muestra los productos disponibles en inicio
│   │   ├── ProductCard.jsx           #  Diseño de la Card para los productos en inicio
│   │   ├── CartSidebar.jsx           #  Muestra los productos en el carrito con cantidad y total
│   │   ├── ProductCardSidebar.jsx    #  Diseño de la Card para los productos en el sidebar
│   │   ├── EmptyCart.jsx             #  Diseño para mostrar msj "Carrito vacío"
│   │   ├── Header.jsx                #  Contiene el botón para "Carrito" y "Tema Claro/Oscuro"
│   │   ├── Footer.jsx
│   │   └── ThemeButton.jsx      # Botón para cambiar el tema
│   ├── context
│   │   ├── CartContext.jsx      # Maneja el estado global del carrito
│   │   ├── ThemeContext.jsx     # Maneja el tema claro/oscuro
│   ├── /hooks
│   │   ├── useCart           #  Manejo de lógica del carrito
│   │   └── useTheme          #  Manejo de lógica del tema claro/oscuro
│   ├── App.jsx     #  Componente principal
│   ├── main.jsx    #  Renderiza la aplicación
│   └── index.css
```

## 🧩 Funcionalidades del Proyecto

-  Muestra un listado de películas en la pantalla principal.
-  Se pueden agregar y quitar las películas a una Watchlist desde la pantalla principal.
-  Se puede acceder a la watchlist desde el botón en la pantalla principal.
-  Muestra las peliculas guardadas en un modal.
-  Permite quitar las peliculas guardadas desde el modal.
-  Mantiene el listado de peliculas guardadas aunque se recargue o se cierre la página.

## 🛠️ Tecnologías utilizadas

-  React con Vite
-  Tailwind CSS
-  Boostrap Icons

###  Sayin Gonzalez