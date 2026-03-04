"use client";
import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{
      background: "#080808",
      borderTop: "1px solid rgba(255,69,0,0.2)",
      padding: "4rem 1.5rem 2rem",
    }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "3rem", marginBottom: "3rem" }}>

          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.625rem", marginBottom: "1rem" }}>
              <div style={{ width: "32px", height: "32px", background: "linear-gradient(135deg, #ff4500, #cc2200)", borderRadius: "6px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "16px", boxShadow: "0 0 15px rgba(255,69,0,0.4)" }}>🔥</div>
              <span style={{ fontFamily: "var(--font-oswald)", fontWeight: 700, color: "#fff", fontSize: "1.1rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                Flamme<span style={{ color: "#ff4500" }}>&Fleisch</span>
              </span>
            </div>
            <p style={{ color: "rgba(255,255,255,0.35)", fontSize: "0.85rem", lineHeight: 1.7, maxWidth: "220px" }}>
              Dein unabhängiger Ratgeber für Grills, Smoker und alles rund ums BBQ.
            </p>
          </div>

          {/* Kategorien */}
          <div>
            <h4 style={{ color: "#ff4500", fontWeight: 600, fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "1rem", fontFamily: "var(--font-oswald)" }}>Kategorien</h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.6rem" }}>
              {[
                { href: "/grills/gasgrill",        label: "Gasgrills" },
                { href: "/grills/holzkohle",        label: "Holzkohlegrills" },
                { href: "/smoker/offset-smoker",    label: "Offset Smoker" },
                { href: "/smoker/einsteiger",       label: "Einsteiger Smoker" },
                { href: "/zubehoer/spiesssysteme",  label: "Spießsysteme" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.875rem", transition: "color 0.2s" }}
                    onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#ff4500")}
                    onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "rgba(255,255,255,0.4)")}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Ratgeber */}
          <div>
            <h4 style={{ color: "#ff4500", fontWeight: 600, fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "1rem", fontFamily: "var(--font-oswald)" }}>Ratgeber</h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.6rem" }}>
              {[
                { href: "/ratgeber/spanferkel",         label: "Spanferkel am Spieß" },
                { href: "/ratgeber/low-and-slow",       label: "Low & Slow BBQ" },
                { href: "/ratgeber/smoker-kaufberatung",label: "Smoker kaufen" },
                { href: "/ratgeber/kerntemperatur",     label: "Kerntemperatur-Guide" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.875rem", transition: "color 0.2s" }}
                    onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#ff4500")}
                    onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "rgba(255,255,255,0.4)")}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Rechtliches */}
          <div>
            <h4 style={{ color: "#ff4500", fontWeight: 600, fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "1rem", fontFamily: "var(--font-oswald)" }}>Rechtliches</h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.6rem" }}>
              {[
                { href: "/impressum",       label: "Impressum" },
                { href: "/datenschutz",     label: "Datenschutz" },
                { href: "/affiliate-hinweis", label: "Affiliate-Hinweis" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.875rem", transition: "color 0.2s" }}
                    onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#ff4500")}
                    onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "rgba(255,255,255,0.4)")}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div style={{ height: "1px", background: "rgba(255,69,0,0.15)", margin: "0 0 1.5rem" }} />

        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem" }}>
          <p style={{ color: "rgba(255,255,255,0.2)", fontSize: "0.8rem" }}>
            © {new Date().getFullYear()} Flamme & Fleisch. Alle Rechte vorbehalten.
          </p>
          <p style={{ color: "rgba(255,255,255,0.15)", fontSize: "0.75rem", maxWidth: "500px", textAlign: "right" }}>
            * Affiliate-Links: Bei Käufen erhalten wir eine Provision – keine Mehrkosten für dich.
          </p>
        </div>
      </div>
    </footer>
  );
}
