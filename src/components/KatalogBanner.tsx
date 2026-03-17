import Image from "next/image";

export default function KatalogBanner() {
  return (
    <section className="py-12 md:py-16 bg-gradient-to-br from-[#3c3531]/5 via-white to-[#a47c58]/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col items-center gap-8 text-center">
          <div className="relative w-full max-w-4xl aspect-[3/1] min-h-[120px] rounded-2xl overflow-hidden bg-[#3c3531]/10">
            <Image
              src="/wp/katalog-kapak.png"
              alt="YB Dizayn Katalog - Duvar kağıdı koleksiyonu"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 896px"
            />
            <div className="absolute inset-0 bg-[#3c3531]/50 flex items-center justify-center">
              <span className="text-2xl md:text-4xl font-bold text-white drop-shadow-lg">
                Duvar Kağıdı Koleksiyonumuz
              </span>
            </div>
          </div>
          <a
            href="http://kuspa.svetbeauty.com.tr/pdf/#book/"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full bg-[#3c3531] px-10 py-4 text-white font-semibold hover:bg-[#a47c58] transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            Katalog
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
