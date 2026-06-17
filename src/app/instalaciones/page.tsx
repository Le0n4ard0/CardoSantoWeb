import Link from "next/link";

const facilities = [
  {
    icon: "🍽️",
    title: "Restaurante",
    desc: "Después de rodar, recupérate con comida casera en nuestro restaurante. Desayunos, comidas y snacks. Perfectamente ubicado al centro del parque.",
    features: ["Desayunos y comidas", "Bebidas frías y calientes", "Área techada con vistas al bosque", "Menú variado para ciclistas"],
  },
  {
    icon: "🏕️",
    title: "Área de Campamento",
    desc: "Pasa la noche bajo las estrellas en el corazón del bosque de La Marquesa. Ideal para grupos que quieren aprovechar el fin de semana al máximo.",
    features: ["Zona de casas de campaña", "Baños y sanitarios", "Fogata permitida en área designada", "Seguridad nocturna"],
    cta: { href: "/tarifas#campamento", label: "Reservar campamento" },
  },
  {
    icon: "🚗",
    title: "Estacionamiento",
    desc: "Amplio estacionamiento con vigilancia. Suficiente espacio para autos con portabicicletas y vans de grupos.",
    features: ["Capacidad amplia", "Vigilancia durante horario de operación", "Acceso para van y remolques", "Gratuito para visitantes"],
  },
  {
    icon: "🔧",
    title: "Área de Mecánica",
    desc: "¿Ponchazo? ¿Cadena suelta? Contamos con un área básica para que ajustes tu bici antes o después de rodar.",
    features: ["Bombas de aire", "Herramienta básica disponible", "Stand para bicicletas", "Consulta disponibilidad de renta"],
  },
  {
    icon: "🏠",
    title: "Acceso y Entrada",
    desc: "La entrada principal está señalizada desde la carretera federal de La Marquesa. Acceso pavimentado hasta el parque.",
    features: ["Señalización desde carretera", "Acceso pavimentado", "Recepción y pago en taquilla", "Personal de bienvenida"],
  },
  {
    icon: "🌲",
    title: "Entorno Natural",
    desc: "Inmerso en el Bosque de La Marquesa, a 2,800 msnm. Clima fresco todo el año, aire puro y vistas espectaculares.",
    features: ["2,800 msnm", "Clima templado-frío", "Bosque de pino y oyamel", "Fauna local"],
  },
];

export default function InstalacionesPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-pine pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lime font-medium uppercase tracking-widest text-sm mb-3">El parque</p>
          <h1
            className="text-cream font-title font-bold text-5xl sm:text-6xl md:text-7xl uppercase mb-6"
            style={{ fontFamily: "var(--font-title)" }}
          >
            Instalaciones
          </h1>
          <p className="text-cream/70 text-lg leading-relaxed max-w-2xl mx-auto">
            Más que un bike park. Un destino completo para pasar el día o el fin de semana en el
            bosque con todo lo que necesitas.
          </p>
        </div>
      </section>

      {/* GRID DE INSTALACIONES */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilities.map((f) => (
              <div
                key={f.title}
                className="bg-white rounded-xl p-8 shadow-sm border border-cream-dark hover:shadow-md transition-shadow flex flex-col"
              >
                <span className="text-5xl mb-5 block">{f.icon}</span>
                <h2
                  className="text-pine font-title font-bold text-2xl uppercase mb-3"
                  style={{ fontFamily: "var(--font-title)" }}
                >
                  {f.title}
                </h2>
                <p className="text-pine/70 text-sm leading-relaxed mb-5 flex-1">{f.desc}</p>
                <ul className="space-y-2 mb-5">
                  {f.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-2 text-sm text-pine/70">
                      <span className="text-lime mt-0.5 flex-shrink-0">✓</span>
                      {feat}
                    </li>
                  ))}
                </ul>
                {f.cta && (
                  <Link
                    href={f.cta.href}
                    className="inline-block bg-lime text-pine px-4 py-2 rounded font-bold text-sm uppercase tracking-wider hover:bg-lime-dark transition-colors text-center"
                  >
                    {f.cta.label}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BOTTOM */}
      <section className="py-16 bg-earth">
        <div className="max-w-3xl mx-auto text-center px-4">
          <h2
            className="text-cream font-title font-bold text-4xl md:text-5xl uppercase mb-4"
            style={{ fontFamily: "var(--font-title)" }}
          >
            Ven y vívelo
          </h2>
          <p className="text-cream/70 mb-8 leading-relaxed">
            Cardo Santo Bike Ranch está abierto desde 2023 y cada temporada seguimos mejorando. Síguenos
            en Instagram para ver las últimas novedades.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/tarifas"
              className="bg-lime text-pine px-8 py-4 rounded font-bold text-lg uppercase tracking-wider hover:bg-lime-dark transition-colors"
            >
              Ver tarifas
            </Link>
            <Link
              href="/como-llegar"
              className="border-2 border-cream text-cream px-8 py-4 rounded font-bold text-lg uppercase tracking-wider hover:bg-cream hover:text-pine transition-colors"
            >
              Cómo llegar
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
