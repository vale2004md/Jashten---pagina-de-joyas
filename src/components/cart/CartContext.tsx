import { createContext, useContext, useEffect, useState } from "react"
import type { ReactNode } from "react"
import type { Product } from "../../types"

export interface CartItem {
  product: Product
  quantity: number
}

interface CartContextValue {
  items: CartItem[]
  add: (product: Product) => void
  update: (id: string, delta: number) => void
  total: () => number
  totalItems: () => number
  msjWpp: (phone: string) => string
}

const STORAGE_KEY = "jashten:cart"

const CartContext = createContext<CartContextValue | null>(null)

function readStorage(): CartItem[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? (JSON.parse(raw) as CartItem[]) : []
  } catch {
    return []
  }
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>(readStorage)

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
  }, [items])

  function add(product: Product) {
    setItems(prev => {
      const existing = prev.find(i => i.product.id === product.id)
      if (existing) {
        return prev.map(i =>
          i.product.id === product.id ? { ...i, quantity: i.quantity + 1 } : i
        )
      }
      return [...prev, { product, quantity: 1 }]
    })
  }

  function update(id: string, delta: number) {
    setItems(prev =>
      prev
        .map(i => (i.product.id === id ? { ...i, quantity: i.quantity + delta } : i))
        .filter(i => i.quantity > 0)
    )
  }

  function total() {
    return items.reduce((s, i) => s + (i.product.precio ?? 0) * i.quantity, 0)
  }

  function totalItems() {
    return items.reduce((s, i) => s + i.quantity, 0)
  }

  function msjWpp(phone: string) {
    const lines = items
      .map(
        i =>
          `• ${i.product.nombre} x${i.quantity} = $${(
            (i.product.precio ?? 0) * i.quantity
          ).toLocaleString("es-AR")}`
      )
      .join("\n")

    const msg = `Hola Jashten Joyas! Quiero hacer un pedido:\n\n${lines}\n\n*Total: $${total().toLocaleString("es-AR")}*`

    return `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`
  }

  return (
    <CartContext.Provider value={{ items, add, update, total, totalItems, msjWpp }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error("useCart debe usarse dentro de <CartProvider>")
  return ctx
}
