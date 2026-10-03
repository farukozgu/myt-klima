import { globalMetadata, organizationSchema } from "./seo";
import JsonLd from "./json-ld";
import { Outfit } from "next/font/google";
import "./globals.css";
import MotionRoot from "./motion-root";

const outfit = Outfit({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin", "latin-ext"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata = globalMetadata;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="tr"
      className={`${outfit.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col"><JsonLd data={organizationSchema} /><MotionRoot />{children}</body>
    </html>
  );
}
