import type { Metadata } from "next";
import Header from "@/components/Header";
import PageHeader from "@/components/PageHeader";
import ProjectGallery from "@/components/ProjectGallery";
import NewsletterSection from "@/components/NewsletterSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Projeler - YB Dizayn",
  description: "YB Dizayn projeleri - Karakter duvar kağıtları, çocuk odaları, kurumsal ve tekstil duvar kağıtları.",
};

export default function ProjelerPage() {
  return (
    <>
      <Header />
      <main>
        <PageHeader title="Projeler" subtitle="Duvar kağıdı projelerimiz" />
        <ProjectGallery />
      </main>
      <NewsletterSection />
      <Footer />
      <WhatsAppButton />
    </>
  );
}
