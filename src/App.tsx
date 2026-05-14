import { Routes, Route, Navigate } from "react-router-dom"
import { Sidebar } from "./components/Sidebar"
import { MobileNav } from "./components/MobileNav"
import { Home } from "./components/pages/Home"
import { Productos } from "./components/pages/Productos"
import { Medidas } from "./components/pages/Medidas"
import { Politicas } from "./components/pages/Politicas"
import { CompramosOro } from "./components/pages/CompramosOro"
import { Nosotros } from "./components/pages/Nosotros"

function App() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-background font-body">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <MobileNav />
        <main className="flex-1 overflow-y-auto pb-24 md:pb-0">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/productos" element={<Productos />} />
            <Route path="/medidas" element={<Medidas />} />
            <Route path="/politicas" element={<Politicas />} />
            <Route path="/oro" element={<CompramosOro />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
      </div>
    </div>
  )
}

export default App
