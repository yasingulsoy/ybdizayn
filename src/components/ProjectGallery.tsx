"use client";

import Link from "next/link";
import { useState } from "react";

const projects = [
  {
    title: "Otel Projeleri",
    description:
      "Lobi, koridor ve oda ölçeklerinde dijital baskı duvar kağıdı ile otel markanıza uygun atmosfer. Proje bazlı ölçüm, desen ve üretim koordinasyonu; teslimat ve uygulama süreçlerini tek çatı altında yönetiyoruz.",
  },
  {
    title: "Hastane ve Sağlık Tesisleri",
    description:
      "Hasta ve ziyaretçi alanlarında sakinleştirici görsel dil, yönlendirme ve kurumsal kimliğe uyum. Sağlık sektörüne özgü temizlenebilir, dayanıklı tekstil tabanlı duvar kağıdı çözümleriyle proje gereksinimlerinize göre üretim yapıyoruz.",
  },
  {
    title: "Kurumsal ve Ticari Mekanlar",
    description:
      "Ofis, mağaza, eğitim ve sosyal tesislerde marka veya mimari projeye özel duvar kağıdı. Seri veya özel ölçü üretimle büyük metrajlı işlerde parti ve tutarlılık planlaması sunuyoruz.",
  },
  {
    title: "Üretim ve Proje Uygulaması",
    description:
      "YB Dizayn’ın odağı dijital baskı duvar kağıdı üretimi ve sahada proje bazlı uygulamadır. Tasarımdan metraja, baskıdan sevkiyata kadar her adımı projenizin ölçeğine göre kurgularız.",
  },
];

export default function ProjectGallery() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeProject = projects[activeIndex];

  return (
    <section className="project-page-exact">
      <div className="project-page-exact__container">
        <p className="project-page-exact__intro">
          YB Dizayn; duvar kağıdı üretimi ve proje bazlı işler üzerinde çalışır. Otel ve hastane projelerinde
          deneyimliyiz; diğer kurumsal mekanlarda da aynı üretim disiplini ve proje yaklaşımıyla hizmet veririz.
        </p>

        <div className="project-page-exact__tabs" role="tablist" aria-label="Proje kategorileri">
          {projects.map((project, i) => (
            <button
              key={project.title}
              type="button"
              role="tab"
              id={`project-tab-${i}`}
              aria-selected={i === activeIndex}
              aria-controls={`project-panel-${i}`}
              onClick={() => setActiveIndex(i)}
              className={`project-page-exact__tab ${i === activeIndex ? "is-active" : ""}`}
            >
              {project.title}
            </button>
          ))}
        </div>

        <div
          className="project-page-exact__content"
          role="tabpanel"
          id={`project-panel-${activeIndex}`}
          aria-labelledby={`project-tab-${activeIndex}`}
        >
          <h3>{activeProject.title}</h3>
          {activeProject.description && <p>{activeProject.description}</p>}
          <Link href="/iletisim">Detaylı Bilgi</Link>
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
