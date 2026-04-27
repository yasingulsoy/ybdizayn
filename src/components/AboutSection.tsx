import Image from "next/image";
export default function AboutSection() {
  return (
    <section className="about-exact">
      <div className="about-exact__shape-circle" />
      <div className="about-exact__wall">
        <Image src="/wp/about-one-wall.png" alt="" width={875} height={589} />
      </div>
      <div className="about-exact__overlay" />

      <div className="about-exact__container">
        <div className="about-exact__grid">
          <div className="about-exact__left">
            <p className="about-exact__tag">Hakkımızda</p>
            <h2 className="about-exact__title">Kaliteli Duvar Kağıdı Tasarımları Sunuyoruz</h2>
            <p className="about-exact__text-1">Size daha kaliteli sonuçlar vermek için 5 yılı aşkın deneyime sahibiz.</p>

            <ul className="about-exact__points">
              <li>
                <div className="about-exact__point-box">
                  <span className="about-exact__point-icon">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </span>
                  <p className="about-exact__point-text">Akıllı ve Benzersiz Duvar Kağıdı Çalışması</p>
                </div>
              </li>
              <li>
                <div className="about-exact__point-box">
                  <span className="about-exact__point-icon">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 00-4.438 0 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </span>
                  <p className="about-exact__point-text">Standartlarımız Yüksek Kalitededir</p>
                </div>
              </li>
            </ul>

            <p className="about-exact__text-2">
              Artık evler, oteller, hastaneler, sosyal tesisler YB Dizayn koleksiyonları ile güzelleşiyor. Misafirlerinizin rahatı için YB Dizaynın sunduğu tekstil tabanlı duvar kağıdı seçenekleriyle tanışmalısınız.
            </p>

            <div className="about-exact__actions">
              <a href="#" className="about-exact__btn-main">
                Tıklayınız
              </a>
              <a href="tel:+905302407161" className="about-exact__call">
                <span className="about-exact__call-icon">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </span>
                <span className="about-exact__call-text">İletişim +90 530 240 71 61</span>
              </a>
            </div>
          </div>

          <div className="about-exact__right">
            <div className="about-exact__shape-box" />
            <div className="about-exact__img-box">
              <div className="about-exact__img">
                <Image src="/wp/hakkimizdaarkaresim.jpg" alt="YB Dizayn - Duvar kağıdı projeleri" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 45vw" />
              </div>
              <div className="about-exact__dot">
                <Image src="/wp/about-one-dots.png" alt="" width={129} height={138} />
              </div>
              <div className="about-exact__project">
                <span className="about-exact__project-icon">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12l4-4m0 0l4 4m-4-4v10" />
                  </svg>
                </span>
                <div>
                  <h3 className="about-exact__project-number">185</h3>
                  <p className="about-exact__project-text">Başarılı Proje</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
