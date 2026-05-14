import { useState } from "react"
import productos from "../../data/productos.json"
import type { Product } from "../../types"
import { TELEFONO } from "../../config"
import { useCart } from "../cart/CartContext"

const CATEGORIAS = ["Todos", "Anillos", "Alianzas", "Collares", "Aros", "Pulseras", "Tobilleras", "Dijes", "Conjuntos", "Personalizado"]

export function Productos() {
  const { add } = useCart()
  const [categoria, setCategoria] = useState("Todos")

  const filtrados = (productos as Product[])
    .filter(p => p.activo)
    .filter(p => categoria === "Todos" || p.categoria === categoria)

  return (
    <div className="flex flex-col flex-1">
      <div className="bg-background px-6 py-5 border-b border-gray-100">
        <h1 className="font-heading text-2xl text-primary-dark mb-1">Productos</h1>
        <p className="text-sm text-gray-500">Toda nuestra colección</p>
      </div>

      <div className="p-6">
        <div className="flex gap-2 flex-wrap mb-6">
          {CATEGORIAS.map(c => (
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

        <div className="grid grid-cols-2 gap-4">
          {filtrados.map(p => (
            <div
              key={p.id}
              className="bg-white border border-gray-100 rounded-xl p-4 hover:border-primary transition-colors"
            >
              <div className="w-full bg-background rounded-lg mb-3 overflow-hidden flex items-center justify-center p-2">
                <img
                  src={p.foto}
                  alt={p.nombre}
                  className="w-full h-40 object-contain"
                  onError={e => (e.currentTarget.src = "/joyas/img/logo.png")}
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
          ))}
        </div>
      </div>
    </div>
  )
}
