import Image from "next/image";
import Link from "next/link";

const menuLinks = [
  { href: "/", label: "Anasayfa" },
  { href: "/makaleler", label: "Makaleler" },
  { href: "/sss", label: "SSS" },
  { href: "/hakkimizda", label: "Hakkımızda" },
  { href: "/projeler", label: "Projeler" },
  { href: "/sertifikalar", label: "Sertifikalar" },
  { href: "/iletisim", label: "İletişim" },
];

export default function Footer() {
  return (
    <footer className="footer-exact">
      <div className="footer-exact__container">
        <div className="footer-exact__top">
          <div>
            <Link href="/" className="footer-exact__logo">
              <Image src="/logon.png" alt="YB Dizayn" width={90} height={90} />
            </Link>
            <p className="footer-exact__about">
              Tüm duvarlar YB Dizayn koleksiyonlarıyla güzelleşiyor. Konut, otel, okul, hastane, sosyal tesisler ve daha pek çok farklı proje YB Dizayn&apos;ın birbirinden şık duvar kağıtlarını tercih ediyor. Tekstil tabanlı duvar kağıdı uygulamalarında kullanılır.
            </p>
          </div>

          <div>
            <h3 className="footer-exact__title">Menü</h3>
            <ul className="footer-exact__menu">
              {menuLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="footer-exact__title">İletişim</h3>
            <ul className="footer-exact__contact">
              <li>
                <span>Telefon:</span>{" "}
                <a href="tel:+905302407161">
                  +90 530 240 71 61
                </a>
              </li>
              <li>
                <span>E-mail:</span>{" "}
                <a href="mailto:info@ybdizayn.com">
                  info@ybdizayn.com
                </a>
              </li>
              <li>
                <span>Adres:</span> Adem Yavuz Mah. Barışık Sk. No:6 Ümraniye/İSTANBUL
              </li>
            </ul>
          </div>

          <div>
            <h3 className="footer-exact__title">Sosyal Medya</h3>
            <div className="footer-exact__social">
              <a href="https://www.facebook.com/p/YB-Dizayn-100068664020648/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">f</a>
              <a href="https://www.instagram.com/ybdizaynn/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">i</a>
            </div>
            <form className="footer-exact__mini-news">
              <input type="email" placeholder="E-postanızı giriniz" />
              <button type="submit">Abone</button>
            </form>
          </div>
        </div>

        <div className="footer-exact__bottom">
          © Copyright {new Date().getFullYear()} YB Dizayn. Tüm hakları saklıdır.
        </div>
      </div>
    </footer>
  );
}
