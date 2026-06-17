import Link from "next/link";

const trails = [
  {
    level: "verde",
    label: "Verde",
    emoji: "🟢",
    color: "bg-green-600",
    borderColor: "border-green-500/30",
    hoverBorder: "hover:border-green-500/60",
    tagColor: "bg-green-500/10 text-green-400 border-green-500/20",
    difficulty: "Principiante",
    type: "Flow",
    trails: [
      {
        name: "Entrada al Bosque",
        desc: "El trail perfecto para tu primera vez. Curvas suaves, terreno parejo y vistas al bosque.",
        tags: ["Flow", "Familiar", "Descenso suave"],
        distance: "1.2 km",
        drop: "45 m",
      },
      {
        name: "Pinos",
        desc: "Serpentea entre los pinos con berms bien construidos. Ideal para ganar confianza y velocidad.",
        tags: ["Berms", "Flow", "Sin saltos"],
        distance: "0.9 km",
        drop: "30 m",
      },
    ],
  },
  {
    level: "azul",
    label: "Azul",
    emoji: "🟦",
    color: "bg-blue-600",
    borderColor: "border-blue-500/30",
    hoverBorder: "hover:border-blue-500/60",
    tagColor: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    difficulty: "Intermedio",
    type: "Flow / Técnico",
    trails: [
      {
        name: "Tabaquillo",
        desc: "Curvas pronunciadas, switchbacks fluidos y un roadgap que te hará querer repetir. Ideal para mejorar técnica de giro.",
        tags: ["Switchbacks", "Roadgap", "Flow", "Curvas"],
        distance: "1.8 km",
        drop: "120 m",
      },
      {
        name: "Corredor de Piedras",
        desc: "Sección rocosa con líneas de elección. Aprende a leer el terreno y manejar sobre roca.",
        tags: ["Técnico", "Roca", "Líneas"],
        distance: "0.7 km",
        drop: "80 m",
      },
    ],
  },
  {
    level: "negro",
    label: "Negro",
    emoji: "⬛",
    color: "bg-gray-900",
    borderColor: "border-gray-400/30",
    hoverBorder: "hover:border-gray-400/60",
    tagColor: "bg-gray-500/10 text-gray-300 border-gray-500/20",
    difficulty: "Avanzado",
    type: "DH / Jump Line",
    trails: [
      {
        name: "Atlapulco Shore",
        desc: "Puentes, drops, skinnies y saltos. Una línea técnica que pone a prueba tus habilidades en el bosque de La Marquesa.",
        tags: ["Drops", "Skinnies", "Saltos", "Puentes"],
        distance: "1.4 km",
        drop: "180 m",
      },
      {
        name: "Jump Line",
        desc: "Sucesión de saltos tabletop y doubles. Perfecta para trabajar aire y estilo en un ambiente controlado.",
        tags: ["Tabletop", "Doubles", "Saltos", "Estilo"],
        distance: "0.5 km",
        drop: "60 m",
      },
    ],
  },
];

export default function TrailsPage() {
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
            Nuestros Trails
          </h1>
          <p className="text-cream/70 text-lg leading-relaxed max-w-2xl mx-auto">
            Desde verdes para principiantes hasta negros para los más técnicos. Todos construidos con
            amor por los hermanos De Ávila en el bosque de La Marquesa.
          </p>
        </div>
      </section>

      {/* FILTRO / LEYENDA */}
      <section className="bg-pine-light py-6 border-y border-lime/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-6">
            {trails.map((t) => (
              <div key={t.level} className="flex items-center gap-2 text-cream">
                <span className={`w-4 h-4 rounded-sm ${t.color}`} />
                <span className="text-sm font-medium">{t.label}</span>
                <span className="text-cream/40 text-xs">· {t.difficulty}</span>
              </div>
            ))}
            <span className="text-cream/40 text-xs hidden sm:block">|</span>
            <div className="text-cream/60 text-xs">DH · Flow · Jump Lines</div>
          </div>
        </div>
      </section>

      {/* TRAILS POR NIVEL */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {trails.map((level) => (
            <div key={level.level}>
              <div className="flex items-center gap-3 mb-8">
                <span className={`w-6 h-6 rounded ${level.color}`} />
                <h2
                  className="text-pine font-title font-bold text-4xl uppercase"
                  style={{ fontFamily: "var(--font-title)" }}
                >
                  {level.label} · {level.difficulty}
                </h2>
                <span className="text-pine/40 text-sm hidden sm:block">— {level.type}</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {level.trails.map((trail) => (
                  <div
                    key={trail.name}
                    className={`bg-white rounded-xl p-6 border ${level.borderColor} ${level.hoverBorder} transition-colors shadow-sm`}
                  >
                    <h3
                      className="text-pine font-title font-bold text-2xl uppercase mb-2"
                      style={{ fontFamily: "var(--font-title)" }}
                    >
                      {trail.name}
                    </h3>
                    <p className="text-pine/70 text-sm leading-relaxed mb-4">{trail.desc}</p>

                    <div className="flex items-center gap-4 text-xs text-pine/50 mb-4 font-medium">
                      <span>📏 {trail.distance}</span>
                      <span>⬇️ {trail.drop} desnivel</span>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {trail.tags.map((tag) => (
                        <span
                          key={tag}
                          className={`text-xs px-2 py-1 rounded border ${level.tagColor}`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* MAPA PLACEHOLDER */}
      <section className="py-16 bg-pine">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2
              className="text-cream font-title font-bold text-4xl md:text-5xl uppercase"
              style={{ fontFamily: "var(--font-title)" }}
            >
              Mapa del parque
            </h2>
            <p className="text-cream/60 mt-2 text-sm">
              Próximamente — integración con Trailforks
            </p>
          </div>
          <div className="bg-pine-light rounded-xl border border-lime/20 flex items-center justify-center h-72">
            <div className="text-center text-cream/40">
              <svg
                className="w-16 h-16 mx-auto mb-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                />
              </svg>
              <p className="text-sm">Mapa interactivo próximamente</p>
              <a
                href="https://www.trailforks.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lime text-xs mt-1 block hover:underline"
              >
                Ver en Trailforks →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-lime">
        <div className="max-w-3xl mx-auto text-center px-4">
          <h2
            className="text-pine font-title font-bold text-4xl md:text-5xl uppercase mb-4"
            style={{ fontFamily: "var(--font-title)" }}
          >
            ¿Listo para rodar?
          </h2>
          <p className="text-pine/70 mb-6">Entrada por día: $300 MXN. Sin reservación requerida.</p>
          <Link
            href="/como-llegar"
            className="inline-block bg-pine text-cream px-8 py-4 rounded font-bold text-lg uppercase tracking-wider hover:bg-pine-light transition-colors"
          >
            Cómo llegar →
          </Link>
        </div>
      </section>
    </>
  );
}
