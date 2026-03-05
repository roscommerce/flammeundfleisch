import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";

const KATEGORIEN = [
  { icon: "🔥", title: "Gasgrills",       desc: "Schnell, präzise, immer bereit",       href: "/grills/gasgrill",
    img: "/images/gasgrill.png" },
  { icon: "🪨", title: "Holzkohlegrills", desc: "Das Original – echtes Raucharoma",      href: "/grills/holzkohle",
    img: "/images/holzkohle.png" },
  { icon: "💨", title: "Offset Smoker",   desc: "Low & Slow für Profis",                 href: "/smoker/offset-smoker",
    img: "/images/offset-smoker.png" },
  { icon: "🪵", title: "Pelletsmoker",    desc: "Automatisch smoken mit Holzaromen",     href: "/grills/pelletgrill",
    img: "/images/pelletsmoker.png" },
  { icon: "🍢", title: "Spießsysteme",    desc: "Spanferkel & Hähnchen auf Hochtouren",  href: "/zubehoer/spiesssysteme",
    img: "/images/spiesssystem.png" },
  { icon: "🌡️", title: "Thermometer",    desc: "Perfekte Kerntemperatur, garantiert",   href: "/zubehoer/thermometer",
    img: "/images/thermometer.png" },
];

const RATGEBER = [
  { emoji: "🐷", title: "Spanferkel am Spieß – die ultimative Anleitung", tag: "Technik", href: "/ratgeber/spanferkel",
    img: "/images/ratgeber-spanferkel.png" },
  { emoji: "🥩", title: "Low & Slow: Brisket richtig smoken",             tag: "Technik", href: "/ratgeber/low-and-slow",
    img: "/images/ratgeber-brisket.png" },
  { emoji: "🛒", title: "Smoker kaufen – worauf es wirklich ankommt",     tag: "Kaufberatung", href: "/ratgeber/smoker-kaufberatung",
    img: "/images/ratgeber-kaufberatung.png" },
];

const SMOKE_PARTICLES = [
  { left: "5%",  bottom: "8%",  width: "180px", height: "180px", delay: "0s"   },
  { left: "15%", bottom: "12%", width: "240px", height: "240px", delay: "1s"   },
  { left: "27%", bottom: "5%",  width: "200px", height: "200px", delay: "2.5s" },
  { left: "40%", bottom: "10%", width: "300px", height: "300px", delay: "0.5s" },
  { left: "53%", bottom: "6%",  width: "220px", height: "220px", delay: "3s"   },
  { left: "65%", bottom: "14%", width: "190px", height: "190px", delay: "1.5s" },
  { left: "77%", bottom: "8%",  width: "260px", height: "260px", delay: "2s"   },
  { left: "88%", bottom: "11%", width: "210px", height: "210px", delay: "0.8s" },
  { left: "95%", bottom: "5%",  width: "170px", height: "170px", delay: "4s"   },
  { left: "33%", bottom: "20%", width: "150px", height: "150px", delay: "1.2s" },
  { left: "60%", bottom: "22%", width: "170px", height: "170px", delay: "3.5s" },
  { left: "82%", bottom: "25%", width: "140px", height: "140px", delay: "0.3s" },
];

const EMBERS = [
  { left: "8%",  bottom: "20%", delay: "0.3s" },
  { left: "18%", bottom: "16%", delay: "1.2s" },
  { left: "28%", bottom: "12%", delay: "0.7s" },
  { left: "38%", bottom: "25%", delay: "2.1s" },
  { left: "48%", bottom: "18%", delay: "1.5s" },
  { left: "57%", bottom: "22%", delay: "0.9s" },
  { left: "66%", bottom: "14%", delay: "2.8s" },
  { left: "74%", bottom: "20%", delay: "0.4s" },
  { left: "83%", bottom: "17%", delay: "1.8s" },
  { left: "91%", bottom: "24%", delay: "3.2s" },
  { left: "22%", bottom: "30%", delay: "2.4s" },
  { left: "70%", bottom: "30%", delay: "0.6s" },
  { left: "45%", bottom: "32%", delay: "3.8s" },
  { left: "55%", bottom: "28%", delay: "1.1s" },
  { left: "12%", bottom: "28%", delay: "2.9s" },
  { left: "87%", bottom: "28%", delay: "0.2s" },
];

