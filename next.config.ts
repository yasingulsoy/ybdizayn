import type { NextConfig } from "next";

/**
 * Redirect map for legacy URLs left over from the previous WordPress (Dfd theme
 * + WooCommerce) and pre-WordPress PHP sites. Google still reports ~66 of these
 * as "Not found (404)", which wastes crawl budget and starves the real content.
 *
 * Only URLs with a genuine topical equivalent are redirected. Deliberately NOT
 * redirected (they stay 404, which is the correct answer for a page that no
 * longer exists — sending them somewhere unrelated creates soft-404s):
 *   - WooCommerce demo products/pages: /urun/*, /urun-kategori/*, /magaza,
 *     /sepet, /odeme, /hesabim, /my-account, /wishlist*, /ambed-shop
 *   - Theme scaffold pages: /home-*, /one-page-home-*, /header/*, /footer/*,
 *     /megamenu/*, /sample-page*, /thirty-eighth
 *   - Admin & exploit probes: /wp-login.php, /akd-admin, /revslider/*,
 *     /cgi-sys/*, /home/ybdizayn
 */
const legacyRedirects: [string, string][] = [
  // Contact
  ["/iletisim.php", "/iletisim"],
  ["/mail-yardim.html", "/iletisim"],

  // FAQ
  ["/faqs", "/sss"],

  // About / company
  ["/about-me-2", "/hakkimizda"],
  ["/aciklama", "/hakkimizda"],
  ["/aciklama.php", "/hakkimizda"],
  ["/tescil-bilgiler.html", "/hakkimizda"],
  ["/team", "/hakkimizda"],
  ["/team-carousel", "/hakkimizda"],
  ["/team-details", "/hakkimizda"],
  ["/testimonials", "/hakkimizda"],
  ["/testimonials-carousel", "/hakkimizda"],

  // Articles — topical match where one exists
  ["/learn-the-right-way-to-use-wall-sheet", "/duvar-kagidinizi-kendiniz-yapin"],
  ["/capitalize-on-low-hanging-fruit", "/makaleler"],
  ["/blog-carousel", "/makaleler"],
  ["/blog-grid", "/makaleler"],
  ["/blog-sidebar", "/makaleler"],
  ["/blog-sidebar-02", "/makaleler"],

  // Brand / collection pages
  ["/domina-duvar-kagitlari", "/projeler"],
  ["/domina-duvar-kagitlari.php", "/projeler"],
  ["/len-tex-duvar-kagitlari", "/projeler"],
  ["/len-tex-duvar-kagitlari.php", "/projeler"],
  ["/seabrook-duvar-kagitlari", "/projeler"],
  ["/villa-borghese.php", "/projeler"],
  ["/loreana.php", "/projeler"],
  ["/scarlet.php", "/projeler"],
  ["/angel.php", "/projeler"],
  ["/vip.php", "/projeler"],

  // Gallery / portfolio / service landing pages
  ["/galeri", "/projeler"],
  ["/gallery", "/projeler"],
  ["/gallery-crea", "/projeler"],
  ["/gallery-crea.php", "/projeler"],
  ["/gallery-advanced", "/projeler"],
  ["/gallery-carousel", "/projeler"],
  ["/gallery-module", "/projeler"],
  ["/full-screen-portfolio", "/projeler"],
  ["/portfolio-advanced", "/projeler"],
  ["/portfolio-metro", "/projeler"],
  ["/portfolio-module", "/projeler"],
  ["/projects-carousel", "/projeler"],
  ["/services", "/projeler"],
  ["/services-carousel", "/projeler"],
  ["/interior-designing", "/projeler"],
  ["/outdoor-design", "/projeler"],
  ["/room-wallpapers", "/projeler"],
  ["/wall-sheets", "/projeler"],
  ["/wall-painting", "/projeler"],
  ["/pvc-panels", "/projeler"],
];

/** WordPress archive/taxonomy trees — collapse the whole subtree. */
const legacyWildcards: [string, string][] = [
  ["/gallery/:path*", "/projeler"],
  ["/gallery_tags/:path*", "/projeler"],
  ["/portfolio/:path*", "/projeler"],
  ["/portfolio_category/:path*", "/projeler"],
  ["/portfolio_tags/:path*", "/projeler"],
  ["/project/:path*", "/projeler"],
  ["/project_cat/:path*", "/projeler"],
  ["/project_tag/:path*", "/projeler"],
  ["/category/:path*", "/makaleler"],
  ["/tag/:path*", "/makaleler"],
  ["/author/:path*", "/makaleler"],
];

const nextConfig: NextConfig = {
  async redirects() {
    return [...legacyRedirects, ...legacyWildcards].map(
      ([source, destination]) => ({ source, destination, permanent: true }),
    );
  },
};

export default nextConfig;
