import { useMemo, useState } from "react"
import productos from "../../data/productos.json"
import type { Product } from "../../types"
import { ProductCard } from "../ProductCard"

export function Productos() {
  const [categoria, setCategoria] = useState("Todos")

  const activos = useMemo(
    () => (productos as Product[]).filter(p => p.activo),
    []
  )

  const categorias = useMemo(
    () => ["Todos", ...Array.from(new Set(activos.map(p => p.categoria)))],
    [activos]
  )

  const filtrados =
    categoria === "Todos" ? activos : activos.filter(p => p.categoria === categoria)

  return (
    <div className="flex flex-col flex-1">
      <div className="bg-background px-6 py-5 border-b border-gray-100">
        <h1 className="font-heading text-2xl text-primary-dark mb-1">Productos</h1>
        <p className="text-sm text-gray-500">Toda nuestra colección</p>
      </div>

      <div className="p-6">
        <div className="flex gap-2 flex-wrap mb-6">
          {categorias.map(c => (
            <button
              key={c}
              onClick={() => setCategoria(c)}
              className={`px-3 py-1 rounded-full text-xs border transition-colors
                ${categoria === c
                  ? "bg-primary-dark text-white border-primary-dark"
                  : "border-gray-200 text-gray-500 hover:border-primary"
                }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtrados.map(p => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </div>
  )
}
