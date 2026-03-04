import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum | Flamme & Fleisch",
};

export default function ImpressumPage() {
  return (
    <>
      <Header />
      <main style={{ paddingTop: "72px" }}>
        <section style={{
          background: "linear-gradient(135deg, #1a1a1a, #212121)",
          padding: "3rem 1.5rem 2rem",
          borderBottom: "1px solid rgba(255,69,0,0.15)",
        }}>
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <div className="section-label" style={{ marginBottom: "0.5rem" }}>— Rechtliches</div>
            <h1 style={{ fontFamily: "var(--font-oswald)", fontWeight: 700, fontSize: "2.5rem", color: "#fff", textTransform: "uppercase" }}>
              Impressum
            </h1>
          </div>
        </section>

        <section style={{ maxWidth: "800px", margin: "0 auto", padding: "3rem 1.5rem 5rem" }}>
          <div style={{ color: "rgba(255,255,255,0.75)", lineHeight: 1.9, display: "flex", flexDirection: "column", gap: "2rem" }}>

            <div>
              <h2 style={{ fontFamily: "var(--font-oswald)", fontWeight: 600, color: "#fff", fontSize: "1.1rem", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "0.75rem", paddingBottom: "0.5rem", borderBottom: "1px solid rgba(255,69,0,0.2)" }}>
                Angaben gemäß § 5 Telemediengesetz (TMG)
              </h2>
              <p>
                Sven Rosenthal<br />
                In der Landwehr 21<br />
                34376 Immenhausen OT Holzhausen<br />
                Deutschland
              </p>
            </div>

            <div>
              <h2 style={{ fontFamily: "var(--font-oswald)", fontWeight: 600, color: "#fff", fontSize: "1.1rem", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "0.75rem", paddingBottom: "0.5rem", borderBottom: "1px solid rgba(255,69,0,0.2)" }}>
                Kontakt
              </h2>
              <p>E-Mail: <a href="mailto:info@rosenthal-e-commerce.de" style={{ color: "#ff4500" }}>info@rosenthal-e-commerce.de</a></p>
            </div>

            <div>
              <h2 style={{ fontFamily: "var(--font-oswald)", fontWeight: 600, color: "#fff", fontSize: "1.1rem", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "0.75rem", paddingBottom: "0.5rem", borderBottom: "1px solid rgba(255,69,0,0.2)" }}>
                Umsatzsteuer-ID
              </h2>
              <p>Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG: DE300044005</p>
            </div>

            <div>
              <h2 style={{ fontFamily: "var(--font-oswald)", fontWeight: 600, color: "#fff", fontSize: "1.1rem", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "0.75rem", paddingBottom: "0.5rem", borderBottom: "1px solid rgba(255,69,0,0.2)" }}>
                Hinweis zu Affiliate-Links
              </h2>
              <p>
                Diese Website enthält Affiliate-Links zum Amazon-Partnerprogramm. Bei Kauf eines Produkts über einen solchen Link erhält der Betreiber eine Provision. Für den Nutzer entstehen dadurch keine zusätzlichen Kosten. Weitere Details findest du im{" "}
                <Link href="/affiliate-hinweis" style={{ color: "#ff4500" }}>Affiliate-Hinweis</Link>.
              </p>
            </div>

            <div>
              <h2 style={{ fontFamily: "var(--font-oswald)", fontWeight: 600, color: "#fff", fontSize: "1.1rem", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "0.75rem", paddingBottom: "0.5rem", borderBottom: "1px solid rgba(255,69,0,0.2)" }}>
                Inhaltlich Verantwortlicher gemäß § 55 Abs. 2 RStV
              </h2>
              <p>Sven Rosenthal, In der Landwehr 21, 34376 Immenhausen OT Holzhausen</p>
            </div>

            <div>
              <h2 style={{ fontFamily: "var(--font-oswald)", fontWeight: 600, color: "#fff", fontSize: "1.1rem", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "0.75rem", paddingBottom: "0.5rem", borderBottom: "1px solid rgba(255,69,0,0.2)" }}>
                EU-Streitschlichtung
              </h2>
              <p>
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}
                <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" style={{ color: "#ff4500" }}>
                  https://ec.europa.eu/consumers/odr/
                </a><br />
                Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </div>

            <div>
              <h2 style={{ fontFamily: "var(--font-oswald)", fontWeight: 600, color: "#fff", fontSize: "1.1rem", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "0.75rem", paddingBottom: "0.5rem", borderBottom: "1px solid rgba(255,69,0,0.2)" }}>
                Haftung für Inhalte
              </h2>
              <p>
                Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt.
              </p>
            </div>

            <div>
              <h2 style={{ fontFamily: "var(--font-oswald)", fontWeight: 600, color: "#fff", fontSize: "1.1rem", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "0.75rem", paddingBottom: "0.5rem", borderBottom: "1px solid rgba(255,69,0,0.2)" }}>
                Haftung für Links
              </h2>
              <p>
                Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
              </p>
            </div>

            <div>
              <h2 style={{ fontFamily: "var(--font-oswald)", fontWeight: 600, color: "#fff", fontSize: "1.1rem", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "0.75rem", paddingBottom: "0.5rem", borderBottom: "1px solid rgba(255,69,0,0.2)" }}>
                Urheberrecht
              </h2>
              <p>
                Die durch den Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
              </p>
            </div>

            <p style={{ color: "rgba(255,255,255,0.3)", fontSize: "0.8rem" }}>Stand: März 2026</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
