import Link from "next/link";
import Image from "next/image";

const experiences = [
  {
    icon: "🏫",
    category: "Educación",
    title: "Clínicas y Clases",
    desc: "Aprende las técnicas básicas y avanzadas de mountain bike con instructores certificados. Desde cómo manejar una bici de manera segura hasta técnicas de descenso avanzado.",
    features: [
      "Clínicas de técnica básica (para principiantes)",
      "Clínicas de saltos y drops",
      "Técnica en terreno técnico (skinnies, drops)",
      "Grupos pequeños para atención personalizada",
      "Material de seguridad incluido",
    ],
    available: true,
  },
  {
    icon: "🏆",
    category: "Competencia",
    title: "Eventos y Competencias",
    desc: "Cardo Santo es sede de competencias de Enduro, DH y eventos de la comunidad MTB del Estado de México y CDMX. Mantente al pendiente de la próxima fecha.",
    features: [
      "Enduro Series",
      "Competencias de Descenso (DH)",
      "Eventos recreativos para todos los niveles",
      "Premios y reconocimientos",
      "Transmisión en vivo por Instagram",
    ],
    available: true,
  },
  {
    icon: "👥",
    category: "Grupos",
    title: "Grupos y Escuelas",
    desc: "¿Team de trabajo, escuela o grupo de amigos? Organizamos días privados para grupos con trails exclusivos, guía incluido y atención especial en restaurante.",
    features: [
      "Entrada y trail privado para el grupo",
      "Guía de trails incluido",
      "Paquete de restaurante con descuento",
      "Área de campamento opcional",
      "Cupo mínimo 10 personas",
    ],
    cta: { href: "/tarifas#grupos", label: "Cotizar para mi grupo" },
    available: true,
  },
  {
    icon: "🎉",
    category: "Especiales",
    title: "Fechas Especiales",
    desc: "Desde cumplebikes hasta despedidas de soltero en el bosque. Organizamos la experiencia MTB más chida para tu fecha especial.",
    features: [
      "Cumplebikes personalizados",
      "Día privado en el parque",
      "Decoración opcional",
      "Paquete comida + trails",
      "Foto y video incluidos (paquete premium)",
    ],
    cta: { href: "/tarifas#especiales", label: "Agendar fecha especial" },
    available: false,
    comingSoon: "Próximamente",
  },
];

const upcomingEvents = [
  {
    date: "Próximo evento",
    name: "Enduro La Marquesa 2025",
    desc: "Categorías Open y Masters. Inscripciones abiertas próximamente.",
    status: "Próximamente",
  },
  {
    date: "Fin de semana",
    name: "Clínica de Drops y Saltos",
    desc: "Aprende la técnica correcta con instructores. Cupo limitado.",
    status: "Próximamente",
  },
];

export default function ExperienciasPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative bg-pine pt-32 pb-20 px-4 overflow-hidden">
        <Image
          src="/img/acampar.jpg"
          alt="Cardo Santo Bike Ranch - campamento en el bosque"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-pine/75" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <p className="text-lime font-medium uppercase tracking-widest text-sm mb-3">
            Más que pedalear
          </p>
          <h1
            className="text-cream font-title font-bold text-5xl sm:text-6xl md:text-7xl uppercase mb-6"
            style={{ fontFamily: "var(--font-title)" }}
          >
            Experiencias
          </h1>
          <p className="text-cream/70 text-lg leading-relaxed max-w-2xl mx-auto">
            Clínicas, competencias, eventos para grupos y mucho más. Cardo Santo es un destino de
            comunidad MTB, no solo un parque de trails.
          </p>
        </div>
      </section>

      {/* EXPERIENCES GRID */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {experiences.map((exp) => (
              <div
                key={exp.title}
                className={`bg-white rounded-xl p-8 shadow-sm border flex flex-col ${
                  exp.comingSoon ? "border-cream-dark opacity-75" : "border-cream-dark hover:shadow-md"
                } transition-shadow`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className="text-lime text-xs font-bold uppercase tracking-widest">
                      {exp.category}
                    </span>
                    <h2
                      className="text-pine font-title font-bold text-2xl uppercase mt-1"
                      style={{ fontFamily: "var(--font-title)" }}
                    >
                      {exp.title}
                    </h2>
                  </div>
                  <span className="text-4xl">{exp.icon}</span>
                </div>

                <p className="text-pine/70 text-sm leading-relaxed mb-5 flex-1">{exp.desc}</p>

                <ul className="space-y-2 mb-6">
                  {exp.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-2 text-sm text-pine/70">
                      <span className="text-lime mt-0.5 flex-shrink-0">✓</span>
                      {feat}
                    </li>
                  ))}
                </ul>

                {exp.comingSoon ? (
                  <span className="inline-block bg-cream-dark text-pine/50 px-4 py-2 rounded font-medium text-sm text-center">
                    {exp.comingSoon}
                  </span>
                ) : exp.cta ? (
                  <Link
                    href={exp.cta.href}
                    className="inline-block bg-lime text-pine px-4 py-2 rounded font-bold text-sm uppercase tracking-wider hover:bg-lime-dark transition-colors text-center"
                  >
                    {exp.cta.label}
                  </Link>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRÓXIMOS EVENTOS */}
      <section className="py-20 bg-pine">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2
              className="text-cream font-title font-bold text-4xl md:text-5xl uppercase"
              style={{ fontFamily: "var(--font-title)" }}
            >
              Próximos Eventos
            </h2>
            <p className="text-cream/60 mt-2">Síguenos en Instagram para no perderte ninguno.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {upcomingEvents.map((event) => (
              <div
                key={event.name}
                className="bg-pine-light rounded-xl p-6 border border-lime/20"
              >
                <span className="text-lime text-xs font-bold uppercase tracking-widest">
                  {event.date}
                </span>
                <h3
                  className="text-cream font-title font-bold text-xl uppercase mt-1 mb-2"
                  style={{ fontFamily: "var(--font-title)" }}
                >
                  {event.name}
                </h3>
                <p className="text-cream/60 text-sm">{event.desc}</p>
                <span className="inline-block mt-4 text-xs bg-lime/10 text-lime border border-lime/20 px-2 py-1 rounded">
                  {event.status}
                </span>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <a
              href="https://www.instagram.com/cardosantobikeranch/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-lime text-lime px-6 py-3 rounded font-bold uppercase tracking-wider hover:bg-lime hover:text-pine transition-colors"
            >
              Seguir en Instagram para actualizaciones →
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
