import Image from "next/image";
import type { Metadata } from "next";
import Header from "@/components/Header";
import PageHeader from "@/components/PageHeader";
import NewsletterSection from "@/components/NewsletterSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "İletişim - YB Dizayn",
  description: "YB Dizayn iletişim bilgileri. Telefon: +90 530 240 71 61, E-posta: info@ybdizayn.com, Adres: Ümraniye/İstanbul",
};

export default function IletisimPage() {
  return (
    <>
      <Header />
      <main>
        <PageHeader title="İletişim" />

        <section className="contact-exact">
          <div className="contact-exact__shape">
            <Image src="/wp/contact-page-shape-1.png" alt="" width={451} height={679} />
          </div>
          <div className="contact-exact__container">
            <div className="contact-exact__grid">
              <div className="contact-exact__left">
                <span className="contact-exact__tag">Bize Ulaşın</span>
                <form className="contact-exact__form">
                  <div className="contact-exact__row">
                    <input type="text" placeholder="İsim" />
                    <input type="email" placeholder="Email adres" />
                  </div>
                  <div className="contact-exact__row">
                    <input type="text" placeholder="Telefon numarası" />
                    <input type="text" placeholder="Konu" />
                  </div>
                  <textarea placeholder="Bir mesaj yazın" />
                  <button type="submit">Gönder</button>
                </form>
              </div>
              <div className="contact-exact__right">
                <div className="contact-exact__details">
                  <ul>
                    <li><span>Telefon</span><p><a href="tel:+905302407161">+90 530 240 71 61</a></p></li>
                    <li><span>E-mail</span><p><a href="mailto:info@ybdizayn.com">info@ybdizayn.com</a></p></li>
                    <li><span>Adres</span><p>Adem Yavuz Mah. Barışık Sk. No:6 Ümraniye/İSTANBUL</p></li>
                  </ul>
                  <div className="contact-exact__social">
                    <a href="https://www.facebook.com/p/YB-Dizayn-100068664020648/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">f</a>
                    <a href="https://www.instagram.com/ybdizaynn/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">i</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="contact-exact__map">
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3012.123!2d29.1555283!3d41.0177819!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cacf272443d8c9%3A0x26a2b384e4245346!2sAdem%20Yavuz%2C%20Bar%C4%B1%C5%9F%20Sk.%20No%3A6%2C%2034773%20Dudullu%20Osb%2F%C3%9Cmraniye%2F%C4%B0stanbul!5e0!3m2!1str!2str!4v1700000000000!5m2!1str!2str"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="YB Dizayn Konum - Adem Yavuz Mah. Barışık Sk. No:6 Ümraniye/İstanbul"
            />
          </div>
        </section>
      </main>
      <NewsletterSection />
      <Footer />
      <WhatsAppButton />
    </>
  );
}
