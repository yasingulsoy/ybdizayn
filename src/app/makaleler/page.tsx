import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import NewsletterSection from "@/components/NewsletterSection";
import WhatsAppButton from "@/components/WhatsAppButton";
import { getAllArticles } from "@/lib/articles";
import articleImage from "@/lib/tropical-authentic-dining-room-interior-design-with-gallery-wall.webp";
import articleImageAlt from "@/lib/2026Trendi-Duvar-Kağıdı-Modelleri-6.webp";

const articleImages = [articleImage, articleImageAlt];
const BASE_URL = "https://ybdizayn.com";
const DEFAULT_OG_IMAGE = `${BASE_URL}/wp/blog-1.jpg`;

export const metadata: Metadata = {
  title: "Makaleler - YB Dizayn",
  description:
    "Dijital duvar kağıdı ve duvar kağıdı hakkında SEO odaklı rehberler, trendler ve uygulama ipuçları.",
  keywords: ["dijital duvar kağıdı", "duvar kağıdı", "duvar kağıdı rehberi"],
  alternates: {
    canonical: "/makaleler",
  },
  openGraph: {
    title: "Makaleler - YB Dizayn",
    description:
      "Dijital duvar kağıdı ve duvar kağıdı hakkında SEO odaklı rehberler, trendler ve uygulama ipuçları.",
    url: "https://ybdizayn.com/makaleler",
    siteName: "YB Dizayn",
    locale: "tr_TR",
    type: "website",
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "YB Dizayn makaleler sayfasi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Makaleler - YB Dizayn",
    description:
      "Dijital duvar kağıdı ve duvar kağıdı rehberleri ile doğru seçim yapın.",
    images: [DEFAULT_OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function MakalelerPage() {
  const articles = getAllArticles();
  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "YB Dizayn Makaleler",
    itemListElement: articles.map((article, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: `${BASE_URL}/${article.slug}`,
      name: article.title,
    })),
  };

  return (
    <>
      <Header />
      <main>
        <PageHeader title="Makaleler" subtitle="Duvar kağıdı ve dijital duvar kağıdı rehberleri" />

        <section className="py-16 md:py-20 bg-[#f8f6f5]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {articles.map((article, index) => (
                <article
                  key={article.slug}
                  className="rounded-2xl border border-[#3c3531]/10 bg-white overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="relative aspect-[16/10]">
                    <Image
                      src={articleImages[index % articleImages.length]}
                      alt={article.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 33vw"
                    />
                  </div>
                  <div className="p-6">
                    <div className="text-xs uppercase tracking-wider text-[#a47c58]">
                      {article.publishDate} • {article.readTime}
                    </div>
                    <h2 className="mt-3 text-xl font-semibold text-[#3c3531] min-h-[84px]">
                      {article.title}
                    </h2>
                    <p className="mt-3 text-[#3c3531]/80 text-sm">{article.description}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {article.keywords.slice(0, 2).map((keyword) => (
                        <span
                          key={keyword}
                          className="rounded-full bg-[#a47c58]/15 px-3 py-1 text-xs font-medium text-[#3c3531]"
                        >
                          {keyword}
                        </span>
                      ))}
                    </div>
                    <Link
                      href={`/${article.slug}`}
                      className="inline-flex items-center mt-5 text-sm font-semibold text-[#a47c58] hover:underline"
                    >
                      Makaleyi oku
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
        />
      </main>
      <NewsletterSection />
      <Footer />
      <WhatsAppButton />
    </>
  );
}
