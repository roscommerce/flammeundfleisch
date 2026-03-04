import type { Metadata } from "next";
import { Inter, Syne } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const syne = Syne({ subsets: ["latin"], variable: "--font-syne" });

export const metadata: Metadata = {
  title: "Flamme & Fleisch – Grill & BBQ Ratgeber",
  description:
    "Dein unabhängiger Ratgeber für Grills, Smoker und BBQ-Zubehör. Echte Erfahrungen, ehrliche Vergleiche, die besten Deals.",
  keywords: "Grill, Smoker, BBQ, Barbecue, Grill Kaufberatung, Smoker Test, Grillzubehör",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body className={`${inter.variable} ${syne.variable}`}>{children}</body>
    </html>
  );
}
