export function CompramosOro() {
  return (
    <div className="flex flex-col flex-1">
      <div className="bg-background px-6 py-5 border-b border-gray-100">
        <h1 className="font-heading text-2xl text-primary-dark mb-1">Compramos tu oro</h1>
        <p className="text-sm text-gray-500">Mejor precio del mercado · Pago inmediato</p>
      </div>

      <div className="p-6 flex flex-col gap-6">
        <div className="grid grid-cols-3 gap-3">
          {[
            { num: "1", txt: "Traé tus piezas" },
            { num: "2", txt: "Las tasamos gratis" },
            { num: "3", txt: "Te pagamos al instante" },
          ].map(s => (
            <div key={s.num} className="bg-background rounded-xl p-4 text-center">
              <p className="text-2xl font-medium text-primary mb-2">{s.num}</p>
              <p className="text-xs text-primary-dark">{s.txt}</p>
            </div>
          ))}
        </div>

        <div className="bg-background rounded-xl p-4">
          <h3 className="text-sm font-medium text-primary-dark mb-3">¿Qué compramos?</h3>
          <ul className="flex flex-col gap-2">
            {[
              "Oro 9k, 14k, 18k y 24k",
              "Alhajas, monedas, lingotes y chatarra de oro",
              "Plata en cualquier ley",
              "Joyas rotas o sin uso",
            ].map((item, i) => (
              <li key={i} className="flex gap-2 text-sm text-gray-500">
                <span className="text-primary mt-0.5">·</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-background rounded-xl p-4">
          <h3 className="text-sm font-medium text-primary-dark mb-2">¿Por qué elegirnos?</h3>
          <p className="text-sm text-gray-500 leading-relaxed">
            Tasación transparente, precio actualizado al valor del día y pago en efectivo
            o transferencia inmediata. Sin compromiso.
          </p>
        </div>
      </div>
    </div>
  )
}