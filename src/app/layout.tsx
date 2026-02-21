import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Wisepen Language Institute | 와이스펜 어학원",
  description:
    "와이스펜 어학원 - 비판적 읽기, 문법, 구조화된 창의적 에세이 작성에 초점을 맞춘 프리미엄 영어 교육",
  keywords: "영어학원, 일산, 와이스펜, 어학원, 영어교육, TOEFL, SAT",
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "Wisepen Language Institute | 와이스펜 어학원",
    description: "완전한 이해와 숙달을 우선시하는 프리미엄 영어 교육",
    type: "website",
    locale: "ko_KR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="scroll-smooth">
      <body
        className={`${playfair.variable} ${inter.variable} font-[GmarketSans,var(--font-inter),sans-serif] antialiased`}
      >
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
