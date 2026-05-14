import { useEffect, useState } from "react"
import { NavLink, useLocation } from "react-router-dom"
import { Menu, ShoppingBag, X } from "lucide-react"
import { Cart } from "./cart/Cart"
import { useCart } from "./cart/CartContext"

const navItems: { to: string; label: string }[] = [
  { to: "/",          label: "Inicio" },
  { to: "/productos", label: "Productos" },
  { to: "/medidas",   label: "Medidas" },
  { to: "/politicas", label: "Políticas" },
  { to: "/oro",       label: "Compramos oro" },
  { to: "/nosotros",  label: "Quiénes somos" },
]

export function MobileNav() {
  const { totalItems } = useCart()
  const [menuOpen, setMenuOpen] = useState(false)
  const [cartOpen, setCartOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setMenuOpen(false)
    setCartOpen(false)
  }, [location.pathname])

  useEffect(() => {
    if (menuOpen || cartOpen) {
      document.body.style.overflow = "hidden"
      return () => { document.body.style.overflow = "" }
    }
  }, [menuOpen, cartOpen])

  const count = totalItems()

  return (
    <>
      <header className="md:hidden sticky top-0 z-30 bg-[#CAF0F8] text-black flex items-center justify-between px-3 py-2 shadow">
        <button
          onClick={() => setMenuOpen(true)}
          aria-label="Abrir menú"
          className="p-2 rounded-lg hover:bg-white/10"
        >
          <Menu size={22} />
        </button>
        <img src="/logo.png" alt="Jashten Joyas" className="h-9 object-contain" />
        <div className="w-10" />
      </header>

      <button
        onClick={() => setCartOpen(true)}
        aria-label="Abrir carrito"
        className="md:hidden fixed bottom-4 right-4 z-30 w-14 h-14 rounded-full bg-primary text-white shadow-glow flex items-center justify-center hover:bg-primary-dark transition-colors"
      >
        <ShoppingBag size={22} />
        {count > 0 && (
          <span className="absolute -top-1 -right-1 bg-diamond-dark text-white text-[11px] font-medium w-6 h-6 rounded-full flex items-center justify-center border-2 border-background">
            {count}
          </span>
        )}
      </button>

      {(menuOpen || cartOpen) && (
        <div
          onClick={() => { setMenuOpen(false); setCartOpen(false) }}
          className="md:hidden fixed inset-0 z-40 bg-black/40 transition-opacity"
          aria-hidden="true"
        />
      )}

      <aside
        className={`md:hidden fixed top-0 left-0 z-50 h-full w-72 max-w-[80%] bg-[#CAF0F8] flex flex-col transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b border-white/10">
          <img src="/logo.png" alt="Jashten Joyas" className="w-24 object-contain" />
          <button
            onClick={() => setMenuOpen(false)}
            aria-label="Cerrar menú"
            className="p-2 rounded-lg text-black hover:bg-white/10"
          >
            <X size={20} />
          </button>
        </div>
        <nav className="flex-1 p-2 flex flex-col gap-1 mt-2 overflow-y-auto">
          <p className="text-[10px] uppercase tracking-widest px-2 pb-1">
            menú
          </p>
          {navItems.map(item => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) =>
                `w-full text-left px-3 py-3 rounded-lg text-sm transition-colors ${
                  isActive
                    ? "bg-primary text-black font-medium"
                    : "text-gray-500 hover:bg-white/10"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </aside>

      <aside
        className={`md:hidden fixed top-0 right-0 z-50 h-full w-80 max-w-[90%] bg-background flex flex-col transition-transform duration-300 ${
          cartOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-white">
          <h2 className="font-heading text-lg text-primary-dark">Mi pedido</h2>
          <button
            onClick={() => setCartOpen(false)}
            aria-label="Cerrar carrito"
            className="p-2 rounded-lg text-gray-500 hover:bg-gray-100"
          >
            <X size={20} />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto p-4">
          <Cart />
        </div>
      </aside>
    </>
  )
}
