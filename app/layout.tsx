import type { Metadata } from "next";
import { Barlow, Oswald } from "next/font/google";
import "./globals.css";

const barlow = Barlow({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-barlow" });
const oswald = Oswald({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-oswald" });

export const metadata: Metadata = {
  title: "Flamme & Fleisch – Grill & BBQ Ratgeber",
  description: "Dein unabhängiger Ratgeber für Grills, Smoker und BBQ-Zubehör.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body className={`${barlow.variable} ${oswald.variable}`}>{children}</body>
    </html>
  );
}