export default function HomePage() {
  return (
    <>
      <Header />
      <main style={{ paddingTop: "72px" }}>

        {/* ═══ HERO ═══ */}
        <section style={{
          position: "relative", minHeight: "92vh",
          display: "flex", alignItems: "center",
          overflow: "hidden", background: "#1c1c1c",
        }}>
          {/* Hero background – BBQ competition with multiple grills */}
          <div style={{
            position: "absolute", inset: 0,
            backgroundImage: "url('/images/hero.png')",
            backgroundSize: "cover", backgroundPosition: "center",
            filter: "brightness(0.3) saturate(1.2)",
          }} />

          {/* Fire glow */}
          <div style={{
            position: "absolute", bottom: 0, left: 0, right: 0, height: "50%",
            background: "linear-gradient(to top, rgba(255,69,0,0.3) 0%, transparent 100%)",
            pointerEvents: "none",
          }} />
          <div style={{
            position: "absolute", bottom: 0, left: "20%", right: "20%", height: "30%",
            background: "radial-gradient(ellipse, rgba(255,140,0,0.25) 0%, transparent 70%)",
            pointerEvents: "none",
          }} />

          {/* Smoke particles */}
          {SMOKE_PARTICLES.map((s, i) => (
            <div key={i} className="smoke-particle" style={{
              left: s.left, bottom: s.bottom, width: s.width, height: s.height,
              animationDelay: s.delay,
            }} />
          ))}

          {/* Embers */}
          {EMBERS.map((e, i) => (
            <div key={i} className="ember" style={{ left: e.left, bottom: e.bottom, animationDelay: e.delay }} />
          ))}

          {/* Content */}
          <div style={{ position: "relative", maxWidth: "1280px", margin: "0 auto", padding: "0 1.5rem", width: "100%" }}>
            <div style={{ maxWidth: "700px" }}>
              <div style={{
                display: "inline-flex", alignItems: "center", gap: "0.5rem",
                border: "1px solid rgba(255,69,0,0.5)", borderRadius: "2px",
                padding: "0.35rem 1rem", marginBottom: "2rem",
                background: "rgba(255,69,0,0.1)",
              }}>
                <span style={{ fontSize: "0.75rem", color: "#ff8c00", fontFamily: "var(--font-oswald)", letterSpacing: "0.15em", textTransform: "uppercase" }}>
                  🔥 Unabhängige BBQ-Empfehlungen
                </span>
              </div>

              <h1 style={{
                fontFamily: "var(--font-oswald)", fontWeight: 700,
                fontSize: "clamp(3rem, 8vw, 6rem)", color: "#fff",
                lineHeight: 1.0, textTransform: "uppercase",
                letterSpacing: "0.02em", marginBottom: "1.5rem",
                textShadow: "0 0 60px rgba(255,69,0,0.3)",
              }}>
                Echtes Feuer.<br />
                <span style={{ color: "transparent", WebkitTextStroke: "2px #ff4500", display: "block" }}>
                  Echtes Fleisch.
                </span>
                <span style={{ color: "#ff4500" }}>Echte Ergebnisse.</span>
              </h1>

              <p style={{
                fontSize: "1.15rem", color: "rgba(255,255,255,0.7)",
                lineHeight: 1.7, marginBottom: "2.5rem", maxWidth: "560px",
              }}>
                Kein Marketing-Blabla. Nur ehrliche Tests, echte Erfahrungen und
                die besten Empfehlungen für Grills, Smoker und BBQ-Zubehör.
              </p>

              <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                <Link href="/#kategorien" className="btn-fire" style={{ fontSize: "1rem" }}>
                  Grills & Smoker vergleichen
                </Link>
                <Link href="/ratgeber" className="btn-outline" style={{ fontSize: "1rem" }}>
                  Ratgeber lesen
                </Link>
              </div>

              <div style={{ display: "flex", gap: "3rem", marginTop: "4rem", flexWrap: "wrap" }}>
                {[
                  { value: "50+",  label: "Produkte getestet" },
                  { value: "100%", label: "Unabhängig" },
                  { value: "∞",    label: "BBQ-Leidenschaft" },
                ].map((s) => (
                  <div key={s.label}>
                    <div style={{ fontFamily: "var(--font-oswald)", fontWeight: 700, fontSize: "2rem", color: "#ff4500" }}>{s.value}</div>
                    <div style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.45)", textTransform: "uppercase", letterSpacing: "0.1em" }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom fade */}
          <div style={{
            position: "absolute", bottom: 0, left: 0, right: 0, height: "120px",
            background: "linear-gradient(to top, #1c1c1c, transparent)",
          }} />
        </section>

        {/* ═══ KATEGORIEN ═══ */}
        <section id="kategorien" style={{ padding: "6rem 1.5rem", background: "#212121" }}>
          <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
            <div style={{ marginBottom: "3.5rem" }}>
              <div className="section-label" style={{ marginBottom: "0.75rem" }}>— Was suchst du?</div>
              <h2 className="section-title">Alle Kategorien</h2>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "1.5rem" }}>
              {KATEGORIEN.map((kat) => (
                <Link key={kat.href} href={kat.href} style={{ textDecoration: "none" }}>
                  <div className="card-dark" style={{ cursor: "pointer" }}>
                    <div style={{
                      height: "180px",
                      backgroundImage: `url('${kat.img}')`,
                      backgroundSize: "cover", backgroundPosition: "center",
                      position: "relative",
                    }}>
                      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.1) 60%, transparent 100%)" }} />
                      <div style={{ position: "absolute", top: "1rem", left: "1rem", background: "rgba(0,0,0,0.65)", borderRadius: "4px", padding: "0.25rem 0.5rem", fontSize: "1.2rem" }}>
                        {kat.icon}
                      </div>
                    </div>
                    <div style={{ padding: "1.25rem" }}>
                      <h3 style={{ fontFamily: "var(--font-oswald)", fontWeight: 600, fontSize: "1.2rem", color: "#fff", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "0.35rem" }}>
                        {kat.title}
                      </h3>
                      <p style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.5)" }}>{kat.desc}</p>
                      <div style={{ marginTop: "0.75rem", color: "#ff4500", fontSize: "0.85rem", fontWeight: 600 }}>Ansehen →</div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ RATGEBER ═══ */}
        <section style={{ padding: "6rem 1.5rem", background: "#1c1c1c", position: "relative" }}>
          <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "2px", background: "linear-gradient(90deg, transparent, #ff4500 30%, #ff8c00 50%, #ff4500 70%, transparent)" }} />
          <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "3rem", flexWrap: "wrap", gap: "1rem" }}>
              <div>
                <div className="section-label" style={{ marginBottom: "0.75rem" }}>— Wissen & Tipps</div>
                <h2 className="section-title">BBQ Ratgeber</h2>
              </div>
              <Link href="/ratgeber" style={{ color: "#ff4500", fontFamily: "var(--font-oswald)", letterSpacing: "0.1em", textTransform: "uppercase", fontSize: "0.875rem", fontWeight: 600 }}>
                Alle ansehen →
              </Link>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))", gap: "1.5rem" }}>
              {RATGEBER.map((artikel) => (
                <Link key={artikel.href} href={artikel.href} style={{ textDecoration: "none" }}>
                  <div className="card-dark" style={{ cursor: "pointer" }}>
                    <div style={{ height: "220px", backgroundImage: `url('${artikel.img}')`, backgroundSize: "cover", backgroundPosition: "center", position: "relative" }}>
                      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.1) 100%)" }} />
                      <div style={{ position: "absolute", bottom: "1rem", left: "1rem", background: "rgba(255,69,0,0.85)", borderRadius: "3px", padding: "0.2rem 0.6rem", fontSize: "0.7rem", fontWeight: 700, color: "#fff", fontFamily: "var(--font-oswald)", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                        {artikel.tag}
                      </div>
                    </div>
                    <div style={{ padding: "1.5rem" }}>
                      <h3 style={{ fontFamily: "var(--font-oswald)", fontWeight: 600, fontSize: "1.1rem", color: "#fff", lineHeight: 1.3, textTransform: "uppercase", letterSpacing: "0.03em", marginBottom: "0.75rem" }}>
                        {artikel.title}
                      </h3>
                      <span style={{ color: "#ff4500", fontSize: "0.875rem", fontWeight: 600 }}>Weiterlesen →</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ PHILOSOPHIE BANNER ═══ */}
        <section style={{ position: "relative", padding: "6rem 1.5rem", overflow: "hidden", background: "#181818" }}>
          <div style={{ position: "absolute", inset: 0, backgroundImage: "url('/images/ratgeber-brisket.png')", backgroundSize: "cover", backgroundPosition: "center", filter: "brightness(0.18)" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(255,69,0,0.15) 0%, transparent 60%)" }} />
          <div style={{ position: "relative", maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
            <div className="section-label" style={{ marginBottom: "1rem" }}>— Unsere Philosophie</div>
            <h2 className="section-title" style={{ marginBottom: "1.5rem" }}>
              Wir grillen.<br />
              <span style={{ color: "#ff4500" }}>Wir testen. Wir urteilen.</span>
            </h2>
            <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.6)", lineHeight: 1.8, maxWidth: "600px", margin: "0 auto 2.5rem" }}>
              Flamme & Fleisch ist kein Schreibtischprojekt. Jede Empfehlung kommt aus
              echter Grillpraxis – vom Spanferkel am Spieß bis zum 16-Stunden-Brisket.
            </p>
            <Link href="/ratgeber" className="btn-fire">Zu den Ratgebern →</Link>
          </div>
        </section>

        {/* Affiliate Hinweis */}
        <div style={{ background: "#161616", padding: "1.5rem" }}>
          <p style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.2)", textAlign: "center", maxWidth: "800px", margin: "0 auto" }}>
            * Affiliate-Hinweis: Flamme & Fleisch nimmt am Amazon-Partnerprogramm teil. Bei Käufen über unsere Links erhalten wir eine Provision – für dich entstehen keine Mehrkosten.
          </p>
        </div>

      </main>
      <Footer />
      <CookieBanner />
    </>
  );
}
