import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Spanferkel am Spieß – die ultimative Anleitung 2024 | Flamme & Fleisch",
  description:
    "Schritt-für-Schritt-Anleitung für das perfekte Spanferkel am Spieß: Vorbereitung, Marinade, Grillzeit und die besten Spießsysteme im Vergleich.",
};

export default function SpanferkelPage() {
  return (
    <>
      <Header />
      <main style={{ paddingTop: "70px" }}>
        {/* Hero */}
        <section
          style={{
            background: "linear-gradient(135deg, #1a0f0a, #2d1810)",
            padding: "4rem 1.5rem 3rem",
          }}
        >
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <Link
              href="/ratgeber"
              style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.875rem", display: "inline-flex", alignItems: "center", gap: "0.3rem", marginBottom: "1.5rem" }}
            >
              ← Zurück zu den Ratgebern
            </Link>
            <div style={{ display: "inline-block", background: "rgba(226,88,34,0.15)", border: "1px solid rgba(226,88,34,0.3)", borderRadius: "100px", padding: "0.3rem 0.875rem", marginBottom: "1rem" }}>
              <span style={{ fontSize: "0.78rem", color: "#e25822", fontWeight: 600 }}>Technik • 12 Min. Lesezeit</span>
            </div>
            <h1
              style={{
                fontFamily: "var(--font-syne)",
                fontWeight: 800,
                fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
                color: "#fff",
                lineHeight: 1.2,
                marginBottom: "1rem",
              }}
            >
              🐷 Spanferkel am Spieß – die ultimative Anleitung
            </h1>
            <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "1.05rem", lineHeight: 1.7 }}>
              Ein Spanferkel am Spieß ist der absolute Höhepunkt jeder Grillparty.
              Wir führen dich durch den gesamten Prozess – von der richtigen Ausrüstung
              bis zum perfekten Anschnitt.
            </p>
          </div>
        </section>

        {/* Artikel */}
        <article style={{ maxWidth: "800px", margin: "0 auto", padding: "3rem 1.5rem" }}>

          <div style={{ background: "#fff7f4", border: "1px solid #fed7c3", borderRadius: "12px", padding: "1.25rem 1.5rem", marginBottom: "2.5rem" }}>
            <strong style={{ color: "#e25822" }}>Kurzübersicht:</strong>
            <ul style={{ marginTop: "0.5rem", paddingLeft: "1.25rem", color: "#374151", fontSize: "0.9rem", lineHeight: 1.8 }}>
              <li>Spanferkel-Gewicht: 6–10 kg ideal für 15–25 Personen</li>
              <li>Grillzeit: ca. 3–4 Stunden bei 160–180°C indirekter Hitze</li>
              <li>Kerntemperatur: 75°C im Rücken, 80°C in der Keule</li>
              <li>Wichtigste Ausrüstung: stabiles Spießsystem, Grillthermometer</li>
            </ul>
          </div>

          <h2 style={{ fontFamily: "var(--font-syne)", fontWeight: 700, fontSize: "1.5rem", color: "#1a0f0a", margin: "2rem 0 1rem" }}>
            Das richtige Spießsystem – die Basis für alles
          </h2>
          <p style={{ color: "#374151", lineHeight: 1.8, marginBottom: "1rem" }}>
            Bevor wir über das Spanferkel selbst reden: Das Spießsystem entscheidet maßgeblich
            darüber, wie stressfrei dein Grillabend wird. Ein billiges, wackeliges System
            ist ein Rezept für Chaos – der Spieß dreht durch, das Tier hängt schief,
            die Garzeit wird unkalkulierbar.
          </p>
          <p style={{ color: "#374151", lineHeight: 1.8, marginBottom: "1.5rem" }}>
            Gute Spießsysteme haben einen stabilen Elektromotor (mindestens 15–20 kg Traglast),
            massive Edelstahlspieße und ordentliche Befestigungsgabeln, die das Tier
            wirklich fixieren. Hier lohnt es sich, etwas mehr zu investieren.
          </p>

          <div style={{ background: "#f9fafb", border: "1px solid #e5e7eb", borderRadius: "12px", padding: "1.5rem", marginBottom: "2rem" }}>
            <h3 style={{ fontFamily: "var(--font-syne)", fontWeight: 700, fontSize: "1rem", color: "#1a0f0a", marginBottom: "0.75rem" }}>
              🛒 Empfehlenswerte Spießsysteme
            </h3>
            {[
              { name: "Klarstein Grillspieß mit Motor", preis: "ab 89 €", note: "Gut für Einsteiger, bis 20 kg" },
              { name: "Rösle Drehspieß-Set", preis: "ab 149 €", note: "Hochwertig, für Weber-Grills" },
              { name: "ACTIVA Spanferkel-Spieß", preis: "ab 119 €", note: "Speziell für große Tiere" },
            ].map((produkt) => (
              <div
                key={produkt.name}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "0.75rem 0",
                  borderBottom: "1px solid #f1f5f9",
                  flexWrap: "wrap",
                  gap: "0.5rem",
                }}
              >
                <div>
                  <span style={{ fontWeight: 600, fontSize: "0.9rem", color: "#1a0f0a" }}>{produkt.name}</span>
                  <br />
                  <span style={{ fontSize: "0.8rem", color: "#6b7280" }}>{produkt.note}</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                  <span style={{ fontWeight: 700, color: "#e25822" }}>{produkt.preis}</span>
                  <Link
                    href="/zubehoer/spiesssysteme"
                    style={{ fontSize: "0.8rem", color: "#e25822", textDecoration: "underline" }}
                  >
                    Ansehen →
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <h2 style={{ fontFamily: "var(--font-syne)", fontWeight: 700, fontSize: "1.5rem", color: "#1a0f0a", margin: "2rem 0 1rem" }}>
            Das Spanferkel vorbereiten
          </h2>
          <p style={{ color: "#374151", lineHeight: 1.8, marginBottom: "1rem" }}>
            Ein Spanferkel wiegt idealerweise zwischen 6 und 10 kg – das reicht für 15 bis 25 Personen.
            Kaufe es beim Metzger deines Vertrauens und bestelle es mindestens 3–5 Tage im Voraus.
            Das Tier sollte bereits ausgenommen sein.
          </p>

          <h3 style={{ fontFamily: "var(--font-syne)", fontWeight: 700, fontSize: "1.1rem", color: "#1a0f0a", margin: "1.5rem 0 0.75rem" }}>
            Die Marinade – innen und außen
          </h3>
          <p style={{ color: "#374151", lineHeight: 1.8, marginBottom: "1rem" }}>
            Das Geheimnis einer perfekten Kruste liegt in der richtigen Marinade und Behandlung der Haut.
            Mindestens 12 Stunden vor dem Grillen – besser 24 Stunden – die Innenseite großzügig einreiben:
          </p>
          <div style={{ background: "#f0fdf4", border: "1px solid #bbf7d0", borderRadius: "10px", padding: "1.25rem", marginBottom: "1.5rem" }}>
            <strong style={{ color: "#16a34a", fontSize: "0.9rem" }}>Marinade für die Innenseite:</strong>
            <ul style={{ marginTop: "0.5rem", paddingLeft: "1.25rem", color: "#374151", fontSize: "0.875rem", lineHeight: 2 }}>
              <li>4 EL grobes Meersalz</li>
              <li>2 EL Paprikapulver (geräuchert)</li>
              <li>1 EL schwarzer Pfeffer</li>
              <li>1 EL Knoblauchpulver</li>
              <li>1 TL Kreuzkümmel</li>
              <li>4 EL Olivenöl</li>
            </ul>
          </div>
          <p style={{ color: "#374151", lineHeight: 1.8, marginBottom: "1rem" }}>
            Die Außenseite – also die Haut – erst kurz vor dem Aufspießen mit grobem Salz einreiben.
            Kein Öl auf der Haut vor dem Grillen! Das verhindert die knusprige Kruste.
          </p>

          <h2 style={{ fontFamily: "var(--font-syne)", fontWeight: 700, fontSize: "1.5rem", color: "#1a0f0a", margin: "2rem 0 1rem" }}>
            Das Aufspießen – der entscheidende Schritt
          </h2>
          <p style={{ color: "#374151", lineHeight: 1.8, marginBottom: "1rem" }}>
            Der Spieß muss exakt durch den Schwerpunkt des Tieres laufen – von der Schnauze bis zum
            Schwanzansatz, möglichst zentral durch die Wirbelsäule. Ein schlecht aufgespießtes Tier
            dreht sich ungleichmäßig und gart ungleichmäßig.
          </p>
          <p style={{ color: "#374151", lineHeight: 1.8, marginBottom: "1.5rem" }}>
            Die Befestigungsgabeln danach fest anziehen und das Tier mehrmals von Hand durchdrehen –
            es muss gleichmäßig laufen, ohne zu eiern. Falls nicht, Gabel nachjustieren.
          </p>

          <h2 style={{ fontFamily: "var(--font-syne)", fontWeight: 700, fontSize: "1.5rem", color: "#1a0f0a", margin: "2rem 0 1rem" }}>
            Grillzeit und Temperatur
          </h2>
          <div style={{ overflowX: "auto", marginBottom: "1.5rem" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.875rem" }}>
              <thead>
                <tr style={{ background: "#1a0f0a", color: "#fff" }}>
                  <th style={{ padding: "0.75rem 1rem", textAlign: "left" }}>Gewicht</th>
                  <th style={{ padding: "0.75rem 1rem", textAlign: "left" }}>Grillzeit</th>
                  <th style={{ padding: "0.75rem 1rem", textAlign: "left" }}>Temperatur</th>
                  <th style={{ padding: "0.75rem 1rem", textAlign: "left" }}>Personen</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["6–8 kg", "2,5–3 Std.", "160–170°C", "15–18"],
                  ["8–10 kg", "3–3,5 Std.", "165–175°C", "18–22"],
                  ["10–12 kg", "3,5–4 Std.", "170–180°C", "22–28"],
                ].map((row, i) => (
                  <tr key={i} style={{ background: i % 2 === 0 ? "#f9fafb" : "#fff" }}>
                    {row.map((cell, j) => (
                      <td key={j} style={{ padding: "0.75rem 1rem", borderBottom: "1px solid #e5e7eb" }}>
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ color: "#374151", lineHeight: 1.8, marginBottom: "1rem" }}>
            Wichtig: Das ist indirekte Hitze. Die Glut oder Brenner sollten seitlich oder
            in einem Halbrund um das Spanferkel angeordnet sein – nicht direkt darunter.
          </p>

          <div style={{ background: "#fff7f4", border: "2px solid #e25822", borderRadius: "12px", padding: "1.5rem", margin: "2rem 0" }}>
            <h3 style={{ fontFamily: "var(--font-syne)", fontWeight: 700, color: "#e25822", marginBottom: "0.75rem" }}>
              🌡️ Pro-Tipp: Grillthermometer ist Pflicht
            </h3>
            <p style={{ color: "#374151", fontSize: "0.9rem", lineHeight: 1.7 }}>
              Verlass dich nicht auf die Grillzeit allein. Ein kabelloses Grillthermometer
              ist bei einem Spanferkel unverzichtbar. Stich es in den dicksten Teil der Keule,
              ohne den Knochen zu berühren. Zieltemperatur: <strong>80°C in der Keule</strong>,{" "}
              <strong>75°C im Rücken</strong>.
            </p>
            <Link href="/zubehoer/thermometer" className="btn-primary" style={{ marginTop: "1rem", display: "inline-flex", fontSize: "0.875rem" }}>
              Beste Grillthermometer ansehen →
            </Link>
          </div>

          <h2 style={{ fontFamily: "var(--font-syne)", fontWeight: 700, fontSize: "1.5rem", color: "#1a0f0a", margin: "2rem 0 1rem" }}>
            Die Kruste – der Moment der Wahrheit
          </h2>
          <p style={{ color: "#374151", lineHeight: 1.8, marginBottom: "1rem" }}>
            Etwa 30–40 Minuten vor Ende der Garzeit die Hitze erhöhen (auf ca. 200–220°C)
            und die Haut mit Salzwasser einpinseln. Das sorgt für die knusprige, blasige
            Kruste die alle lieben. Augen nicht weglassen – die Kruste kann schnell verbrennen!
          </p>

          <h2 style={{ fontFamily: "var(--font-syne)", fontWeight: 700, fontSize: "1.5rem", color: "#1a0f0a", margin: "2rem 0 1rem" }}>
            Fazit
          </h2>
          <p style={{ color: "#374151", lineHeight: 1.8, marginBottom: "1.5rem" }}>
            Ein Spanferkel am Spieß ist kein Hexenwerk – aber es braucht das richtige Equipment,
            etwas Planung und ein gutes Thermometer. Mit diesen Grundlagen wirst du deine Gäste
            garantiert beeindrucken. Viel Erfolg und guten Appetit!
          </p>

          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginTop: "2rem", paddingTop: "2rem", borderTop: "1px solid #e5e7eb" }}>
            <Link href="/zubehoer/spiesssysteme" className="btn-primary">
              Spießsysteme vergleichen →
            </Link>
            <Link href="/ratgeber" className="btn-secondary">
              Weitere Ratgeber
            </Link>
          </div>

        </article>
      </main>
      <Footer />
    </>
  );
}
