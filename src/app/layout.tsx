import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import "./globals.css";

const lexend = Lexend({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Amerika'da Doktor Olmak - USCAMP Webinar",
  description:
    "USMLE sürecinden MATCH başvurusuna, ABD'de doktor olma yolculuğunuzun her adımını uzmanlarından öğrenin.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" className={lexend.className}>
      <body>{children}</body>
    </html>
  );
}
