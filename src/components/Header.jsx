import ThemeButton from "./ThemeButton"

const Header = ({ setIsSidebarOpen }) => {

  const handleOpenSidebar = () => setIsSidebarOpen(true)

  /*  Identificar que dispositivo está usando el usuario  */
  const isMobileDevice = /Mobi|Android/i.test(navigator.userAgent);

  return (
    <header className="
      text-white p-4 flex justify-between
      sticky top-0 shadow shadow-black dark:shadow-slate-500
      bg-[#44803F] 
      dark:bg-[#13102F]
    ">

      {/*  Btn para cambiar el tema Claro/Oscuro */}
      <ThemeButton />

      {/*  Btn para ver el modal de "Carrito"  */}
      <button
        /*  Si es Celular o Tablet - un click  */
        onClick={isMobileDevice ? handleOpenSidebar : undefined}
        /*  Si es Computadora - doble click  */
        onDoubleClick={!isMobileDevice ? handleOpenSidebar : undefined}
        className="
        text-black py-2 px-4 rounded
          hover:shadow-sm transform hover:scale-105 duration-300 
          bg-[#D5B71E] hover:bg-[#E6C520] hover:shadow-[#B4CF66]
          dark:bg-[#3D1EAF] dark:hover:bg-[#3D1EAF] dark:hover:shadow-[#6457D5] dark:text-white
        "
      >
        <i className="bi bi-cart2 md:text-lg font-medium flex gap-2 items-center justify-center"></i>
      </button>

    </header>
  )
}

export default Header