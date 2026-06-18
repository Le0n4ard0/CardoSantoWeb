"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { href: "/trails", label: "Trails" },
  { href: "/instalaciones", label: "Instalaciones" },
  { href: "/experiencias", label: "Experiencias" },
  { href: "/galeria", label: "Galería" },
  { href: "/tarifas", label: "Tarifas" },
  { href: "/como-llegar", label: "Cómo Llegar" },
  { href: "/reglamento", label: "Reglamento" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-pine shadow-lg" : "bg-pine/80 backdrop-blur-sm"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/img/cardo_white.png"
              alt="Cardo Santo Bike Ranch"
              width={60}
              height={60}
              className="object-contain"
            />
            <span
              className="text-cream font-title font-bold text-xl tracking-wide hidden sm:block"
              style={{ fontFamily: "var(--font-title)" }}
            >
              
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-cream/80 hover:text-lime text-sm font-medium transition-colors uppercase tracking-wider"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/tarifas"
              className="bg-lime text-pine px-4 py-2 rounded font-bold text-sm uppercase tracking-wider hover:bg-lime-dark transition-colors"
            >
              Comprar día
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-cream p-3 -mr-1 touch-manipulation"
            aria-label="Abrir menú"
          >
            <div className="w-6 flex flex-col gap-1.5">
              <span
                className={`block h-0.5 bg-cream transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`}
              />
              <span
                className={`block h-0.5 bg-cream transition-all duration-300 ${isOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`block h-0.5 bg-cream transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}
              />
            </div>
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            isOpen ? "max-h-96 pb-4" : "max-h-0"
          }`}
        >
          <div className="flex flex-col gap-1 pt-2 border-t border-cream/10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-cream/80 hover:text-lime py-2 px-2 text-sm font-medium uppercase tracking-wider transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/tarifas"
              onClick={() => setIsOpen(false)}
              className="mt-2 bg-lime text-pine px-4 py-2 rounded font-bold text-sm uppercase tracking-wider text-center hover:bg-lime-dark transition-colors"
            >
              Comprar día — $300 MXN
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
