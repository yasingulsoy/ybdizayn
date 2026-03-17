import Image from "next/image";

const points = [
  {
    title: "Kalite & Şıklık Garantisi",
    text: "Yalnızca uzun ömürlü, silinebilir ve yüksek baskı kalitesine sahip birinci sınıf duvar kâğıtlarını sunuyoruz. Her mekâna uygun, modern ve trend tasarımlarla evinize şıklık katıyoruz.",
  },
  {
    title: "Hızlı Teslimat & Profesyonel Destek",
    text: "Siparişleriniz özenle hazırlanarak en kısa sürede kargoya verilir. Kurulumdan ürün seçimine kadar her aşamada uzman ekibimizle yanınızdayız.",
  },
];

export default function WhyChooseSection() {
  return (
    <section className="py-16 md:py-24 bg-[#3c3531] text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
            <Image
              src="/wp/neden-biz.jpg"
              alt="YB Dizayn - Duvarlarınızı güzelleştiriyoruz"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div>
            <span className="text-[#a47c58] font-medium tracking-wider text-sm uppercase block mb-3">
              Neden Bizi Tercih Etmelisiniz
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Duvarlarınızı Güzelleştirmeye Odaklanıyoruz
            </h2>
            <div className="w-20 h-1 bg-[#a47c58] mb-8" />
            <ul className="space-y-8">
              {points.map((item, i) => (
                <li key={i} className="flex gap-4">
                  <span className="flex-shrink-0 w-10 h-10 rounded-full bg-[#a47c58] flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">{item.title}</h4>
                    <p className="text-white/80 leading-relaxed">{item.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
