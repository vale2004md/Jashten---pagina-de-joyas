export interface Product {
  id: string
  nombre: string
  categoria: string
  precio: number | null
  ley: string
  activo: boolean
  foto: string
  descripcion?: string
}
