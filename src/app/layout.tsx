import type { Metadata } from "next";
import { Suspense } from "react";
import { Playfair_Display, Noto_Sans_SC } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/Navigation";
import { Preloader } from "@/components/Preloader";
import { PageTransition } from "@/components/PageTransition";
import { TransitionOverlay } from "@/components/TransitionOverlay";
import { Footer } from "@/components/Footer";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const notoSans = Noto_Sans_SC({
  variable: "--font-noto-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: "ADDA Architecture",
  description: "邸岸空间建筑设计 — Elevating Spaces, Defining Aesthetics",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="zh"
      className={`${playfair.variable} ${notoSans.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <Preloader />
        <TransitionOverlay />
        <Suspense fallback={null}><Navigation /></Suspense>
        <main className="flex-1"><PageTransition><Suspense fallback={null}>{children}</Suspense></PageTransition></main>
        <Footer />
      </body>
    </html>
  );
}
