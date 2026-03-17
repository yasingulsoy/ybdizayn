import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "YB Dizayn | Kaliteli Duvar Kağıtları - Digital Print Wallpapers",
  description: "YB Dizayn - Ümraniye/İstanbul. Kaliteli dijital baskı duvar kağıtları. Profesyonel duvar kağıdı çözümleri.",
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
