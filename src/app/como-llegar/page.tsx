import Image from "next/image";

const directions = [
  {
    from: "Desde CDMX (Toluca / Las Américas)",
    steps: [
      "Toma la autopista México-Toluca (Cuota 15D).",
      "Sal en la caseta de La Marquesa.",
      "Sigue la carretera libre hacia Lerma.",
      "Busca los señalamientos de Cardo Santo Bike Ranch.",
      "Tiempo estimado: 45–60 minutos desde el centro de CDMX.",
    ],
    icon: "🏙️",
  },
  {
    from: "Desde Toluca",
    steps: [
      "Toma la carretera federal Toluca-México (libre).",
      "Dirígete hacia La Marquesa.",
      "Antes de llegar a la caseta de La Marquesa, busca el acceso al parque.",
      "Tiempo estimado: 25–35 minutos desde el centro de Toluca.",
    ],
    icon: "🌆",
  },
  {
    from: "En transporte público",
    steps: [
      "Toma el metro hasta Observatorio (Línea 1).",
      "Desde Observatorio, toma un autobús hacia Toluca (pasando por La Marquesa).",
      "Baja en la parada de La Marquesa.",
      "Solicita referencia exacta por Instagram antes de salir.",
    ],
    icon: "🚌",
  },
];

export default function ComoLlegarPage() {
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
          <p className="text-lime font-medium uppercase tracking-widest text-sm mb-3">Ubicación</p>
          <h1
            className="text-cream font-title font-bold text-5xl sm:text-6xl md:text-7xl uppercase mb-6"
            style={{ fontFamily: "var(--font-title)" }}
          >
            Cómo Llegar
          </h1>
          <p className="text-cream/70 text-lg leading-relaxed max-w-2xl mx-auto">
            Estamos en el Bosque de San Pedro Atlapulco, entre CDMX y Toluca. A menos de una hora desde el
            centro de la Ciudad de México.
          </p>
        </div>
      </section>

      {/* MAPA EMBED */}
      <section className="bg-pine-light">
        <div className="w-full h-72 md:h-96 lg:h-[480px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4217.841221467806!2d-99.37401242432615!3d19.254937481986808!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cdf7e7a0910fed%3A0x148bd2de4c6b8f10!2sCardo%20Santo%20Bike%20Ranch!5e1!3m2!1ses-419!2smx!4v1781806263349!5m2!1ses-419!2smx"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Cardo Santo Bike Ranch - Ubicación en Google Maps"
          />
        </div>
      </section>

      {/* DATOS CLAVE */}
      <section className="py-12 bg-lime">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-pine">
            <div className="text-center">
              <span className="text-3xl block mb-2">📍</span>
              <p className="font-bold text-sm uppercase tracking-wider">Ubicación</p>
              <p className="text-sm mt-1">San Pedro Atlapulco, Edo. Méx.</p>
            </div>
            <div className="text-center">
              <span className="text-3xl block mb-2">🚗</span>
              <p className="font-bold text-sm uppercase tracking-wider">Desde CDMX</p>
              <p className="text-sm mt-1">~50 minutos por la autopista</p>
            </div>
            <div className="text-center">
              <span className="text-3xl block mb-2">⛰️</span>
              <p className="font-bold text-sm uppercase tracking-wider">Altitud</p>
              <p className="text-sm mt-1">~2,800 msnm</p>
            </div>
            <div className="text-center">
              <span className="text-3xl block mb-2">🌡️</span>
              <p className="font-bold text-sm uppercase tracking-wider">Clima</p>
              <p className="text-sm mt-1">Fresco · 10–18°C promedio</p>
            </div>
          </div>
        </div>
      </section>

      {/* INSTRUCCIONES DETALLADAS */}
      <section className="py-20 bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-pine font-title font-bold text-4xl uppercase text-center mb-12"
            style={{ fontFamily: "var(--font-title)" }}
          >
            Indicaciones
          </h2>
          <div className="space-y-8">
            {directions.map((dir) => (
              <div
                key={dir.from}
                className="bg-white rounded-xl p-8 shadow-sm border border-cream-dark"
              >
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-3xl">{dir.icon}</span>
                  <h3
                    className="text-pine font-title font-bold text-xl uppercase"
                    style={{ fontFamily: "var(--font-title)" }}
                  >
                    {dir.from}
                  </h3>
                </div>
                <ol className="space-y-3">
                  {dir.steps.map((step, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-pine/70">
                      <span className="flex-shrink-0 w-6 h-6 bg-lime text-pine rounded-full flex items-center justify-center text-xs font-bold">
                        {idx + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONSEJOS */}
      <section className="py-16 bg-pine">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-cream font-title font-bold text-3xl uppercase text-center mb-8"
            style={{ fontFamily: "var(--font-title)" }}
          >
            Antes de venir
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { icon: "🪖", tip: "Trae casco — es obligatorio para entrar a los trails." },
              { icon: "💧", tip: "Hidratación extra. A 2,800 msnm el cuerpo se deshidrata más rápido." },
              { icon: "🧥", tip: "Ropa abrigadora para la mañana. El bosque puede estar frío." },
              { icon: "💵", tip: "Lleva efectivo por si no hay terminales de pago disponibles." },
              { icon: "🔋", tip: "Carga tu celular. La señal puede ser variable en el bosque." },
              { icon: "📷", tip: "Trae cámara o GoPro. Los trails merecen ser grabados." },
            ].map((item) => (
              <div
                key={item.tip}
                className="flex items-start gap-3 bg-pine-light rounded-lg p-4 border border-lime/10"
              >
                <span className="text-2xl flex-shrink-0">{item.icon}</span>
                <p className="text-cream/80 text-sm leading-relaxed">{item.tip}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <p className="text-cream/60 text-sm mb-4">
              ¿Tienes dudas de cómo llegar? Escríbenos en Instagram y te ayudamos.
            </p>
            <a
              href="https://www.instagram.com/cardosantobikeranch/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-lime text-pine px-8 py-4 rounded font-bold uppercase tracking-wider hover:bg-lime-dark transition-colors"
            >
              Contactar en Instagram →
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
