import Image from "next/image";
import type { Metadata } from "next";
import Header from "@/components/Header";
import PageHeader from "@/components/PageHeader";
import NewsletterSection from "@/components/NewsletterSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Hakkımızda - YB Dizayn",
  description: "YB Dizayn - 5 yılı aşkın deneyimle modern duvar kağıtları. Konut, otel, okul, hastane ve sosyal tesisler için kaliteli duvar kağıdı çözümleri.",
};

const features = ["Biz uzman ve sertifikalı tasarımcılarız", "Sadece kaliteli malzemeler kullanıyoruz", "Biz müşterilerimizi umursuyoruz", "Akıllı ve benzersiz duvar kağıdı tasarımları"];

const testimonials = [
  {
    text: "Eşimle beraber bebek odası için duvar kağıdı siparişi vermiştik düşündüğümüzden çok daha kaliteli geldi gerçekten çok teşekkür ederiz güzel bi firma.",
    author: "Onur Y.",
    image: "/wp/testimonial-1.jpg",
  },
  {
    text: "Kimsede olmayan harika duvar kağıdı tasarımları var. Oturma Odam için aldım bayıldım.",
    author: "Sercan E.",
    image: "/wp/testimonial-2.jpg",
  },
  {
    text: "Evimize yaptırdığımız duvar kağıtlarını aldım, ölçülerime göre, istediğim desen, kağıt çalıştılar çok memnun kaldım.",
    author: "Sevda C.",
    image: "/wp/testimonial-3.jpg",
  },
];

export default function HakkimizdaPage() {
  return (
    <>
      <Header />
      <main>
        <PageHeader title="Hakkımızda" />

        <section className="about-two-exact">
          <div className="about-two-exact__container">
            <div className="about-two-exact__grid">
              <div className="about-two-exact__left">
                <p className="about-two-exact__tag">YB Dizayn</p>
                <h2 className="about-two-exact__title">Modern Duvar Kağıtları</h2>
                <p className="about-two-exact__text-1">Size daha kaliteli sonuçlar vermek için 5 yılı aşkın deneyime sahibiz.</p>
                <p className="about-two-exact__text-2">
                  Tüm duvarlar YB Dizayn koleksiyonlarıyla güzelleşiyor. Konut, otel, okul, hastane, sosyal tesisler ve daha pek çok farklı proje YB Dizayn&apos;ın birbirinden şık duvar kağıtlarını tercih ediyor. Tekstil tabanlı duvar kağıdı uygulamalarında kullanılır. Otellerden, evlere, sağlık hizmeti sunan tesislere kadar pek çok yatırımcının tercihi YB Dizayn olmuştur.
                </p>
                <div className="about-two-exact__points">
                  <p>Kaliteli Malzeme</p>
                  <p>Kaliteli Malzeme</p>
                </div>
              </div>
              <div className="about-two-exact__right">
                <div className="about-two-exact__img-1">
                  <Image src="/wp/about-two-1.jpg" alt="YB Dizayn duvar kagidi uygulamasi" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 40vw" />
                </div>
                <div className="about-two-exact__img-2">
                  <Image src="/wp/about-two-2.jpg" alt="YB Dizayn dekoratif duvar kagidi" fill className="object-cover" sizes="(max-width: 1024px) 50vw, 20vw" />
                </div>
                <div className="about-two-exact__dots">
                  <Image src="/wp/about-two-dots.png" alt="" width={129} height={138} />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="leading-exact">
          <div className="leading-exact__container">
            <h3>İç Mekan Tasarım Pazarında Lideriz</h3>
            <div className="leading-exact__points">
              {features.map((feature, i) => (
                <p key={i}>{feature}</p>
              ))}
            </div>
          </div>
        </section>

        <section className="testimonial-exact">
          <div className="testimonial-exact__container">
            <p className="testimonial-exact__tag">Yorumlar</p>
            <h2>Ne diyorlar?</h2>
            <div className="testimonial-exact__grid">
              {testimonials.map((item, i) => (
                <article key={i} className="testimonial-exact__card">
                  <div className="testimonial-exact__avatar">
                    <Image src={item.image} alt={item.author} fill className="object-cover" sizes="64px" />
                  </div>
                  <p>{item.text}</p>
                  <h4>{item.author}</h4>
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
