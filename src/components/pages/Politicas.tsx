export function Politicas() {
  const secciones = [
    {
      titulo: "Cambios",
      items: [
        "Aceptamos cambios dentro de los 15 días de recibido el producto.",
        "El artículo debe estar sin usar, en su empaque original.",
        "Los cambios de talle de anillos tienen un costo de ajuste.",
        "Diseños personalizados no tienen cambio salvo defecto de fabricación.",
      ]
    },
    {
      titulo: "Devoluciones",
      items: [
        "Devoluciones aceptadas hasta 7 días después de la entrega.",
        "El producto no debe presentar signos de uso.",
        "El reintegro se realiza por el mismo medio de pago en 5 a 10 días hábiles.",
      ]
    },
    {
      titulo: "Garantía",
      items: [
        "Todos nuestros productos tienen garantía de 90 días por defectos de fabricación.",
        "Ante cualquier inconveniente, contactanos por WhatsApp.",
      ]
    },
  ]

  return (
    <div className="flex flex-col flex-1">
      <div className="bg-background px-6 py-5 border-b border-gray-100">
        <h1 className="font-heading text-2xl text-primary-dark mb-1">
          Políticas de cambio y devolución
        </h1>
        <p className="text-sm text-gray-500">Tu satisfacción es nuestra prioridad</p>
      </div>

      <div className="p-6 flex flex-col gap-4">
        {secciones.map(s => (
          <div key={s.titulo} className="bg-background rounded-xl p-4">
            <h3 className="text-sm font-medium text-primary-dark mb-3">{s.titulo}</h3>
            <ul className="flex flex-col gap-2">
              {s.items.map((item, i) => (
                <li key={i} className="flex gap-2 text-sm text-gray-500">
                  <span className="text-primary mt-0.5">·</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}