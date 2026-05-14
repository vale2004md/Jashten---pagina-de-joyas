import { useState } from "react"
import { Sidebar } from "./components/Sidebar"
import { Home } from "./components/pages/Home"
import { Productos } from "./components/pages/Productos"
import { Medidas } from "./components/pages/Medidas"
import { Politicas } from "./components/pages/Politicas"
import { CompramosOro } from "./components/pages/CompramosOro"
import { Nosotros } from "./components/pages/Nosotros"
import { useCart } from "./components/cart/useCart"

type Page = "home" | "productos" | "medidas" | "politicas" | "oro" | "nosotros"

function App() {
  const [page, setPage] = useState<Page>("home")
  const { items, add, update, total, totalItems, msjWpp } = useCart()

  const cartProps = { items, total, totalItems, update, msjWpp }

  const renderPage = () => {
    switch (page) {
      case "home":      return <Home onAgregar={add} />
      case "productos": return <Productos onAgregar={add} />
      case "medidas":   return <Medidas />
      case "politicas": return <Politicas />
      case "oro":       return <CompramosOro />
      case "nosotros":  return <Nosotros />
    }
  }

  return (
    <div className="flex min-h-screen bg-background font-body">
      <Sidebar
        currentPage={page}
        onNavigate={setPage}
        {...cartProps}
      />
      <main className="flex-1 overflow-y-auto">
        {renderPage()}
      </main>
    </div>
  )
}

export default App