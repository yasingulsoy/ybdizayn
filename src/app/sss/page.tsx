import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import PageHeader from "@/components/PageHeader";
import NewsletterSection from "@/components/NewsletterSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { getCommonFaqs } from "@/lib/articles";

const BASE_URL = "https://ybdizayn.com";
const DEFAULT_OG_IMAGE = `${BASE_URL}/wp/blog-2.jpg`;

export const metadata: Metadata = {
  title: "SSS - YB Dizayn",
  description:
    "Dijital duvar kağıdı ve duvar kağıdı hakkında en çok sorulan sorular: uygulama, fiyat, bakım ve seçim rehberi.",
  keywords: ["sss", "dijital duvar kağıdı", "duvar kağıdı", "en çok sorulan sorular"],
  alternates: {
    canonical: "/sss",
  },
  openGraph: {
    title: "SSS - YB Dizayn",
    description:
      "Dijital duvar kağıdı ve duvar kağıdı hakkında en çok sorulan soruların cevapları.",
    url: `${BASE_URL}/sss`,
    siteName: "YB Dizayn",
    locale: "tr_TR",
    type: "website",
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "YB Dizayn SSS sayfasi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SSS - YB Dizayn",
    description:
      "Duvar kağıdı ve dijital duvar kağıdı ile ilgili en çok sorulan sorulara hızlı cevaplar.",
    images: [DEFAULT_OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function SssPage() {
  const faqs = getCommonFaqs();
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <Header />
      <main>
        <PageHeader title="SSS" subtitle="En cok sorulan sorular" />
        <section className="py-16 md:py-20 bg-[#f8f6f5]">
          <div className="mx-auto max-w-4xl px-4 sm:px-6">
            <div className="rounded-2xl bg-white border border-[#3c3531]/10 p-6 md:p-10 shadow-sm">
              <h1 className="text-3xl md:text-4xl font-bold text-[#3c3531] mb-6">
                Duvar Kagidi SSS
              </h1>
              <p className="text-[#3c3531]/80 mb-8">
                Asagida dijital duvar kagidi ve duvar kagidi ile ilgili en cok sorulan sorulari
                bulabilirsiniz.
              </p>
              <div className="mb-8 rounded-xl border border-[#a47c58]/30 bg-[#f8f6f5] p-5 text-[#3c3531]/85 leading-7">
                <p>
                  Bu SSS sayfasi, Google aramalarinda kullanicilarin en cok sordugu dijital duvar
                  kagidi ve duvar kagidi sorularina kisa ve net yanitlar vermek icin hazirlandi.
                  Daha detayli uygulama rehberleri icin{" "}
                  <Link href="/makaleler" className="font-semibold text-[#a47c58] hover:underline">
                    makaleler
                  </Link>{" "}
                  bolumune gecebilirsiniz.
                </p>
                <p className="mt-3">
                  Trend ve dekorasyon ilhami icin{" "}
                  <a
                    href="https://dekoartizan.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-[#a47c58] hover:underline"
                  >
                    dekoartizan.com
                  </a>{" "}
                  baglantisini da inceleyebilirsiniz.
                </p>
              </div>
              <div className="space-y-4">
                {faqs.map((item) => (
                  <details
                    key={item.question}
                    className="rounded-xl border border-[#3c3531]/15 bg-white p-5"
                  >
                    <summary className="cursor-pointer font-semibold text-[#3c3531]">
                      {item.question}
                    </summary>
                    <p className="mt-3 text-[#3c3531]/85">{item.answer}</p>
                  </details>
                ))}
              </div>
              <div className="mt-10 rounded-xl border border-[#3c3531]/15 p-5">
                <h2 className="text-xl font-semibold text-[#3c3531] mb-2">
                  Duvar Kagidi Seciminde Kisa Ozet
                </h2>
                <p className="text-[#3c3531]/85">
                  Dogru olcu, uygun yuzey hazirligi ve kaliteli malzeme secimi; duvar kagidi
                  uygulamasinda en kritik uc basliktir. Dijital duvar kagidi tercihinde desen
                  olcegi ve mekan isigi birlikte degerlendirilmelidir.
                </p>
              </div>
            </div>
          </div>
        </section>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      </main>
      <NewsletterSection />
      <Footer />
      <WhatsAppButton />
    </>
  );
}
