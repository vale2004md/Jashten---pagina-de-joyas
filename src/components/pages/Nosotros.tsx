import { TELEFONO } from "../../config"

const parrafos: string[] = [
  "Jashten Joyas nació con un jovencito diseñador (MAH) o Patojo, como lo apodaban. Él amaba diseñar joyas 💎 y plasmarlas en oro 18k, o en platino, hechas a base de filigranas, hechuras, piedras naturales, brillantes, perlas de cultivo y otras variaciones más.",
  "Su maestro, un joyero extraordinario a quien apodaban Pajarito, y su socio Miguel lo llevaron como su alumno al taller donde fabricaban en el pasaje Santa Rosa.",
  "Pajarito se dedicó a enseñarle con esmero.",
  "Un buen día, cuando entraba a su trabajo muy tempranito, le dijo: \"Muchacho, me gusta lo humilde que sos, no cambies nunca. Además sos habilidoso. No te importa en qué trabajar: cualquier trabajo lo cumplís con alegría y dedicación. Eso es bueno, me gustan tus cualidades. Yo te voy a enseñar\". Y así fue: desde aquel entonces se convirtió en un hijo para él, para el maestro Pajarito, como lo llamaban todos.",
  "El maestro Pajarito le enseñó todo lo que sabía.",
  "Siempre le decía que en el arte de la joyería jamás se terminaba de aprender, y efectivamente así lo pudo comprobar. Patojo, este joven joyero, trabajó como engarzador, diseñador, plasmador y creador de joyas para varias empresas grandes, las cuales obtuvieron prestigio gracias a su trabajo y diseño.",
  "Un par de años después tuvo su primer taller de fabricación, al que llamaron \"MyL Rosa de Francia\". Este taller fue puesto en sociedad con su hermano, quien tuvo la habilidad de aprender muy bien el rubro de la joyería, KH.",
  "Un par de años después terminó de enseñarles a sus otros hermanos, los cuales también pusieron su propio taller de fabricación. Entre ellos también se destacó Sixto, quien también aprendió a diseñar, y así sucesivamente toda la familia empezó su cadena de joyería, continuando más tarde el mismo ejemplo los hijos de ellos.",
  "A través de los años tuvo muchos alumnos muy buenos, quienes también abrieron sus negocios y/o trabajan en algunas empresas.",
  "Patojo, maestro de todas estas generaciones y fundador de \"Rosa de Francia\", \"Talleres La Rosa\", \"Jumalút\" y otros, nace también \"Jashten\", una pequeña ramita de estos grandes joyeros.",
  "Distribuidos por diferentes países de Latinoamérica.",
  "Con toda esta experiencia fabricamos joyas de alta calidad.",
  "Cabe recalcar que, siendo líderes en el rubro, priorizamos la satisfacción del cliente en su elección por las joyas.",
  "Ya sean personalizadas o por las de stock, estamos conscientes de que cada persona es única, y que cuando se adquiere una joya es para un regalo propio o para dársela a alguien especial que se quiere mucho.",
  "Sus joyas pueden estar fabricadas en Plata 935, oro 18 quilates, plata con oro o platino.",
  "Ofrecemos una amplia variedad de piezas que cautivan y enamoran, la ocasión para un regalo perfecto que demuestre a la persona amor, emoción y que además perdura en el tiempo.",
]

export function Nosotros() {
  return (
    <div className="flex flex-col flex-1">
      <div className="bg-background px-6 py-5 border-b border-gray-100">
        <h1 className="font-heading text-2xl text-primary-dark mb-1">Quiénes somos</h1>
        <p className="text-sm text-gray-500">Un negocio familiar que empezó en el año 1978</p>
      </div>

      <div className="p-6 flex flex-col gap-4">
        <div className="bg-background rounded-xl p-4 flex flex-col gap-3">
          <h3 className="text-sm font-medium text-primary-dark">Nuestra historia</h3>
          {parrafos.map((texto, i) => (
            <p key={i} className="text-sm text-gray-500 leading-relaxed">
              {texto}
            </p>
          ))}

          <p className="text-sm text-gray-500 leading-relaxed">
            Ante cualquier duda o inquietud no dudes en contactarnos al WhatsApp{" "}
            <a
              href={`https://wa.me/${TELEFONO}`}
              target="_blank"
              rel="noreferrer"
              className="text-primary-dark underline"
            >
              (011) 2770-3018
            </a>.
          </p>
          <p className="text-sm text-gray-500 leading-relaxed">
            Muchas gracias por elegirnos. ¡Que disfrutes de nuestra tienda online!
          </p>
        </div>

        <div className="bg-background rounded-xl p-4 text-center">
          <p className="text-sm font-medium text-dark">Jashten</p>
          <p className="text-xs text-gray-400">Producción y atención</p>
        </div>
      </div>
    </div>
  )
}
