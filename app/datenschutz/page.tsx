import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutz | Flamme & Fleisch",
};

export default function DatenschutzPage() {
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
            Datenschutzerklärung
          </h1>

          <div style={{ color: "#374151", lineHeight: 1.8, display: "flex", flexDirection: "column", gap: "2rem" }}>
            <div>
              <h2 style={{ fontFamily: "var(--font-syne)", fontWeight: 700, fontSize: "1.2rem", color: "#1a0f0a", marginBottom: "0.75rem" }}>
                1. Verantwortlicher
              </h2>
              <p>
                Verantwortlich für die Datenverarbeitung auf dieser Website ist der im Impressum
                genannte Betreiber.
              </p>
            </div>

            <div>
              <h2 style={{ fontFamily: "var(--font-syne)", fontWeight: 700, fontSize: "1.2rem", color: "#1a0f0a", marginBottom: "0.75rem" }}>
                2. Hosting
              </h2>
              <p>
                Diese Website wird bei Netlify Inc. gehostet. Beim Aufrufen der Seite werden
                automatisch Verbindungsdaten (IP-Adresse, Zeitstempel, aufgerufene Seite)
                in Serverlogfiles gespeichert. Dies dient der Sicherheit und ist gemäß
                Art. 6 Abs. 1 lit. f DSGVO gerechtfertigt.
              </p>
            </div>

            <div>
              <h2 style={{ fontFamily: "var(--font-syne)", fontWeight: 700, fontSize: "1.2rem", color: "#1a0f0a", marginBottom: "0.75rem" }}>
                3. Cookies
              </h2>
              <p>
                Diese Website verwendet ausschließlich technisch notwendige Cookies (z.B. zum
                Speichern deiner Cookie-Einwilligung). Es werden keine Tracking- oder
                Werbe-Cookies eingesetzt.
              </p>
            </div>

            <div>
              <h2 style={{ fontFamily: "var(--font-syne)", fontWeight: 700, fontSize: "1.2rem", color: "#1a0f0a", marginBottom: "0.75rem" }}>
                4. Amazon Partnerprogramm
              </h2>
              <p>
                Diese Website nimmt am Amazon-Partnerprogramm teil. Wenn du auf unsere
                Amazon-Links klickst, setzt Amazon Cookies, um die Herkunft der Bestellung
                zu verfolgen. Informationen zur Datenverarbeitung durch Amazon findest du
                in der Datenschutzerklärung von Amazon.de.
              </p>
            </div>

            <div>
              <h2 style={{ fontFamily: "var(--font-syne)", fontWeight: 700, fontSize: "1.2rem", color: "#1a0f0a", marginBottom: "0.75rem" }}>
                5. Deine Rechte
              </h2>
              <p>
                Du hast das Recht auf Auskunft, Berichtigung, Löschung und Einschränkung
                der Verarbeitung deiner personenbezogenen Daten. Kontaktiere uns dazu
                per E-Mail (siehe Impressum).
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
