import { Cart } from "./cart/Cart"
import type { CartItem } from "./cart/useCart"

type Page = "home" | "productos" | "medidas" | "politicas" | "oro" | "nosotros"
interface Props {
  currentPage: Page
  onNavigate: (page: Page) => void
  items: CartItem[]
  total: () => number
  totalItems: () => number
  update: (id: string, delta: number) => void
  msjWpp: (phone: string) => string
}

const navItems: { id: Page; label: string }[] = [
  { id: "home",      label: "Inicio" },
  { id: "productos", label: "Productos" },
  { id: "medidas",   label: "Medidas" },
  { id: "politicas", label: "Políticas" },
  { id: "oro",       label: "Compramos oro" },
  { id: "nosotros",  label: "Quiénes somos" },
]

export function Sidebar({ currentPage, onNavigate, items, total, totalItems, update, msjWpp }: Props) {
  return (
    <aside className="w-52 min-h-screen bg-primary-dark flex flex-col flex-shrink-0">

        <div className="p-5 border-b border-white/10 flex justify-center">
            <img
                src="/logo.png"
                alt="Jashten Joyas"
                className="w-28 object-contain"
            />
        </div>

      {/* Nav */}
      <nav className="flex-1 p-2 flex flex-col gap-1 mt-2">
        <p className="text-[10px] text-primary-light/50 uppercase tracking-widest px-2 pb-1">
          menú
        </p>
        {navItems.map(item => (
          <button
            key={item.id}
            onClick={() => onNavigate(item.id)}
            className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors
              ${currentPage === item.id
                ? "bg-primary text-white font-medium"
                : "text-background hover:bg-white/10"
              }`}
          >
            {item.label}
          </button>
        ))}
      </nav>

      {/* Carrito */}
      <div className="p-2 pb-4">
        <p className="text-[10px] text-primary-light/50 uppercase tracking-widest px-2 pb-2">
          carrito
        </p>
        <Cart
          items={items}
          total={total}
          totalItems={totalItems}
          update={update}
          msjWpp={msjWpp}
        />
      </div>

    </aside>
  )
}