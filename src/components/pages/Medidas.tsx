export function Medidas() {
  return (
    <div className="flex flex-col flex-1">
      <div className="bg-background px-6 py-5 border-b border-gray-100">
        <h1 className="font-heading text-2xl text-primary-dark mb-1">Guía de medidas</h1>
        <p className="text-sm text-gray-500">Encontrá tu talle ideal</p>
      </div>

      <div className="p-6 flex flex-col gap-6">
        <div className="bg-background rounded-xl p-4">
          <h3 className="text-sm font-medium text-primary-dark mb-2">¿Cómo medir tu dedo?</h3>
          <p className="text-sm text-gray-500 leading-relaxed">
            Enrollá un papel alrededor del dedo, marcá donde se une y medí en milímetros.
            Consultá la tabla para encontrar tu número.
          </p>
        </div>

        <div>
          <p className="text-xs text-gray-400 uppercase tracking-widest mb-3">Anillos y alianzas</p>
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-background">
                <th className="text-left p-2 text-primary-dark font-medium">Número ARG</th>
                <th className="text-left p-2 text-primary-dark font-medium">Diámetro (mm)</th>
                <th className="text-left p-2 text-primary-dark font-medium">Circunferencia (mm)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {[
                ["10", "15.7", "49.3"],
                ["12", "16.5", "51.8"],
                ["14", "17.3", "54.4"],
                ["16", "18.2", "57.2"],
                ["18", "19.1", "59.9"],
                ["20", "19.8", "62.2"],
                ["22", "20.6", "64.7"],
              ].map(([num, diam, circ]) => (
                <tr key={num}>
                  <td className="p-2 text-dark">{num}</td>
                  <td className="p-2 text-dark">{diam}</td>
                  <td className="p-2 text-dark">{circ}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div>
          <p className="text-xs text-gray-400 uppercase tracking-widest mb-3">Pulseras y tobilleras</p>
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-background">
                <th className="text-left p-2 text-primary-dark font-medium">Talle</th>
                <th className="text-left p-2 text-primary-dark font-medium">Muñeca (cm)</th>
                <th className="text-left p-2 text-primary-dark font-medium">Tobillo (cm)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {[
                ["XS", "14 – 15", "19 – 20"],
                ["S",  "15 – 16", "20 – 21"],
                ["M",  "16 – 17", "21 – 22"],
                ["L",  "17 – 18", "22 – 23"],
                ["XL", "18 – 19", "23 – 25"],
              ].map(([talle, muneca, tobillo]) => (
                <tr key={talle}>
                  <td className="p-2 text-dark">{talle}</td>
                  <td className="p-2 text-dark">{muneca}</td>
                  <td className="p-2 text-dark">{tobillo}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}