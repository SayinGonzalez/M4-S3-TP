import { useThemeContext } from "../contexts/ThemeContext"

const Header = ({ setIsSidebarOpen }) => {

  const { toggleDark } = useThemeContext();

  const handleOpenSidebar = () => setIsSidebarOpen(true)

  return (
    <header className="bg-[#410318] text-white p-4 text-end">
      <button onClick={toggleDark}>dark</button>
      {/*  Btn para ver el modal de "Carrito"  */}
      <button
        onClick={handleOpenSidebar}
        className="bg-rose-900 hover:shadow-sm hover:shadow-rose-700 transform hover:scale-105 duration-300 text-white py-2 px-4 rounded"
      >
        <i className="bi bi-cart2 md:text-lg font-medium flex gap-2 items-center justify-center"></i>
      </button>
    </header>
  )
}

export default Header
