import { TELEFONO } from "../../config"

export function Nosotros() {
  return (
    <div className="flex flex-col flex-1">
      <div className="bg-background px-6 py-5 border-b border-gray-100">
        <h1 className="font-heading text-2xl text-primary-dark mb-1">Quiénes somos</h1>
        <p className="text-sm text-gray-500">un negocio familiar que empezó en el año 1978</p>
      </div>

      <div className="p-6 flex flex-col gap-4">
        <div className="bg-background rounded-xl p-4">
            <h3 className="text-sm font-medium text-primary-dark mb-2">Nuestra historia</h3>
            <p className="text-sm text-gray-500 leading-relaxed">
                Jashten Joyas nació con un jovencito diseñador (MAH) Ó PATOJO COMO LO APODABAN EL amaba diseñar joyas 💎 y plasmarlas en oro 18k , Ó en platino estaban hechas a base de filigramas achuras piedras naturales brillantes perlas de cultivo y otras variaciones más..
            </p>
            <p className="text-sm text-gray-500 leading-relaxed">
                Su maestro un Joyero extraordinario A quién apodaban pajarito y su Socio Miguel, lo llevaron como su alumno al taller donde fabricaban en el pasaje Santa Rosa...
            </p>
            <p className="text-sm text-gray-500 leading-relaxed">
                Pajarito se dedico a enseñarle con esmero..
            </p>
            <p className="text-sm text-gray-500 leading-relaxed">
                Un buen día cuando entraba a su trabajo muy tempranito le dijo: muchacho me gusta lo humilde que sos, no cambies nunca además sos habilidoso le dijo, No te importa en qué trabajar, cualquier trabajo, lo cumplis con alegria y dedicación.. Eso es bueno Me gustan tus cualidades yo te voy a enseñar .. Y así fue desde aquel entonces se convirtió en un hijo para él, para el maestro pajarito cómo lo llamaban todos.
            </p>
            <p className="text-sm text-gray-500 leading-relaxed">
                El Maestro Pajarito le enseñó todo lo que sabía..
            </p>
            <p className="text-sm text-gray-500 leading-relaxed">
                "Siempre le decía que en el arte de la joyería jamás se terminaba de aprender y efectivamente así lo pudo comprobar.. PATOJO Este joven Joyero Trabajo como ENGÁRZADOR, DISEÑADOR , PLASMADOR Y CREADOR DE JOYAS para varias empresas grandes, las cuales obtuvieron prestigio gracias a su trabajo y diseño..
            </p>
            <p className="text-sm text-gray-500 leading-relaxed">
                Un par de años después tuvo su primer taller de fabricación al que llamaron MyL ROSA DE FRANCIA este taller fue puesto en sociedad con su hermano quién tuvo la habilidad de aprender muy bien el rubro de las joyería K H.
            </p>
            <p className="text-sm text-gray-500 leading-relaxed">
                Un par de años después terminó de enseñarles a sus otros hermanos los cuales también se pusieron su propio taller de fabricación entre ellos también se destacó Sixto quién también aprendió a diseñar y así sucesivamente toda la familia empezó su cadena de Joyería..... continuando más tarde el mismo ejemplo los hijos de ellos..
            </p>
            <p className="text-sm text-gray-500 leading-relaxed">
                A través de los años Tuvo muchos alumnos muy buenos quienes también abrieron sus negocios. y/o trabajan en algunas empresas...
            </p>
            <p className="text-sm text-gray-500 leading-relaxed">
                PATOJO maestro de todas estas generaciones y fundador de " ROSA DE FRANCIA.. de . " TALLERES LA ROSA" de ""JUMALÚT" y OTROS, nace también "JASHTEN" una pequeña ramita de estos grandes JOYEROS..
            </p>
             <p className="text-sm text-gray-500 leading-relaxed">
                distribuidos por diferentes países de latinoamérica.
            </p>
             <p className="text-sm text-gray-500 leading-relaxed">
                CON TODA ESTA EXPERIENCIA FABRICAMOS JOYAS de ALTA CALIDAD..
            </p>
             <p className="text-sm text-gray-500 leading-relaxed">
                Cabe recalcar que siendo líderes en el rubro priorizamos la satisfacción del cliente en su elección por las JOYAS

            </p>
             <p className="text-sm text-gray-500 leading-relaxed">
                Ya sean personalizadas ó por las de stock, estamos conscientes de que cada persona es única y que cuando se adquiere una joya es para un regalo propio o para dársela a alguien especial que se quiere mucho..
            </p>
            <p className="text-sm text-gray-500 leading-relaxed">
                Sus joyas pueden estar fabricadas en Plata 935 | ORO 18 kilates | Plata con oro | Platino.
            </p>
             <p className="text-sm text-gray-500 leading-relaxed">
                Ofrecemos una amplia variedad de piezas que cautivan y enamoran , lo cual es la ocasión para un regalo perfecto que demuestre a la persona amor , emoción y que además perdura el tiempo.
            </p>
            <p className="text-sm text-gray-500 leading-relaxed">
                Ante cualquier duda o inquietud no dudes en contactarnos al WhatsApp{" "}
                <a
                    href={`https://wa.me/${TELEFONO}`}
                    target="_blank"
                    rel="noreferrer"
                    className="text-primary-dark underline"
                >
                    (011) 2770-3018
                </a>
            </p>
            <p className="text-sm text-gray-500 leading-relaxed">Muchas gracias por elegirnos que disfrutes de nuestra tienda online..
            </p>
        </div>


        <div className="grid">
          {[
            {  nombre: "Jashten", rol: "Producción y atención" },
          ].map(p => (
            <div key={p.nombre} className="bg-background rounded-xl p-4 text-center">
              <p className="text-sm font-medium text-dark">{p.nombre}</p>
              <p className="text-xs text-gray-400">{p.rol}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}