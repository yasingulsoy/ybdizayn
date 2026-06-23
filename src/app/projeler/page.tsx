import type { Metadata } from "next";
import Header from "@/components/Header";
import PageHeader from "@/components/PageHeader";
import ProjectGallery from "@/components/ProjectGallery";
import NewsletterSection from "@/components/NewsletterSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Projeler - YB Dizayn",
  description:
    "YB Dizayn duvar kağıdı üretimi ve proje bazlı uygulamalar: otel, hastane ve kurumsal mekanlarda tekstil tabanlı çözümler.",
  alternates: {
    canonical: "/projeler",
  },
};

export default function ProjelerPage() {
  return (
    <>
      <Header />
      <main>
        <PageHeader title="Projeler" subtitle="Üretim ve proje bazlı duvar kağıdı çözümleri" />
        <ProjectGallery />
      </main>
      <NewsletterSection />
      <Footer />
      <WhatsAppButton />
    </>
  );
}
