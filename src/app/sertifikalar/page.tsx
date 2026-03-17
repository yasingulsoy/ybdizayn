import type { Metadata } from "next";
import Header from "@/components/Header";
import PageHeader from "@/components/PageHeader";
import NewsletterSection from "@/components/NewsletterSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Sertifikalar - YB Dizayn",
  description: "YB Dizayn sertifikaları ve kalite belgeleri. Duvar kağıdı ürünlerimiz uluslararası standartlara uygundur.",
};

const certificates = [
  {
    title: "CE Belgesi",
    description: "Ürünlerimiz Avrupa Birliği güvenlik ve kalite standartlarına uygundur.",
  },
  {
    title: "ISO 9001 Kalite Yönetim",
    description: "Kalite yönetim sistemimiz uluslararası standartlarla belgelendirilmiştir.",
  },
  {
    title: "Yangına Dayanıklılık",
    description: "Duvar kağıtlarımız yangına dayanıklılık testlerinden geçmiştir.",
  },
  {
    title: "Çevre Dostu Üretim",
    description: "Çevreye duyarlı ve sürdürülebilir üretim süreçleri uygulanmaktadır.",
  },
];

export default function SertifikalarPage() {
  return (
    <>
      <Header />
      <main>
        <PageHeader title="Sertifikalar" subtitle="Kalite ve güven belgelerimiz" />

        <section className="cert-exact">
          <div className="cert-exact__container">
            <div className="cert-exact__grid">
              {certificates.map((cert, i) => (
                <article key={i} className="cert-exact__card">
                  <div className="cert-exact__icon">
                    <svg className="w-10 h-10 text-[#a47c58]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 00-4.438 0 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                  <h3>{cert.title}</h3>
                  <p>{cert.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <NewsletterSection />
      <Footer />
      <WhatsAppButton />
    </>
  );
}
