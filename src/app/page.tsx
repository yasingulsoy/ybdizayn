import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import InfoBoxSection from "@/components/InfoBoxSection";
import QualityWorkSection from "@/components/QualityWorkSection";
import ProjectsSection from "@/components/ProjectsSection";
import BlogSection from "@/components/BlogSection";
import KatalogBanner from "@/components/KatalogBanner";
import WhyChooseSection from "@/components/WhyChooseSection";
import NewsletterSection from "@/components/NewsletterSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Header />
      <main className="overflow-x-hidden">
        <Hero />
        <AboutSection />
        <InfoBoxSection />
        <QualityWorkSection />
        <ProjectsSection />
        <BlogSection />
        <KatalogBanner />
        <WhyChooseSection />
      </main>
      <NewsletterSection />
      <Footer />
      <WhatsAppButton />
    </>
  );
}
