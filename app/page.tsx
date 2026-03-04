import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import ProductCard from "@/components/ProductCard";

const KATEGORIEN = [
  {
    icon: "🔥",
    title: "Gasgrills",
    desc: "Schnell einsatzbereit, perfekte Temperaturkontrolle",
    href: "/grills/gasgrill",
    count: "12 Modelle",
  },
  {
    icon: "🪨",
    title: "Holzkohlegrills",
    desc: "Das Original – für unvergleichliches Raucharoma",
    href: "/grills/holzkohle",
    count: "9 Modelle",
  },
  {
    icon: "💨",
    title: "Offset Smoker",
    desc: "Low & Slow BBQ auf höchstem Niveau",
    href: "/smoker/offset-smoker",
    count: "8 Modelle",
  },
  {
    icon: "🪵",
    title: "Pelletgrills",
    desc: "Automatisches Smoken mit Holzpellets",
    href: "/grills/pelletgrill",
    count: "7 Modelle",
  },
  {
    icon: "🍢",
    title: "Spießsysteme",
    desc: "Spanferkel, Hähnchen & mehr perfekt gegrillt",
    href: "/zubehoer/spiesssysteme",
    count: "6 Produkte",
  },
  {
    icon: "🌡️",
    title: "Grillthermometer",
    desc: "Perfekte Kerntemperatur – immer und überall",
    href: "/zubehoer/thermometer",
    count: "10 Produkte",
  },
];

const TOP_PRODUKTE = [
  {
    name: "Weber Spirit E-315 Gasgrill",
    image: "🔥",
    rating: 4.7,
    reviews: 2840,
    price: "ab 699 €",
    highlight: "Unser Testsieger für Einsteiger & Fortgeschrittene",
    pros: ["3 Edelstahlbrenner", "GS4 Grillsystem", "10 Jahre Garantie"],
    affiliateUrl: "https://amzn.to/XXXXX",
    badge: "🏆 Testsieger",
  },
  {
    name: "Smokey Mountain Cooker 47cm",
    image: "💨",
    rating: 4.8,
    reviews: 1560,
    price: "ab 319 €",
    highlight: "Der beste Einstiegs-Smoker auf dem Markt",
    pros: ["Stabiles Porzellanemaille", "Perfekte Wärmespeicherung", "Großes Fassungsvermögen"],
    affiliateUrl: "https://amzn.to/XXXXX",
    badge: "💡 Empfehlung",
  },
  {
    name: "MEATER+ Grillthermometer",
    image: "🌡️",
    rating: 4.6,
    reviews: 4210,
    price: "ab 89 €",
    highlight: "Kabelloses Thermometer mit App-Anbindung",
    pros: ["Kabellos & wasserdicht", "50m Bluetooth-Reichweite", "Gar-Assistent in der App"],
    affiliateUrl: "https://amzn.to/XXXXX",
  },
];

