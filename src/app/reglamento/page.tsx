import Image from "next/image";

const rules = [
  "Está prohibido el ingreso de alimentos y bebidas.",
  "Respetar la flora y la fauna del parque.",
  "Cuidar y respetar la infraestructura del parque.",
  "Las mascotas deberán permanecer con correa todo el tiempo que se encuentren dentro de las instalaciones. No podrán ingresar a las pistas, ni al área de comida.",
  "Depositar la basura dentro de los contenedores.",
  "No se permite el ingreso de motocicletas dentro de las pistas.",
  "Está prohibido usar las pistas sin equipo de protección.",
  "Está prohibido usar las pistas en estado alcohólico y bajo el influjo de enervantes.",
  "La zona de acampar solamente será permitida dentro de la parte establecida que se les asigne.",
  "No encender fogatas, hornillas, ni braceros fuera de las áreas permitidas.",
  "No se permite el ingreso con armas de fuego u objetos que denoten peligrosidad.",
  "Prohibido realizar actos que atenten contra la moral y las buenas costumbres.",
  "No realizar actividades de volanteo y comercio.",
  "En caso de no acatar ni respetar el presente reglamento, el parque tendrá derecho de expulsar a quien lo viole sin excepción alguna y de vetarlo del parque.",
  "Quien altere la paz, la sana convivencia y cause desorden público u agresiones físicas o verbales, será puesto a disposición de las autoridades correspondientes.",
];

const categories = [
  {
    title: "Normas generales",
    icon: "📋",
    indices: [0, 1, 2, 4],
  },
  {
    title: "Mascotas y acceso",
    icon: "🐕",
    indices: [3, 5, 10],
  },
  {
    title: "Seguridad en pistas",
    icon: "🪖",
    indices: [6, 7],
  },
  {
    title: "Área de campamento",
    icon: "🏕️",
    indices: [8, 9],
  },
  {
    title: "Convivencia y sanciones",
    icon: "🤝",
    indices: [11, 12, 13, 14],
  },
];

export default function ReglamentoPage() {
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
          <p className="text-lime font-medium uppercase tracking-widest text-sm mb-3">Cardo Santo Bike Ranch</p>
          <h1
            className="text-cream font-title font-bold text-5xl sm:text-6xl md:text-7xl uppercase mb-6"
            style={{ fontFamily: "var(--font-title)" }}
          >
            Reglamento
          </h1>
          <p className="text-cream/70 text-lg leading-relaxed max-w-2xl mx-auto">
            Para garantizar la seguridad y la buena convivencia de todos los visitantes, te pedimos
            leer y respetar el siguiente reglamento.
          </p>
        </div>
      </section>

      {/* LISTA COMPLETA */}
      <section className="py-20 bg-cream">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {rules.map((rule, idx) => (
              <div
                key={idx}
                className="flex items-start gap-4 bg-white rounded-xl px-6 py-5 shadow-sm border border-cream-dark"
              >
                <span
                  className="flex-shrink-0 w-8 h-8 bg-lime text-pine rounded-full flex items-center justify-center text-sm font-bold"
                  style={{ fontFamily: "var(--font-title)" }}
                >
                  {idx + 1}
                </span>
                <p className="text-pine/80 text-sm leading-relaxed pt-1">{rule}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NOTA FINAL */}
      <section className="py-16 bg-pine">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-5xl block mb-6">🤝</span>
          <h2
            className="text-cream font-title font-bold text-3xl md:text-4xl uppercase mb-4"
            style={{ fontFamily: "var(--font-title)" }}
          >
            Gracias por tu respeto
          </h2>
          <p className="text-cream/70 text-base leading-relaxed max-w-xl mx-auto">
            El cumplimiento de este reglamento nos permite mantener un espacio seguro, limpio y
            divertido para toda la familia. ¡Bienvenido a Cardo Santo!
          </p>
        </div>
      </section>
    </>
  );
}
