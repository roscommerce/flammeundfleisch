import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum | Flamme & Fleisch",
};

export default function ImpressumPage() {
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
              marginBottom: "2rem",
            }}
          >
            Impressum
          </h1>

          <div style={{ color: "#374151", lineHeight: 1.8, display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <div>
              <h2 style={{ fontWeight: 700, color: "#1a0f0a", marginBottom: "0.5rem" }}>Angaben gemäß § 5 TMG</h2>
              <p>
                [Dein Name]<br />
                [Straße und Hausnummer]<br />
                [PLZ Ort]
              </p>
            </div>

            <div>
              <h2 style={{ fontWeight: 700, color: "#1a0f0a", marginBottom: "0.5rem" }}>Kontakt</h2>
              <p>
                E-Mail: [deine@email.de]
              </p>
            </div>

            <div>
              <h2 style={{ fontWeight: 700, color: "#1a0f0a", marginBottom: "0.5rem" }}>Haftung für Inhalte</h2>
              <p>
                Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten
                nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als
                Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde
                Informationen zu überwachen.
              </p>
            </div>

            <div>
              <h2 style={{ fontWeight: 700, color: "#1a0f0a", marginBottom: "0.5rem" }}>Affiliate-Hinweis</h2>
              <p>
                Diese Website nimmt am Amazon-Partnerprogramm teil. Wenn du über unsere Links einkaufst,
                erhalten wir eine kleine Provision – für dich entstehen dabei keine Mehrkosten.
                Unsere Empfehlungen sind unabhängig davon.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
