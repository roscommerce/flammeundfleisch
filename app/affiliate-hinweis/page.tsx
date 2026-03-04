import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Affiliate-Hinweis | Flamme & Fleisch",
};

export default function AffiliateHinweisPage() {
  return (
    <>
      <Header />
      <main style={{ paddingTop: "70px" }}>
        <section style={{ maxWidth: "800px", margin: "0 auto", padding: "4rem 1.5rem" }}>
          <h1
            style={{
              fontFamily: "var(--font-syne)",
              fontWeight: 800,
              fontSize: "2rem",
              color: "#1a0f0a",
              marginBottom: "1rem",
            }}
          >
            Affiliate-Hinweis
          </h1>
          <p style={{ color: "#6b7280", marginBottom: "2rem", fontSize: "1rem" }}>
            Transparenz ist uns wichtig – hier erklären wir offen, wie diese Website funktioniert.
          </p>

          <div style={{ color: "#374151", lineHeight: 1.8, display: "flex", flexDirection: "column", gap: "2rem" }}>
            <div style={{ background: "#fff7f4", border: "1px solid #fed7c3", borderRadius: "12px", padding: "1.5rem" }}>
              <h2 style={{ fontFamily: "var(--font-syne)", fontWeight: 700, fontSize: "1.1rem", color: "#e25822", marginBottom: "0.75rem" }}>
                🔥 Wie verdient Flamme & Fleisch Geld?
              </h2>
              <p>
                Flamme & Fleisch nimmt am <strong>Amazon PartnerNet</strong> teil. Das bedeutet:
                Wenn du über einen unserer Links einkaufst, erhalten wir eine prozentuale
                Provision von Amazon – <strong>ohne dass sich an deinem Preis irgendetwas ändert</strong>.
              </p>
            </div>

            <div>
              <h2 style={{ fontFamily: "var(--font-syne)", fontWeight: 700, fontSize: "1.2rem", color: "#1a0f0a", marginBottom: "0.75rem" }}>
                Beeinflusst das unsere Empfehlungen?
              </h2>
              <p>
                Nein. Unsere Empfehlungen basieren auf echten Erfahrungen und objektiven Kriterien.
                Wir empfehlen kein Produkt, nur weil es eine höhere Provision bringt.
                Im Gegenteil: Wenn ein günstigeres Produkt besser ist, sagen wir das.
              </p>
            </div>

            <div>
              <h2 style={{ fontFamily: "var(--font-syne)", fontWeight: 700, fontSize: "1.2rem", color: "#1a0f0a", marginBottom: "0.75rem" }}>
                Wie erkenne ich Affiliate-Links?
              </h2>
              <p>
                Alle Produktlinks zu Amazon sind Affiliate-Links. Sie sind im Text und auf
                den Produktkarten mit dem Hinweis <em>„Affiliate-Link*"</em> gekennzeichnet.
              </p>
            </div>

            <div>
              <h2 style={{ fontFamily: "var(--font-syne)", fontWeight: 700, fontSize: "1.2rem", color: "#1a0f0a", marginBottom: "0.75rem" }}>
                Rechtliche Grundlage
              </h2>
              <p>
                Die Kennzeichnung von Affiliate-Links ist in Deutschland gesetzlich vorgeschrieben.
                Wir kommen dieser Pflicht nach und halten uns an die Richtlinien des
                Amazon-Partnerprogramms sowie das Wettbewerbsrecht.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
