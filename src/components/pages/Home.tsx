import productos from "../../data/productos.json"
import type { Product } from "../../types"
import { ProductCard } from "../ProductCard"

export function Home() {
  const destacados = (productos as Product[]).filter(p => p.activo).slice(0, 4)

  return (
    <div className="flex flex-col flex-1">
      <div className="bg-background px-6 py-5 border-b border-gray-100">
        <h1 className="font-heading text-2xl text-primary-dark mb-1">
          Bienvenida a Jashten Joyas
        </h1>
        <p className="text-sm text-gray-500">
          Joyas únicas hechas con amor · Envíos a todo el país
        </p>
      </div>

      <div className="p-6">
        <p className="text-xs text-gray-400 uppercase tracking-widest mb-4">
          Destacados
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {destacados.map(p => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </div>
  )
}
