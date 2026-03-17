"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const projects = [
  {
    title: "Karakter Duvar Kağıtları",
    description: "Çocuk odaları ve özel alanlar için renkli karakter ve tema duvar kağıtları. Sevimli figürlerle mekanlarınıza canlılık katın.",
    image: "/wp/proje-karakter.jpg",
  },
  {
    title: "Çocuk Odaları",
    description: "Çocuklarınız için renkli, eğlenceli ve güvenli duvar kağıdı tasarımları. Hayal gücünü destekleyen desenler.",
    image: "/wp/proje-cocuk.jpg",
  },
  {
    title: "Kurumsal Duvar Kağıtları",
    description: "Ofis, okul, hastane ve kurumsal mekanlar için profesyonel duvar kağıdı çözümleri.",
    image: "/wp/kurumsal-duvar-kagitlari.jpg",
  },
  {
    title: "Tekstil Duvar Kağıtları",
    description: "Tekstil tabanlı, kaliteli ve dayanıklı duvar kağıtları. Uzun ömürlü kullanım için ideal.",
    image: "/wp/tekstil-duvar-kagitlari.jpg",
  },
];

export default function ProjectGallery() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeProject = projects[activeIndex];

  return (
    <section className="project-page-exact">
      <div className="project-page-exact__container">
        <div className="project-page-exact__main">
          <div className="project-page-exact__image-wrap">
            <Image
              src={activeProject.image}
              alt={activeProject.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 60vw"
              priority={activeIndex === 0}
            />
          </div>
          <div className="project-page-exact__content-wrap">
            <div className="project-page-exact__shape">
              <Image src="/wp/project-one-shape-1.png" alt="" width={154} height={157} />
            </div>
            <div className="project-page-exact__content">
              <h3>{activeProject.title}</h3>
              {activeProject.description && <p>{activeProject.description}</p>}
              <Link href="/iletisim">Detaylı Bilgi</Link>
            </div>
          </div>
        </div>

        <div className="project-page-exact__thumbs">
          {projects.map((project, i) => (
            <button
              key={project.title}
              type="button"
              onClick={() => setActiveIndex(i)}
              className={`project-page-exact__thumb ${i === activeIndex ? "is-active" : ""}`}
              aria-label={project.title}
              aria-pressed={i === activeIndex}
            >
              <Image src={project.image} alt={project.title} fill className="object-cover" sizes="130px" />
            </button>
          ))}
        </div>

        <div className="project-page-exact__more">
          <p>
            Size hizmet etmeye her zaman hazırız. <Link href="/iletisim">İletişime geçin</Link>
          </p>
        </div>
      </div>
    </section>
  );
}
