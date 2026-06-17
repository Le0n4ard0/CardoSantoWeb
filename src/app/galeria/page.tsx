export default function GaleriaPage() {
  const instagramPosts = [
    { id: 1, alt: "Trail en el bosque de La Marquesa" },
    { id: 2, alt: "Salto en Jump Line" },
    { id: 3, alt: "Atlapulco Shore - skinnies" },
    { id: 4, alt: "Riders en el restaurante" },
    { id: 5, alt: "Campamento nocturno" },
    { id: 6, alt: "Drop técnico en negro" },
    { id: 7, alt: "Clínica de técnica" },
    { id: 8, alt: "Vista aérea del parque" },
    { id: 9, alt: "Tabaquillo - roadgap" },
  ];

  return (
    <>
      {/* HERO */}
      <section className="bg-pine pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lime font-medium uppercase tracking-widest text-sm mb-3">
            En imágenes
          </p>
          <h1
            className="text-cream font-title font-bold text-5xl sm:text-6xl md:text-7xl uppercase mb-6"
            style={{ fontFamily: "var(--font-title)" }}
          >
            Galería
          </h1>
          <p className="text-cream/70 text-lg leading-relaxed max-w-2xl mx-auto">
            Fotos y videos de la comunidad Cardo Santo. El bosque, los trails y los riders que hacen
            de este lugar algo especial.
          </p>
        </div>
      </section>

      {/* INSTAGRAM EMBED CTA */}
      <section className="py-12 bg-cream-dark border-b border-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-pine/60 text-sm mb-4">
            Sigue nuestro Instagram para ver el contenido más reciente
          </p>
          <a
            href="https://www.instagram.com/cardosantobikeranch/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-pine text-cream px-6 py-3 rounded font-bold uppercase tracking-wider hover:bg-pine-light transition-colors text-sm"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
            @cardosantobikeranch
          </a>
        </div>
      </section>

      {/* GRID PLACEHOLDER */}
      <section className="py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4">
            {instagramPosts.map((post, idx) => (
              <a
                key={post.id}
                href="https://www.instagram.com/cardosantobikeranch/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative aspect-square bg-pine-light rounded-lg overflow-hidden border border-pine/10 hover:border-lime/40 transition-colors"
                aria-label={post.alt}
              >
                {/* Placeholder gradient que simula imagen */}
                <div
                  className={`absolute inset-0 ${
                    idx % 3 === 0
                      ? "bg-gradient-to-br from-pine to-pine-light"
                      : idx % 3 === 1
                      ? "bg-gradient-to-tr from-earth to-pine"
                      : "bg-gradient-to-bl from-pine-light to-pine"
                  }`}
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-pine/60">
                  <svg className="w-8 h-8 text-lime" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                  <span className="text-cream text-xs mt-2">Ver en Instagram</span>
                </div>
                <div className="absolute bottom-2 left-2">
                  <span className="text-cream/60 text-xs bg-pine/50 px-1.5 py-0.5 rounded">
                    {post.alt}
                  </span>
                </div>
              </a>
            ))}
          </div>

          <div className="text-center mt-10">
            <p className="text-pine/50 text-sm mb-4">
              Agrega tus fotos usando{" "}
              <span className="text-lime font-medium">#CardoSantoBikeRanch</span> en Instagram
            </p>
            <a
              href="https://www.instagram.com/cardosantobikeranch/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border border-pine text-pine px-6 py-3 rounded font-bold uppercase tracking-wider hover:bg-pine hover:text-cream transition-colors text-sm"
            >
              Ver más en Instagram →
            </a>
          </div>
        </div>
      </section>

      {/* REELS CTA */}
      <section className="py-16 bg-pine">
        <div className="max-w-3xl mx-auto text-center px-4">
          <span className="text-4xl block mb-4">🎬</span>
          <h2
            className="text-cream font-title font-bold text-4xl md:text-5xl uppercase mb-4"
            style={{ fontFamily: "var(--font-title)" }}
          >
            Reels destacados
          </h2>
          <p className="text-cream/60 mb-6 text-sm">
            Los mejores momentos del parque en video. Atlapulco Shore, Jump Line y más.
          </p>
          <a
            href="https://www.instagram.com/cardosantobikeranch/reels/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-lime text-pine px-8 py-4 rounded font-bold uppercase tracking-wider hover:bg-lime-dark transition-colors"
          >
            Ver Reels en Instagram →
          </a>
        </div>
      </section>
    </>
  );
}
