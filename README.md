# Jashten Joyas

Sitio web de [Jashten Joyas](#), una joyería familiar con más de 40 años de historia. Catálogo online con carrito y checkout vía WhatsApp.

## Características

- Catálogo de joyas con filtro por categoría (anillos, alianzas, aros, collares, pulseras, tobilleras, dijes, conjuntos y diseños personalizados)
- Carrito persistente en `localStorage` (sobrevive recargas)
- Checkout por WhatsApp: arma el mensaje con los productos y total, y abre WhatsApp del local
- Páginas de información: guía de medidas, políticas de cambio, compra de oro y nuestra historia
- Diseño responsive con menú hamburguesa y carrito flotante en mobile
- Meta tags de OpenGraph para previews al compartir el link

## Stack

- React 19 + TypeScript
- Vite
- React Router v7
- Tailwind CSS 3
- Lucide React (íconos)

## Desarrollo

```bash
pnpm install
pnpm dev      # servidor de desarrollo en http://localhost:5173
pnpm build    # build de producción a dist/
pnpm preview  # previsualizar el build
pnpm lint     # ESLint
```

## Estructura

```
src/
├── App.tsx                       # rutas y layout principal
├── main.tsx                      # bootstrap con BrowserRouter + CartProvider
├── config.ts                     # constantes (teléfono, nombre del sitio)
├── data/productos.json           # catálogo de productos
├── types/index.ts                # tipos compartidos (Product)
└── components/
    ├── Sidebar.tsx               # navegación lateral (desktop)
    ├── MobileNav.tsx             # top bar + drawers (mobile)
    ├── ProductCard.tsx           # tarjeta de producto reutilizable
    ├── cart/
    │   ├── Cart.tsx              # UI del carrito
    │   └── CartContext.tsx       # provider + hook useCart con localStorage
    └── pages/                    # una página por ruta
```

## Configuración

El teléfono de WhatsApp y otros datos del negocio están centralizados en [`src/config.ts`](src/config.ts). Para cambiarlos, editá ese archivo.

Los productos viven en [`src/data/productos.json`](src/data/productos.json). Agregar/quitar productos no requiere tocar código: las categorías del filtro se derivan automáticamente del JSON.

## Deploy

Es una SPA: cualquier hosting estático (Vercel, Netlify, GitHub Pages) sirve. Asegurate de configurar el fallback a `index.html` para todas las rutas, así `/productos`, `/medidas`, etc. funcionan al recargar.
