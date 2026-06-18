import Image from "next/image";

const schedule = [
  { days: "Lunes a Domingo", hours: "6:00 am – 8:00 pm", icon: "☀️" },
];

const pricingPlans = [
  {
    id: "dia",
    name: "Biker",
    price: "$300",
    currency: "MXN",
    period: "por persona / día",
    desc: "Acceso completo a todos los trails del parque durante el día.",
    features: [
      "Acceso a todos los trails (verde, azul, negro)",
      "Jump Lines incluidas",
      "Estacionamiento gratuito",
      "Uso de área de descanso",
    ],
    cta: "Comprar entrada",
    highlight: true,
  },
  {
    id: "acompanante",
    name: "Acompañante",
    price: "$50",
    currency: "MXN",
    period: "por persona / día",
    desc: "Para quienes vienen a acompañar sin usar las pistas. Acceso a las instalaciones generales.",
    features: [
      "Acceso a instalaciones del parque",
      "Área de descanso y restaurante",
      "Estacionamiento gratuito",
    ],
    cta: "Más información",
    highlight: false,
  },
  {
    id: "glamping",
    name: "Glamping",
    price: "$200",
    currency: "MXN",
    period: "por persona / noche",
    desc: "Pasa la noche en el bosque y pedalea desde el amanecer. Cupo limitado.",
    features: [
      "Área de glamping en el bosque",
      "Uso de baños y sanitarios",
      "Fogata en área designada",
      "Experiencia completa en la naturaleza",
      "Cupo limitado — reservar con anticipación",
    ],
    cta: "Solicitar reserva",
    highlight: false,
  },
  {
    id: "grupos",
    name: "Grupos",
    price: "Cotizar",
    currency: "",
    period: "desde 10 personas",
    desc: "Tarifa especial para grupos, escuelas, empresas y eventos privados.",
    features: [
      "Precio preferencial por persona",
      "Guía de trails incluido",
      "Área privada en restaurante",
      "Opción de glamping grupal",
      "Personalización del evento",
    ],
    cta: "Solicitar cotización",
    highlight: false,
  },
];

const faqs = [
  {
    q: "¿Necesito reservar con anticipación?",
    a: "Para entrada de día NO es necesario reservar. Llegas, pagas en taquilla y entras. Para campamento y grupos sí se requiere reserva previa.",
  },
  {
    q: "¿Hay renta de bicicletas?",
    a: "Consulta disponibilidad directamente en el parque. Es posible que no siempre haya renta disponible, te recomendamos traer tu propia bicicleta.",
  },
  {
    q: "¿Se requiere casco y equipo de protección?",
    a: "El casco es OBLIGATORIO para ingresar a los trails. Para trails negros y jump lines se recomienda protecciones adicionales (rodilleras, coderas, back protector).",
  },
  {
    q: "¿Aceptan tarjeta de crédito o débito?",
    a: "Consulta directamente en el parque. Se recomienda llevar efectivo para garantizar el pago en taquilla.",
  },
  {
    q: "¿Hay servicio de alimentos?",
    a: "Sí, contamos con restaurante en el parque. Desayunos, comidas y snacks disponibles en horario de operación.",
  },
  {
    q: "¿Puedo llevar a mis hijos?",
    a: "¡Claro! Los trails verdes son aptos para niños con bicicleta y casco. Siempre acompañados de un adulto.",
  },
];

