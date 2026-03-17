export default function NewsletterSection() {
  return (
    <section className="newsletter-exact">
      <div className="newsletter-exact__container">
        <div className="newsletter-exact__inner">
          <div className="newsletter-exact__shape" />
          <div className="newsletter-exact__left">
            <h3 className="newsletter-exact__title">Bültenimize Katılın</h3>
          </div>
          <div className="newsletter-exact__right">
            <form className="newsletter-exact__form">
              <input type="email" placeholder="E-postanızı giriniz" />
              <button type="submit">Abone</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
