"use client";

import Link from "next/link";

const highlights = [
  {
    title: "Otel projeleri",
    text: "Marka ve mimariye uygun dijital baskı duvar kağıdı; lobi, koridor ve konaklama alanlarında proje disiplini.",
  },
  {
    title: "Hastane ve sağlık",
    text: "Hasta odaları ve ortak alanlar için sakinleştirici desenler ve teknik gereksinimlere uygun üretim.",
  },
  {
    title: "Üretim & proje",
    text: "YB Dizayn duvar kağıdı üretir; metraj, baskı ve teslimatı proje bazlı planlar, sahada uygulama ile tamamlar.",
  },
];

export default function ProjectsSection() {
  return (
    <section className="py-16 md:py-24 bg-[#3c3531]/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center mb-12">
          <span className="text-[#a47c58] font-medium tracking-wider text-sm uppercase block mb-3">
            Projeler
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#3c3531] mb-4">
            Üretim ve proje bazlı çözümler
          </h2>
          <p className="text-[#3c3531]/70 max-w-2xl mx-auto">
            Otel ve hastane projelerinde deneyimliyiz; tüm kurumsal mekanlarda aynı üretim kalitesiyle çalışıyoruz.
          </p>
          <div className="w-20 h-1 bg-[#a47c58] mx-auto mt-4" />
        </div>

        <div className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-[#3c3531]/10 bg-white p-6 shadow-sm text-left"
            >
              <h3 className="text-lg font-bold text-[#3c3531] mb-3">{item.title}</h3>
              <p className="text-[#3c3531]/75 text-sm leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/projeler"
            className="inline-flex items-center gap-2 rounded-full bg-[#3c3531] px-8 py-3.5 text-white font-semibold hover:bg-[#a47c58] transition-colors"
          >
            Tüm projeler
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        <p className="text-center text-[#3c3531]/70 mt-8">
          Teklif ve keşif için{" "}
          <Link href="/iletisim" className="text-[#a47c58] font-medium hover:underline">
            iletişime geçin
          </Link>
        </p>
      </div>
    </section>
  );
}
