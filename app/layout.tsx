import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import MotionRoot from "./motion-root";

const outfit = Outfit({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin", "latin-ext"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "MYT Klima | Klima Satışı, Montaj ve Teknik Servis",
  description:
    "Eviniz veya iş yeriniz için klima seçimi, montaj, bakım ve teknik servis. MYT Klima.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="tr"
      className={`${outfit.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col"><MotionRoot />{children}</body>
    </html>
  );
}
