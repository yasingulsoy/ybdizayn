import Image from "next/image";
import Link from "next/link";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

export default function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <section className="page-header-exact">
      <div className="page-header-exact__bg">
        <Image src="/wp/page-header-bg.jpg" alt="" fill className="object-cover" priority sizes="100vw" />
      </div>
      <div className="page-header-exact__container">
        <div className="page-header-exact__inner">
          <ul className="page-header-exact__breadcrumb">
            <li>
              <Link href="/">Ev</Link>
            </li>
            <li>{title}</li>
          </ul>
          <h1>{title}</h1>
          {subtitle && <p className="page-header-exact__subtitle">{subtitle}</p>}
        </div>
      </div>
    </section>
  );
}
