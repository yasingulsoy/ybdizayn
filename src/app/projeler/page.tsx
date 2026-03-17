import Image from "next/image";
import type { Metadata } from "next";
import Header from "@/components/Header";
import PageHeader from "@/components/PageHeader";
import NewsletterSection from "@/components/NewsletterSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Projeler - YB Dizayn",
  description: "YB Dizayn projeleri - Karakter duvar kağıtları, çocuk odaları, kurumsal ve tekstil duvar kağıtları.",
};

const projects = [
  {
    title: "Karakter Duvar Kağıtları",
    description: "Lorem ipsum is simply free text used by copytyping refreshing. Neque",
    image: "/wp/proje-karakter.jpg",
  },
  {
    title: "Çocuk Odaları",
    description: "",
    image: "/wp/proje-cocuk.jpg",
  },
  {
    title: "Kurumsal Duvar Kağıtları",
    description: "",
    image: "/wp/kurumsal-duvar-kagitlari.jpg",
  },
  {
    title: "Tekstil Duvar Kağıtları",
    description: "",
    image: "/wp/tekstil-duvar-kagitlari.jpg",
  },
];

export default function ProjelerPage() {
  const activeProject = projects[0];

  return (
    <>
      <Header />
      <main>
        <PageHeader title="Projeler" />

        <section className="project-page-exact">
          <div className="project-page-exact__container">
            <div className="project-page-exact__main">
              <div className="project-page-exact__image-wrap">
                <Image src={activeProject.image} alt={activeProject.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 60vw" />
              </div>
              <div className="project-page-exact__content-wrap">
                <div className="project-page-exact__shape">
                  <Image src="/wp/project-one-shape-1.png" alt="" width={154} height={157} />
                </div>
                <div className="project-page-exact__content">
                  <h3>{activeProject.title}</h3>
                  {activeProject.description && <p>{activeProject.description}</p>}
                  <a href="#">Read More About</a>
                </div>
              </div>
            </div>

            <div className="project-page-exact__thumbs">
              {projects.map((project, i) => (
                <div key={project.title} className={`project-page-exact__thumb ${i === 0 ? "is-active" : ""}`} aria-label={project.title}>
                  <Image src={project.image} alt={project.title} fill className="object-cover" sizes="130px" />
                </div>
              ))}
            </div>

            <div className="project-page-exact__more">
              <p>
                Size hizmet etmeye her zaman hazırız. <a href="/projeler">Daha fazla projeler göster</a>
              </p>
            </div>
          </div>
        </section>
      </main>
      <NewsletterSection />
      <Footer />
      <WhatsAppButton />
    </>
  );
}