export default function TarifasPage() {
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
          <p className="text-lime font-medium uppercase tracking-widest text-sm mb-3">Precios</p>
          <h1
            className="text-cream font-title font-bold text-5xl sm:text-6xl md:text-7xl uppercase mb-6"
            style={{ fontFamily: "var(--font-title)" }}
          >
            Tarifas & Reservas
          </h1>
          <p className="text-cream/70 text-lg leading-relaxed max-w-2xl mx-auto">
            Entrada accesible, experiencia épica. Sin reservación para día de parque, sin pretextos
            para no venir.
          </p>
        </div>
      </section>

      {/* HORARIOS */}
      <section id="horarios" className="py-14 bg-lime">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-pine font-title font-bold text-3xl uppercase text-center mb-8"
            style={{ fontFamily: "var(--font-title)" }}
          >
            Horarios de Operación
          </h2>
          <div className="flex justify-center">
            {schedule.map((s) => (
              <div key={s.days} className="bg-pine rounded-lg p-6 text-center">
                <span className="text-3xl block mb-2">{s.icon}</span>
                <p className="text-lime font-bold text-sm uppercase tracking-wider mb-1">{s.days}</p>
                <p className="text-cream text-lg font-medium">{s.hours}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="precios" className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2
              className="text-pine font-title font-bold text-5xl uppercase"
              style={{ fontFamily: "var(--font-title)" }}
            >
              Planes y Tarifas
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {pricingPlans.map((plan) => (
              <div
                key={plan.id}
                id={plan.id}
                className={`rounded-xl p-8 flex flex-col ${
                  plan.highlight
                    ? "bg-pine text-cream border-2 border-lime shadow-xl"
                    : "bg-white border border-cream-dark shadow-sm"
                }`}
              >
                {plan.highlight && (
                  <span className="bg-lime text-pine text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full self-start mb-4">
                    Más popular
                  </span>
                )}
                <h3
                  className={`font-title font-bold text-2xl uppercase mb-1 ${plan.highlight ? "text-cream" : "text-pine"}`}
                  style={{ fontFamily: "var(--font-title)" }}
                >
                  {plan.name}
                </h3>
                <div className="flex items-baseline gap-1 mb-1">
                  <span
                    className={`font-title font-bold text-5xl ${plan.highlight ? "text-lime" : "text-pine"}`}
                    style={{ fontFamily: "var(--font-title)" }}
                  >
                    {plan.price}
                  </span>
                  {plan.currency && (
                    <span className={`text-sm font-bold ${plan.highlight ? "text-lime" : "text-pine"}`}>
                      {plan.currency}
                    </span>
                  )}
                </div>
                <p className={`text-xs mb-4 ${plan.highlight ? "text-cream/60" : "text-pine/50"}`}>
                  {plan.period}
                </p>
                <p className={`text-sm leading-relaxed mb-6 flex-1 ${plan.highlight ? "text-cream/70" : "text-pine/70"}`}>
                  {plan.desc}
                </p>
                <ul className="space-y-2 mb-6">
                  {plan.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-2 text-sm">
                      <span className="text-lime mt-0.5 flex-shrink-0">✓</span>
                      <span className={plan.highlight ? "text-cream/80" : "text-pine/70"}>{feat}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="https://www.instagram.com/cardosantobikeranch/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-center py-3 px-6 rounded font-bold text-sm uppercase tracking-wider transition-colors ${
                    plan.highlight
                      ? "bg-lime text-pine hover:bg-lime-dark"
                      : "border-2 border-pine text-pine hover:bg-pine hover:text-cream"
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FORMULARIO DE RESERVA */}
      <section id="reservar" className="py-20 bg-pine">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2
              className="text-cream font-title font-bold text-4xl md:text-5xl uppercase mb-3"
              style={{ fontFamily: "var(--font-title)" }}
            >
              Reserva para Grupos
            </h2>
            <p className="text-cream/60">
              Para grupos de 10+ personas, campamentos y eventos. Te contactamos en menos de 24 hrs.
            </p>
          </div>

          <form className="bg-pine-light rounded-xl p-8 border border-lime/20 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-cream/70 text-xs uppercase tracking-wider mb-1.5">
                  Nombre
                </label>
                <input
                  type="text"
                  placeholder="Tu nombre"
                  className="w-full bg-pine border border-cream/20 text-cream placeholder-cream/30 rounded px-4 py-3 text-sm focus:outline-none focus:border-lime"
                />
              </div>
              <div>
                <label className="block text-cream/70 text-xs uppercase tracking-wider mb-1.5">
                  WhatsApp / Teléfono
                </label>
                <input
                  type="tel"
                  placeholder="+52 55 xxxx xxxx"
                  className="w-full bg-pine border border-cream/20 text-cream placeholder-cream/30 rounded px-4 py-3 text-sm focus:outline-none focus:border-lime"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-cream/70 text-xs uppercase tracking-wider mb-1.5">
                  Tipo de reserva
                </label>
                <select className="w-full bg-pine border border-cream/20 text-cream rounded px-4 py-3 text-sm focus:outline-none focus:border-lime">
                  <option>Grupo (10+ personas)</option>
                  <option>Campamento</option>
                  <option>Evento privado</option>
                  <option>Fecha especial</option>
                </select>
              </div>
              <div>
                <label className="block text-cream/70 text-xs uppercase tracking-wider mb-1.5">
                  Número de personas
                </label>
                <input
                  type="number"
                  placeholder="ej. 15"
                  min="1"
                  className="w-full bg-pine border border-cream/20 text-cream placeholder-cream/30 rounded px-4 py-3 text-sm focus:outline-none focus:border-lime"
                />
              </div>
            </div>
            <div>
              <label className="block text-cream/70 text-xs uppercase tracking-wider mb-1.5">
                Fecha deseada
              </label>
              <input
                type="date"
                className="w-full bg-pine border border-cream/20 text-cream rounded px-4 py-3 text-sm focus:outline-none focus:border-lime"
              />
            </div>
            <div>
              <label className="block text-cream/70 text-xs uppercase tracking-wider mb-1.5">
                Mensaje o requerimientos especiales
              </label>
              <textarea
                rows={4}
                placeholder="Cuéntanos qué necesitas..."
                className="w-full bg-pine border border-cream/20 text-cream placeholder-cream/30 rounded px-4 py-3 text-sm focus:outline-none focus:border-lime resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-lime text-pine py-4 rounded font-bold text-sm uppercase tracking-widest hover:bg-lime-dark transition-colors"
            >
              Enviar solicitud
            </button>
            <p className="text-cream/40 text-xs text-center">
              También puedes contactarnos directamente en Instagram:{" "}
              <a
                href="https://www.instagram.com/cardosantobikeranch/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lime hover:underline"
              >
                @cardosantobikeranch
              </a>
            </p>
          </form>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-cream">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-pine font-title font-bold text-4xl uppercase text-center mb-12"
            style={{ fontFamily: "var(--font-title)" }}
          >
            Preguntas Frecuentes
          </h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="bg-white rounded-xl p-6 border border-cream-dark">
                <h3 className="text-pine font-bold text-sm mb-2">{faq.q}</h3>
                <p className="text-pine/70 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