export default function HomePage() {
  return (
    <>
      <Header />
      <main style={{ paddingTop: "70px" }}>

        {/* Hero */}
        <section
          style={{
            background: "linear-gradient(135deg, #1a0f0a 0%, #2d1810 50%, #3d2010 100%)",
            padding: "5rem 1.5rem 4rem",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Glow */}
          <div
            style={{
              position: "absolute",
              top: "-20%",
              right: "-10%",
              width: "600px",
              height: "600px",
              background: "radial-gradient(circle, rgba(226,88,34,0.2) 0%, transparent 70%)",
              pointerEvents: "none",
            }}
          />
          <div style={{ maxWidth: "1280px", margin: "0 auto", position: "relative" }}>
            <div style={{ maxWidth: "680px" }}>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  background: "rgba(226,88,34,0.15)",
                  border: "1px solid rgba(226,88,34,0.3)",
                  borderRadius: "100px",
                  padding: "0.35rem 1rem",
                  marginBottom: "1.5rem",
                }}
              >
                <span style={{ fontSize: "0.8rem", color: "#e25822", fontWeight: 600 }}>
                  🔥 Unabhängige Grill-Empfehlungen
                </span>
              </div>
              <h1
                style={{
                  fontFamily: "var(--font-syne)",
                  fontWeight: 800,
                  fontSize: "clamp(2rem, 5vw, 3.5rem)",
                  color: "#fff",
                  lineHeight: 1.15,
                  letterSpacing: "-0.03em",
                  marginBottom: "1.25rem",
                }}
              >
                Grillen & Smoken{" "}
                <span style={{ color: "#e25822" }}>auf höchstem Niveau</span>
              </h1>
              <p
                style={{
                  fontSize: "1.1rem",
                  color: "rgba(255,255,255,0.7)",
                  lineHeight: 1.7,
                  marginBottom: "2rem",
                  maxWidth: "560px",
                }}
              >
                Ehrliche Tests, echte Erfahrungen. Wir helfen dir, den richtigen
                Grill oder Smoker zu finden – ohne Marketing-Blabla.
              </p>
              <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                <Link href="/#kategorien" className="btn-primary" style={{ fontSize: "1rem" }}>
                  Grills & Smoker vergleichen
                </Link>
                <Link href="/ratgeber" className="btn-secondary" style={{ fontSize: "1rem", borderColor: "rgba(255,255,255,0.3)", color: "#fff", background: "rgba(255,255,255,0.08)" }}>
                  Ratgeber lesen
                </Link>
              </div>
              <div style={{ display: "flex", gap: "2rem", marginTop: "2.5rem", flexWrap: "wrap" }}>
                {[
                  { value: "50+", label: "Produkte getestet" },
                  { value: "100%", label: "Unabhängig" },
                  { value: "∞", label: "BBQ-Leidenschaft" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <div style={{ fontFamily: "var(--font-syne)", fontWeight: 800, fontSize: "1.5rem", color: "#e25822" }}>
                      {stat.value}
                    </div>
                    <div style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.5)" }}>
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Kategorien */}
        <section id="kategorien" style={{ padding: "5rem 1.5rem", background: "#f9fafb" }}>
          <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "3rem" }}>
              <h2
                style={{
                  fontFamily: "var(--font-syne)",
                  fontWeight: 800,
                  fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
                  color: "#1a0f0a",
                  marginBottom: "0.75rem",
                }}
              >
                Alle Kategorien
              </h2>
              <p style={{ color: "#6b7280", fontSize: "1rem", maxWidth: "500px", margin: "0 auto" }}>
                Vom Gasgrill bis zum Profi-Smoker – hier findest du alles.
              </p>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
                gap: "1.25rem",
              }}
            >
              {KATEGORIEN.map((kat) => (
                <Link
                  key={kat.href}
                  href={kat.href}
                  style={{ textDecoration: "none" }}
                >
                  <div
                    className="card"
                    style={{
                      padding: "1.5rem",
                      display: "flex",
                      gap: "1rem",
                      alignItems: "flex-start",
                      cursor: "pointer",
                    }}
                  >
                    <div
                      style={{
                        fontSize: "2rem",
                        width: "52px",
                        height: "52px",
                        background: "#fff7f4",
                        borderRadius: "12px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      {kat.icon}
                    </div>
                    <div>
                      <h3
                        style={{
                          fontFamily: "var(--font-syne)",
                          fontWeight: 700,
                          fontSize: "1rem",
                          color: "#1a0f0a",
                          marginBottom: "0.25rem",
                        }}
                      >
                        {kat.title}
                      </h3>
                      <p style={{ fontSize: "0.85rem", color: "#6b7280", marginBottom: "0.5rem" }}>
                        {kat.desc}
                      </p>
                      <span style={{ fontSize: "0.78rem", color: "#e25822", fontWeight: 600 }}>
                        {kat.count} →
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Top Produkte */}
        <section style={{ padding: "5rem 1.5rem" }}>
          <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "3rem" }}>
              <h2
                style={{
                  fontFamily: "var(--font-syne)",
                  fontWeight: 800,
                  fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
                  color: "#1a0f0a",
                  marginBottom: "0.75rem",
                }}
              >
                Unsere Top-Empfehlungen
              </h2>
              <p style={{ color: "#6b7280", fontSize: "1rem" }}>
                Handverlesen, ausgiebig getestet, ehrlich bewertet.
              </p>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
                gap: "1.5rem",
              }}
            >
              {TOP_PRODUKTE.map((produkt) => (
                <ProductCard key={produkt.name} {...produkt} />
              ))}
            </div>
          </div>
        </section>

        {/* Ratgeber Teaser */}
        <section style={{ padding: "4rem 1.5rem", background: "#fff7f4" }}>
          <div style={{ maxWidth: "1280px", margin: "0 auto", display: "flex", alignItems: "center", gap: "3rem", flexWrap: "wrap" }}>
            <div style={{ flex: 1, minWidth: "280px" }}>
              <span style={{ fontSize: "0.8rem", fontWeight: 700, color: "#e25822", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                Ratgeber & Tipps
              </span>
              <h2
                style={{
                  fontFamily: "var(--font-syne)",
                  fontWeight: 800,
                  fontSize: "clamp(1.5rem, 3vw, 2rem)",
                  color: "#1a0f0a",
                  margin: "0.5rem 0 1rem",
                }}
              >
                Wissen das dein BBQ auf das nächste Level bringt
              </h2>
              <p style={{ color: "#6b7280", lineHeight: 1.7, marginBottom: "1.5rem" }}>
                Von der Kaufberatung bis zur perfekten Low-&-Slow-Technik – unsere
                Ratgeber geben dir das nötige Know-how für unvergessliche Grillabende.
              </p>
              <Link href="/ratgeber" className="btn-primary">
                Alle Ratgeber ansehen →
              </Link>
            </div>
            <div style={{ flex: 1, minWidth: "280px", display: "flex", flexDirection: "column", gap: "0.875rem" }}>
              {[
                { emoji: "🐷", title: "Spanferkel am Spieß – die ultimative Anleitung", href: "/ratgeber/spanferkel" },
                { emoji: "🥩", title: "Low & Slow: Brisket perfekt smoken", href: "/ratgeber/low-and-slow" },
                { emoji: "🛒", title: "Smoker kaufen – worauf wirklich ankommt", href: "/ratgeber/smoker-kaufberatung" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "1rem",
                    padding: "1rem 1.25rem",
                    background: "#fff",
                    borderRadius: "12px",
                    border: "1px solid #f1f5f9",
                    textDecoration: "none",
                    transition: "all 0.2s",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                  }}
                >
                  <span style={{ fontSize: "1.5rem" }}>{item.emoji}</span>
                  <span style={{ fontSize: "0.9rem", fontWeight: 600, color: "#1a0f0a" }}>
                    {item.title}
                  </span>
                  <span style={{ marginLeft: "auto", color: "#e25822", fontSize: "1rem" }}>→</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Affiliate Hinweis */}
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "1.5rem",
          }}
        >
          <p style={{ fontSize: "0.78rem", color: "#9ca3af", textAlign: "center" }}>
            * Affiliate-Hinweis: Flamme & Fleisch nimmt am Amazon-Partnerprogramm teil.
            Über unsere Links erhalten wir eine kleine Provision – für dich entstehen keine Mehrkosten.
            Unsere Empfehlungen sind davon unabhängig.
          </p>
        </div>

      </main>
      <Footer />
      <CookieBanner />
    </>
  );
}
