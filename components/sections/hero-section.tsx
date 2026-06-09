"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "poyraz-ui/atoms";

export function HeroSection() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scale = Math.min(1 + scrollY * 0.0005, 1.25);

  return (
    <section className="relative flex flex-col items-center pt-24 sm:pt-32 overflow-hidden min-h-[80vh]">
      {/* Content */}
      <div className="container max-w-3xl mx-auto space-y-5 text-center z-10 relative px-4">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
          Tüm Freelance Süreciniz <br className="hidden sm:block" />
          <span className="text-primary">Tek Bir Çatı Altında</span>
        </h1>
        
        <p className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto">
          Müşterilerinizi sisteme kaydedin, projeleri planlayın ve onların durumu takip edebilmesi için özel portal hesapları oluşturun. Self-hosted kontrol sizde.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <Button className="w-full sm:w-auto">
            Sistemi Kur (Self-Host)
          </Button>
          <Button variant="outline" className="w-full sm:w-auto">
            Kullanım Kılavuzu
          </Button>
        </div>
      </div>

      {/* Parallax Scaling Image (Alta sıfır, user ayarı) */}
      <div className="absolute -bottom-13 w-full flex justify-center px-4">
        <div 
          className="relative w-full max-w-4xl origin-bottom"
          style={{ 
            transform: `scale(${scale})`,
            transition: "transform 0.1s ease-out" 
          }}
        >
          <Image
            src="/images/heroSection.png"
            alt="Neta Dashboard Preview"
            width={1200}
            height={600}
            className="w-full h-auto object-contain object-bottom"
            priority
          />
        </div>
      </div>
    </section>
  );
}
