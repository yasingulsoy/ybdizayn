import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});
const DEFAULT_OG_IMAGE = "https://ybdizayn.com/wp/blog-1.jpg";

export const metadata: Metadata = {
  title: "YB Dizayn | Kaliteli Duvar Kağıtları - Digital Print Wallpapers",
  description: "YB Dizayn - Ümraniye/İstanbul. Kaliteli dijital baskı duvar kağıtları. Profesyonel duvar kağıdı çözümleri.",
  metadataBase: new URL("https://ybdizayn.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "YB Dizayn | Kaliteli Duvar Kağıtları - Digital Print Wallpapers",
    description:
      "YB Dizayn - Ümraniye/İstanbul. Kaliteli dijital baskı duvar kağıtları. Profesyonel duvar kağıdı çözümleri.",
    url: "https://ybdizayn.com",
    siteName: "YB Dizayn",
    locale: "tr_TR",
    type: "website",
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "YB Dizayn duvar kagidi koleksiyonu",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "YB Dizayn | Kaliteli Duvar Kağıtları",
    description:
      "YB Dizayn ile dijital duvar kağıdı ve duvar kağıdı çözümlerini keşfedin.",
    images: [DEFAULT_OG_IMAGE],
  },
  icons: {
    icon: "/logon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="scroll-smooth">
      <body
        className={`${poppins.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
