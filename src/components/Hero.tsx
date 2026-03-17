import Image from "next/image";

export default function Hero() {
  return (
    <section className="hero-exact relative flex items-start justify-center overflow-hidden pt-8 pb-14 md:min-h-[100vh] md:items-center md:pt-0 md:pb-0">
      {/* Mobil: görselli arka plan */}
      <div className="absolute inset-0 md:hidden">
        <Image
          src="/wp/hero-bg.jpg"
          alt="YB Dizayn - Duvar kağıdı uygulaması"
          fill
          className="object-cover object-center"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-white/88" />
      </div>

      {/* Masaüstü: header_web.jpg arka plan */}
      <div className="absolute inset-0 hidden md:block">
        <Image
          src="/wp/hero-bg.jpg"
          alt="YB Dizayn - Duvar kağıdı uygulaması"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        {/* Koyu overlay - metin okunabilirliği */}
        <div className="absolute inset-0 bg-[#3c3531]/40" />
      </div>

      {/* İçerik üzerinde overlay (mobilde gradient üzerinde) */}
      <div className="absolute inset-0 md:hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-[#3c3531]/20 via-transparent to-transparent" />
      </div>

      {/* İçerik */}
      <div className="relative z-10 mt-8 flex flex-col items-center text-center px-4 sm:px-6 md:mt-0">
        {/* Büyük Logo */}
        <div className="mb-6 md:mb-8 transform transition-transform hover:scale-105 duration-500">
          <Image
            src="/logon.png"
            alt="YB Dizayn - Digital Print Wallpapers"
            width={240}
            height={240}
            className="w-28 h-28 sm:w-36 sm:h-36 md:w-60 md:h-60 object-contain drop-shadow-2xl"
            priority
          />
        </div>

        <p className="text-[10px] sm:text-xs md:text-sm text-[#a47c58] md:text-amber-200 mb-3 md:mb-4 tracking-[0.2em] sm:tracking-[0.3em] uppercase font-medium">
          YB DİZAYN&apos;A HOŞ GELDİNİZ
        </p>

        <h1 className="text-5xl sm:text-6xl md:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-[#3c3531] md:text-white mb-6 md:mb-10 max-w-4xl leading-tight tracking-tight drop-shadow-sm md:drop-shadow-lg">
          Kaliteli Duvar Kağıtları
        </h1>

        <a
          href="#"
          className="group inline-flex items-center gap-2 rounded-full bg-[#3c3531] md:bg-white md:text-[#3c3531] px-8 py-3.5 text-white font-semibold shadow-xl hover:bg-[#a47c58] md:hover:bg-amber-100 hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-300 text-sm md:text-base md:px-10 md:py-4 w-full max-w-[280px] justify-center sm:max-w-none sm:w-auto"
        >
          Tıklayınız
          <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>
    </section>
  );
}
