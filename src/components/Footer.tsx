import Link from "next/link";
import Image from "next/image";

const quickLinks = [
  { href: "/trails", label: "Trails" },
  { href: "/instalaciones", label: "Instalaciones" },
  { href: "/experiencias", label: "Experiencias" },
  { href: "/galeria", label: "Galería" },
  { href: "/tarifas", label: "Tarifas & Reservas" },
  { href: "/como-llegar", label: "Cómo Llegar" },
];

const schedule = [
  { days: "Lun – Jue", hours: "7:00 am – 2:00 pm" },
  { days: "Viernes", hours: "7:00 am – 7:00 pm" },
  { days: "Sáb – Dom", hours: "7:00 am – 6:00 pm" },
];

export default function Footer() {
  return (
    <footer className="bg-pine text-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <Image
                src="/img/cardo_white.png"
                alt="Cardo Santo Bike Ranch"
                width={48}
                height={48}
                className="object-contain"
              />
              <div>
                <p
                  className="font-title font-bold text-xl text-cream leading-tight"
                  style={{ fontFamily: "var(--font-title)" }}
                >
                  CARDO SANTO
                </p>
                <p className="text-lime text-xs uppercase tracking-widest">Bike Ranch</p>
              </div>
            </Link>
            <p className="text-cream/70 text-sm leading-relaxed">
              El mejor bike park del Estado de México, en el corazón del Bosque de La Marquesa.
            </p>
            <div className="flex gap-3 mt-4">
              <a
                href="https://www.instagram.com/cardosantobikeranch/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cream/70 hover:text-lime transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3
              className="font-title font-bold text-lg text-lime mb-4 uppercase tracking-wider"
              style={{ fontFamily: "var(--font-title)" }}
            >
              Explorar
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-cream/70 hover:text-lime text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Schedule */}
          <div>
            <h3
              className="font-title font-bold text-lg text-lime mb-4 uppercase tracking-wider"
              style={{ fontFamily: "var(--font-title)" }}
            >
              Horarios
            </h3>
            <ul className="space-y-2">
              {schedule.map((s) => (
                <li key={s.days} className="text-sm">
                  <span className="text-cream font-medium">{s.days}</span>
                  <br />
                  <span className="text-cream/70">{s.hours}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Location */}
          <div>
            <h3
              className="font-title font-bold text-lg text-lime mb-4 uppercase tracking-wider"
              style={{ fontFamily: "var(--font-title)" }}
            >
              Ubicación
            </h3>
            <p className="text-cream/70 text-sm leading-relaxed mb-3">
              Bosque La Marquesa, Lerma, Estado de México
            </p>
            <p className="text-cream/70 text-sm mb-4">
              Entrada: <span className="text-lime font-bold">$300 MXN</span> por día
            </p>
            <Link
              href="/como-llegar"
              className="inline-block border border-lime text-lime px-4 py-2 rounded text-sm hover:bg-lime hover:text-pine transition-colors font-medium"
            >
              Ver en mapa →
            </Link>
          </div>
        </div>

        <div className="border-t border-cream/10 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-cream/40 text-xs">
            © {new Date().getFullYear()} Cardo Santo Bike Ranch. Todos los derechos reservados.
          </p>
          <p className="text-cream/40 text-xs">Familia Saldaña · La Marquesa, Edo. Méx.</p>
        </div>
      </div>
    </footer>
  );
}
