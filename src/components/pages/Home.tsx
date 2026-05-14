import productos from "../../data/productos.json"
import type { Product } from "../../types"
import { TELEFONO } from "../../config"

interface Props {
  onAgregar: (product: Product) => void
}

export function Home({ onAgregar }: Props) {
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
        <div className="grid grid-cols-2 gap-4">
          {destacados.map(p => (
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
                  onClick={() => onAgregar(p)}
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