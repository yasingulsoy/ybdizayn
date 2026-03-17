"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const projects = [
  { title: "Ev Duvarları", image: "/wp/ev-duvarlari.jpg", href: "/projeler" },
  { title: "Otel Duvar Kağıtları", image: "/wp/otel-duvar-kagitlari.jpg", href: "/projeler" },
  { title: "Tekstil Duvar Kağıtları", image: "/wp/tekstil-duvar-kagitlari.jpg", href: "/projeler" },
  { title: "Kurumsal Duvar Kağıtları", image: "/wp/kurumsal-duvar-kagitlari.jpg", href: "/projeler" },
];

export default function ProjectsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-16 md:py-24 bg-[#3c3531]/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center mb-12">
          <span className="text-[#a47c58] font-medium tracking-wider text-sm uppercase block mb-3">
            Başarılı Proje
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#3c3531] mb-4">
            Gözünüz Üzerimizde Olsun
          </h2>
          <p className="text-[#3c3531]/70">Son Projeler</p>
          <div className="w-20 h-1 bg-[#a47c58] mx-auto mt-4" />
        </div>

        <div className="grid gap-8 lg:grid-cols-2 items-center">
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-[#3c3531]/10">
            <Image
              src={projects[activeIndex].image}
              alt={projects[activeIndex].title}
              fill
              className="object-cover transition-opacity duration-500"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-[#3c3531] mb-6">
              {projects[activeIndex].title}
            </h3>
            <Link
              href="/projeler"
              className="inline-flex items-center gap-2 rounded-full bg-[#3c3531] px-8 py-3.5 text-white font-semibold hover:bg-[#a47c58] transition-colors"
            >
              Read More About
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Thumbnail navigasyon */}
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          {projects.map((project, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`relative w-24 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                activeIndex === i ? "border-[#a47c58] scale-105" : "border-transparent hover:border-[#a47c58]/50"
              }`}
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
                sizes="96px"
              />
            </button>
          ))}
        </div>

        <p className="text-center text-[#3c3531]/70 mt-8">
          Size hizmet etmeye her zaman hazırız.{" "}
          <Link href="/projeler" className="text-[#a47c58] font-medium hover:underline">
            Daha fazla projeler göster
          </Link>
        </p>
      </div>
    </section>
  );
}
