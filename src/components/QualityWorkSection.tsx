import Image from "next/image";

const features = [
  {
    title: "Yenilikçi Duvar Kağıdı Tasarımları",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14" />
      </svg>
    ),
  },
  {
    title: "Yüksek Kaliteli Duvar Kağıdı Malzemeleri",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
  },
];

const progressItems = [
  { title: "İç Duvar Tasarımı", percent: 100 },
  { title: "Yüksek Kaliteli Duvar Giydirme", percent: 100 },
];

export default function QualityWorkSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-[#3c3531]/5">
              <Image
                src="/wp/quality-work-main.png"
                alt="YB Dizayn - Kaliteli duvar kağıdı uygulaması"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
          <div>
            <span className="text-[#a47c58] font-medium tracking-wider text-sm uppercase block mb-3">
              İç Mekan Tasarımı
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#3c3531] mb-6">
              Beklentilerinizin Üzerinde Kaliteli Çalışma
            </h2>
            <div className="w-20 h-1 bg-[#a47c58] mb-6" />
            <p className="text-[#3c3531]/80 leading-relaxed mb-6">
              YB Dizayn duvar dekorasyonu alanındaki tüm yenilikleri benzersiz kolaylıklarla ayağınıza getirir.
            </p>
            <ul className="space-y-4 mb-6">
              {features.map((item, i) => (
                <li key={i} className="flex gap-4">
                  <span className="flex-shrink-0 w-12 h-12 rounded-full bg-[#a47c58]/10 flex items-center justify-center text-[#a47c58]">
                    {item.icon}
                  </span>
                  <span className="text-[#3c3531]/80 pt-2">{item.title}</span>
                </li>
              ))}
            </ul>
            <p className="text-[#3c3531]/70 text-sm leading-relaxed mb-8">
              İç mekan faaliyetlerinde kullanılan ürünlerin içinde bulunan kimyasal maddelerin iç mekanın havasının verimi bakımından belirlenen sınır değerleri kapsamında olduğunu gösteren bir sertifikadır. İnsanlar zamanlarının %90&apos;ını iç mekanlarda geçirirler ve iç mekanlardaki hava kirliliği dış mekanlara göre 2-5 kat daha yoğundur.
            </p>
            <div className="space-y-6">
              {progressItems.map((item, i) => (
                <div key={i}>
                  <div className="flex justify-between mb-2">
                    <h4 className="font-semibold text-[#3c3531]">{item.title}</h4>
                    <span className="text-[#a47c58] font-medium">{item.percent}%</span>
                  </div>
                  <div className="h-2 bg-[#3c3531]/10 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#a47c58] rounded-full transition-all duration-1000"
                      style={{ width: `${item.percent}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
