import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "BBQ Ratgeber – Tipps & Kaufberatung | Flamme & Fleisch",
  description:
    "Alles rund ums Grillen und Smoken: Kaufberatungen, Techniken, Rezepttipps und mehr.",
};

const ARTIKEL = [
  {
    emoji: "🐷",
    title: "Spanferkel am Spieß – die ultimative Anleitung",
    excerpt:
      "Du hast dir gerade einen Spanferkel-Spieß gekauft und weißt nicht genau wo du anfangen sollst? Wir führen dich durch den kompletten Prozess.",
    href: "/ratgeber/spanferkel",
    tag: "Technik",
    readTime: "12 Min.",
  },
  {
    emoji: "🥩",
    title: "Low & Slow: Brisket richtig smoken",
    excerpt:
      "Das amerikanische BBQ-Brisket ist die Königsdisziplin. Wir zeigen dir Schritt für Schritt, wie du es perfekt hinbekommst.",
    href: "/ratgeber/low-and-slow",
    tag: "Technik",
    readTime: "15 Min.",
  },
  {
    emoji: "🛒",
    title: "Smoker kaufen 2024 – worauf wirklich ankommt",
    excerpt:
      "Offset, Water, Pellet oder Kamado? Wir erklären die Unterschiede und helfen dir, den richtigen Smoker für dein Budget zu finden.",
    href: "/ratgeber/smoker-kaufberatung",
    tag: "Kaufberatung",
    readTime: "10 Min.",
  },
  {
    emoji: "🔥",
    title: "Gasgrill vs. Holzkohlegrill – was ist besser?",
    excerpt:
      "Der ewige Streit: Welches Grillsystem passt zu dir? Wir vergleichen Vor- und Nachteile ohne Schönfärberei.",
    href: "/ratgeber/gasgrill-vs-holzkohle",
    tag: "Vergleich",
    readTime: "8 Min.",
  },
  {
    emoji: "🌡️",
    title: "Kerntemperatur-Guide: Alles auf den Punkt gegart",
    excerpt:
      "Rind, Schwein, Geflügel, Fisch – mit diesen Kerntemperaturen gelingt dir jedes Grillgut perfekt.",
    href: "/ratgeber/kerntemperatur",
    tag: "Wissen",
    readTime: "6 Min.",
  },
  {
    emoji: "🪵",
    title: "Welches Holz zum Smoken? Die große Übersicht",
    excerpt:
      "Hickory, Kirsche, Apfel oder Mesquite? Das richtige Räucherholz macht den Unterschied. Unser Guide erklärt welches Holz zu welchem Fleisch passt.",
    href: "/ratgeber/raeucherholz",
    tag: "Wissen",
    readTime: "7 Min.",
  },
];

const TAG_COLORS: Record<string, { bg: string; color: string }> = {
  Technik: { bg: "#fff7f4", color: "#e25822" },
  Kaufberatung: { bg: "#f0fdf4", color: "#16a34a" },
  Vergleich: { bg: "#eff6ff", color: "#2563eb" },
  Wissen: { bg: "#fefce8", color: "#ca8a04" },
};

export default function RatgeberPage() {
  return (
    <>
      <Header />
      <main style={{ paddingTop: "70px" }}>
        {/* Header */}
        <section
          style={{
            background: "linear-gradient(135deg, #1a0f0a, #2d1810)",
            padding: "4rem 1.5rem 3rem",
          }}
        >
          <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
            <h1
              style={{
                fontFamily: "var(--font-syne)",
                fontWeight: 800,
                fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
                color: "#fff",
                marginBottom: "0.75rem",
              }}
            >
              BBQ Ratgeber & Tipps
            </h1>
            <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "1rem", maxWidth: "520px" }}>
              Von der Kaufberatung bis zur Profi-Technik – alles was du für
              unvergessliche Grillabende brauchst.
            </p>
          </div>
        </section>

        {/* Artikel */}
        <section style={{ padding: "4rem 1.5rem" }}>
          <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
                gap: "1.5rem",
              }}
            >
              {ARTIKEL.map((artikel) => {
                const tagStyle = TAG_COLORS[artikel.tag] || { bg: "#f9fafb", color: "#374151" };
                return (
                  <Link
                    key={artikel.href}
                    href={artikel.href}
                    style={{ textDecoration: "none" }}
                  >
                    <div
                      className="card"
                      style={{ padding: "1.5rem", height: "100%", display: "flex", flexDirection: "column", gap: "0.875rem" }}
                    >
                      <div style={{ fontSize: "2.5rem" }}>{artikel.emoji}</div>
                      <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
                        <span
                          style={{
                            fontSize: "0.72rem",
                            fontWeight: 700,
                            background: tagStyle.bg,
                            color: tagStyle.color,
                            padding: "0.2rem 0.6rem",
                            borderRadius: "100px",
                          }}
                        >
                          {artikel.tag}
                        </span>
                        <span style={{ fontSize: "0.78rem", color: "#9ca3af" }}>
                          {artikel.readTime} Lesezeit
                        </span>
                      </div>
                      <h2
                        style={{
                          fontFamily: "var(--font-syne)",
                          fontWeight: 700,
                          fontSize: "1.05rem",
                          color: "#1a0f0a",
                          lineHeight: 1.4,
                        }}
                      >
                        {artikel.title}
                      </h2>
                      <p style={{ fontSize: "0.875rem", color: "#6b7280", lineHeight: 1.6, flex: 1 }}>
                        {artikel.excerpt}
                      </p>
                      <span style={{ color: "#e25822", fontWeight: 600, fontSize: "0.875rem" }}>
                        Weiterlesen →
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
