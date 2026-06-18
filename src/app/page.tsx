import Link from "next/link";
import Image from "next/image";

const scheduleItems = [
  { days: "Lunes a Domingo", hours: "6:00 am – 8:00 pm" },
];

const highlights = [
  {
    icon: "🚵",
    title: "Trails para todos",
    desc: "Desde principiantes hasta avanzados. Verde, azul y negro.",
  },
  {
    icon: "🏕️",
    title: "Campamento",
    desc: "Pasa la noche en el bosque y pedalea desde que amanece.",
  },
  {
    icon: "🍽️",
    title: "Restaurante",
    desc: "Recupérate con buena comida después de una vuelta épica.",
  },
  {
    icon: "🌲",
    title: "Bosque de La Marquesa",
    desc: "Rodeado de naturaleza, a minutos de CDMX y Toluca.",
  },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center bg-pine overflow-hidden">
        {/* Background image */}
        <Image
          src="/img/acampar.jpg"
          alt="Cardo Santo Bike Ranch - campamento en el bosque"
          fill
          className="object-cover"
          priority
        />
        {/* Background overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-pine/70 via-pine/50 to-pine/90 z-10" />

        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
          <div className="flex justify-center mb-6">
            <Image
              src="/img/cardo_white.png"
              alt="Cardo Santo Bike Ranch"
              width={320}
              height={320}
              className="object-contain drop-shadow-2xl"
            />
          </div>

          <p className="text-lime font-medium uppercase tracking-widest text-sm mb-3">
            San Pedro Atlapulco · Estado de México
          </p>

          <h1
            className="text-cream font-title font-bold text-4xl sm:text-5xl md:text-7xl lg:text-8xl leading-none mb-6 uppercase"
            style={{ fontFamily: "var(--font-title)" }}
          >
            El mejor bike park del
            <br />
            <span className="text-lime">Estado de México</span>
          </h1>

          <p className="text-cream/80 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
            Trails para todos los niveles, líneas de saltos, restaurante y campamento en el corazón
            del bosque. Abierto desde 2023.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/tarifas"
              className="bg-lime text-pine px-8 py-4 rounded font-bold text-base sm:text-lg uppercase tracking-wider hover:bg-lime-dark transition-colors touch-manipulation"
            >
              Comprar día · $300 MXN
            </Link>
            <Link
              href="/trails"
              className="border-2 border-cream text-cream px-8 py-4 rounded font-bold text-base sm:text-lg uppercase tracking-wider hover:bg-cream hover:text-pine transition-colors touch-manipulation"
            >
              Ver trails
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
          <svg className="w-6 h-6 text-lime" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* HORARIOS Y PRECIO */}
      <section className="bg-lime py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12 text-pine">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🎟️</span>
              <div>
                <p className="font-bold text-xl font-title" style={{ fontFamily: "var(--font-title)" }}>
                  $300 MXN
                </p>
                <p className="text-xs font-medium uppercase tracking-wide">Entrada por día</p>
              </div>
            </div>
            {scheduleItems.map((s) => (
              <div key={s.days} className="text-center">
                <p className="font-bold text-sm uppercase tracking-wider">{s.days}</p>
                <p className="text-sm">{s.hours}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-lime font-medium uppercase tracking-widest text-sm mb-2">
              Por qué venir
            </p>
            <h2
              className="text-pine font-title font-bold text-5xl md:text-6xl uppercase"
              style={{ fontFamily: "var(--font-title)" }}
            >
              Todo en un solo lugar
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((h) => (
              <div
                key={h.title}
                className="bg-white rounded-xl p-6 shadow-sm border border-cream-dark hover:shadow-md transition-shadow"
              >
                <span className="text-4xl block mb-4">{h.icon}</span>
                <h3
                  className="text-pine font-title font-bold text-xl mb-2 uppercase"
                  style={{ fontFamily: "var(--font-title)" }}
                >
                  {h.title}
                </h3>
                <p className="text-pine/70 text-sm leading-relaxed">{h.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRAILS PREVIEW */}
      <section className="py-20 bg-pine">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-lime font-medium uppercase tracking-widest text-sm mb-2">Explora</p>
            <h2
              className="text-cream font-title font-bold text-5xl md:text-6xl uppercase"
              style={{ fontFamily: "var(--font-title)" }}
            >
              Trails destacados
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            {/* Atlapulco Shore */}
            <div className="bg-pine-light rounded-xl p-8 border border-lime/20 hover:border-lime/50 transition-colors">
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-black text-white text-xs font-bold px-2 py-0.5 rounded uppercase tracking-wider">
                  ⬛ Negro
                </span>
                <span className="text-cream/50 text-xs">Técnico · Avanzado</span>
              </div>
              <h3
                className="text-cream font-title font-bold text-3xl uppercase mb-3"
                style={{ fontFamily: "var(--font-title)" }}
              >
                Atlapulco Shore
              </h3>
              <p className="text-cream/70 text-sm leading-relaxed mb-4">
                Puentes, drops, skinnies y saltos. Una línea técnica que pone a prueba tus habilidades
                en el bosque de La Marquesa.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Drops", "Skinnies", "Saltos", "Puentes"].map((tag) => (
                  <span
                    key={tag}
                    className="bg-lime/10 text-lime text-xs px-2 py-1 rounded border border-lime/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Tabaquillo */}
            <div className="bg-pine-light rounded-xl p-8 border border-blue-400/20 hover:border-blue-400/50 transition-colors">
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-blue-600 text-white text-xs font-bold px-2 py-0.5 rounded uppercase tracking-wider">
                  🟦 Azul
                </span>
                <span className="text-cream/50 text-xs">Flow · Intermedio</span>
              </div>
              <h3
                className="text-cream font-title font-bold text-3xl uppercase mb-3"
                style={{ fontFamily: "var(--font-title)" }}
              >
                Tabaquillo
              </h3>
              <p className="text-cream/70 text-sm leading-relaxed mb-4">
                Curvas pronunciadas, switchbacks fluidos y un roadgap que te hará querer repetir.
                Ideal para mejorar técnica de giro.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Switchbacks", "Roadgap", "Flow", "Curvas"].map((tag) => (
                  <span
                    key={tag}
                    className="bg-blue-400/10 text-blue-300 text-xs px-2 py-1 rounded border border-blue-400/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link
              href="/trails"
              className="inline-block bg-lime text-pine px-8 py-4 rounded font-bold text-lg uppercase tracking-wider hover:bg-lime-dark transition-colors"
            >
              Ver todos los trails →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA CAMPAMENTO */}
      <section className="py-20 bg-earth">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-5xl block mb-6">🏕️</span>
            <h2
              className="text-cream font-title font-bold text-5xl md:text-6xl uppercase mb-6"
              style={{ fontFamily: "var(--font-title)" }}
            >
              Quédate a dormir en el bosque
            </h2>
            <p className="text-cream/80 text-lg leading-relaxed mb-8">
              Nuestro área de campamento te permite vivir la experiencia completa. Llega el viernes
              por la tarde, acampa y pedalea todo el fin de semana.
            </p>
            <Link
              href="/tarifas#campamento"
              className="inline-block bg-cream text-pine px-8 py-4 rounded font-bold text-lg uppercase tracking-wider hover:bg-cream-dark transition-colors"
            >
              Reservar campamento
            </Link>
          </div>
        </div>
      </section>

      {/* RESEÑAS GOOGLE */}
      <section className="py-16 bg-cream">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-lime font-medium uppercase tracking-widest text-sm mb-2">Opiniones</p>
            <h2
              className="text-pine font-title font-bold text-4xl md:text-5xl uppercase"
              style={{ fontFamily: "var(--font-title)" }}
            >
              Lo que dicen los riders
            </h2>
          </div>
          <div className="elfsight-app-46f77728-5a87-40d5-b5f8-c03e5a2bd0a3" data-elfsight-app-lazy="" />
        </div>
      </section>

      {/* INSTAGRAM CTA */}
      <section className="py-16 bg-cream-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-pine/60 text-sm uppercase tracking-widest mb-3">Síguenos</p>
          <h2
            className="text-pine font-title font-bold text-4xl md:text-5xl uppercase mb-4"
            style={{ fontFamily: "var(--font-title)" }}
          >
            @cardosantobikeranch
          </h2>
          <p className="text-pine/60 mb-6">Más de 9,500 riders en Instagram. Únete a la comunidad.</p>
          <a
            href="https://www.instagram.com/cardosantobikeranch/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-pine text-cream px-8 py-4 rounded font-bold text-lg uppercase tracking-wider hover:bg-pine-light transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
            Ver en Instagram
          </a>
        </div>
      </section>
    </>
  );
}
