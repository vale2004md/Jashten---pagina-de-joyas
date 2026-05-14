import Papa from "papaparse"
import type { Product } from "../types"

const SHEET_URL =
  "https://docs.google.com/spreadsheets/d/1WmLOdo2t2oUhhOJek112kDfHAwSih3mVRAGOElrNaCo/export?format=csv"

export async function getProductos(): Promise<Product[]> {
  const response = await fetch(SHEET_URL)

  const csv = await response.text()

  const parsed = Papa.parse(csv, {
    header: true,
    skipEmptyLines: true,
  })

  return parsed.data.map((p: any) => ({
    id: p.id,
    nombre: p.nombre,
    categoria: p.categoria,
    precio: p.precio ? Number(p.precio) : null,
    ley: p.ley,
    activo:
      p.activo === "TRUE" ||
      p.activo === "true",
    foto: p.foto,
    descripcion: p.descripcion || "",
  }))
}