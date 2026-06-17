"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function SplashScreen() {
  const [visible, setVisible] = useState(true);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => setFading(true), 2800);
    const hideTimer = setTimeout(() => setVisible(false), 3400);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-pine transition-opacity duration-500"
      style={{ opacity: fading ? 0 : 1 }}
    >
      <Image
        src="/img/Cardo_Animado.gif"
        alt="Cardo Santo Bike Ranch"
        width={280}
        height={280}
        className="object-contain"
        unoptimized
        priority
      />
    </div>
  );
}
