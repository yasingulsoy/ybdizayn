import Image from "next/image";
import Link from "next/link";
import { getAllArticles } from "@/lib/articles";
import articleImage from "@/lib/tropical-authentic-dining-room-interior-design-with-gallery-wall.webp";
import articleImageAlt from "@/lib/2026Trendi-Duvar-Kağıdı-Modelleri-6.webp";

const articleImages = [articleImage, articleImageAlt];

export default function BlogSection() {
  const posts = getAllArticles().slice(0, 3);

  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center mb-12">
          <span className="text-[#a47c58] font-medium tracking-wider text-sm uppercase block mb-3">
            Haberler & Güncellemeler
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#3c3531] mb-4">
            Haberler & Makaleler
          </h2>
          <div className="w-20 h-1 bg-[#a47c58] mx-auto mt-4" />
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {posts.map((post, index) => (
            <article
              key={post.slug}
              className="group bg-white rounded-2xl overflow-hidden border border-[#3c3531]/10 hover:shadow-xl hover:border-[#a47c58]/30 transition-all duration-300"
            >
              <Link href={`/${post.slug}`} className="block">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={articleImages[index % articleImages.length]}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-[#3c3531]">
                    {post.publishDate}
                  </span>
                  <span className="absolute inset-0 flex items-center justify-center bg-[#3c3531]/0 group-hover:bg-[#3c3531]/20 transition-colors">
                    <span className="w-12 h-12 rounded-full bg-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <svg className="w-6 h-6 text-[#a47c58]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                      </svg>
                    </span>
                  </span>
                </div>
                <div className="p-6">
                  <p className="text-sm text-[#3c3531]/60 mb-2">YB Dizayn</p>
                  <h3 className="text-lg font-semibold text-[#3c3531] group-hover:text-[#a47c58] transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
