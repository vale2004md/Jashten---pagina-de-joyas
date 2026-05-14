import type { Product } from "../types"
import { TELEFONO } from "../config"
import { useCart } from "./cart/CartContext"

interface Props {
  product: Product
}

export function ProductCard({ product: p }: Props) {
  const { add } = useCart()

  return (
    <div className="bg-white border border-gray-100 rounded-xl p-4 hover:border-primary transition-colors">
      <div className="w-full bg-background rounded-lg mb-3 overflow-hidden flex items-center justify-center p-2">
        <img
          src={p.foto}
          alt={p.nombre}
          className="w-full h-40 object-contain"
          onError={e => (e.currentTarget.src = "/logo.png")}
        />
      </div>
      <p className="text-sm font-medium text-dark mb-1">{p.nombre}</p>
      <p className="text-xs text-gray-400 mb-3">{p.categoria} · {p.ley}</p>
      <p className="text-sm font-medium text-primary-dark mb-3">
        {p.precio ? `$${p.precio.toLocaleString("es-AR")}` : "Consultar"}
      </p>
      {p.precio ? (
        <button
          onClick={() => add(p)}
          className="w-full py-1.5 border border-primary text-primary text-xs rounded-lg hover:bg-background transition-colors"
        >
          + Agregar
        </button>
      ) : (
        <a
          href={`https://wa.me/${TELEFONO}?text=${encodeURIComponent(`Hola! Me interesa: ${p.nombre}`)}`}
          target="_blank"
          rel="noreferrer"
          className="block w-full py-1.5 border border-primary text-primary text-xs rounded-lg hover:bg-background transition-colors text-center"
        >
          Consultar
        </a>
      )}
    </div>
  )
}
