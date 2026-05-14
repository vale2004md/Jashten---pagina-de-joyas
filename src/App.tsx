import { Routes, Route, Navigate } from "react-router-dom"
import { Sidebar } from "./components/Sidebar"
import { Home } from "./components/pages/Home"
import { Productos } from "./components/pages/Productos"
import { Medidas } from "./components/pages/Medidas"
import { Politicas } from "./components/pages/Politicas"
import { CompramosOro } from "./components/pages/CompramosOro"
import { Nosotros } from "./components/pages/Nosotros"
import { useCart } from "./components/cart/useCart"

function App() {
  const { items, add, update, total, totalItems, msjWpp } = useCart()

  return (
    <div className="flex min-h-screen bg-background font-body">
      <Sidebar
        items={items}
        total={total}
        totalItems={totalItems}
        update={update}
        msjWpp={msjWpp}
      />
      <main className="flex-1 overflow-y-auto">
        <Routes>
          <Route path="/" element={<Home onAgregar={add} />} />
          <Route path="/productos" element={<Productos onAgregar={add} />} />
          <Route path="/medidas" element={<Medidas />} />
          <Route path="/politicas" element={<Politicas />} />
          <Route path="/oro" element={<CompramosOro />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
