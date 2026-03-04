"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const NAV = [
  {
    label: "Grills",
    items: [
      { href: "/grills/gasgrill",    label: "🔥 Gasgrills" },
      { href: "/grills/holzkohle",   label: "🪨 Holzkohlegrills" },
      { href: "/grills/elektrogrill",label: "⚡ Elektrogrills" },
      { href: "/grills/pelletgrill", label: "🪵 Pelletgrills" },
    ],
  },
  {
    label: "Smoker",
    items: [
      { href: "/smoker/offset-smoker", label: "💨 Offset Smoker" },
      { href: "/smoker/watersmoker",   label: "🫧 Water Smoker" },
      { href: "/smoker/pellet-smoker", label: "🪵 Pellet Smoker" },
      { href: "/smoker/einsteiger",    label: "🆕 Einsteiger Smoker" },
    ],
  },
  {
    label: "Zubehör",
    items: [
      { href: "/zubehoer/thermometer",  label: "🌡️ Thermometer" },
      { href: "/zubehoer/spiesssysteme",label: "🍢 Spießsysteme" },
      { href: "/zubehoer/anzuender",    label: "🔆 Anzünder" },
      { href: "/zubehoer/werkzeug",     label: "🔧 Grillwerkzeug" },
    ],
  },
];

function Logo() {
  return (
    <Link href="/" style={{ display: "flex", alignItems: "center", gap: "0.75rem", textDecoration: "none", flexShrink: 0 }}>
      {/* SVG flame logo mark */}
      <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="38" height="38" rx="7" fill="url(#fireGrad)"/>
        <defs>
          <linearGradient id="fireGrad" x1="0" y1="38" x2="38" y2="0">
            <stop offset="0%" stopColor="#cc2200"/>
            <stop offset="100%" stopColor="#ff6b00"/>
          </linearGradient>
        </defs>
        {/* Flame shape */}
        <path d="M19 6 C19 6 24 12 24 17 C24 17 21 14 19 15 C19 15 23 20 19 26 C19 26 13 21 15 16 C15 16 12 19 13 23 C13 23 10 19 12 14 C12 14 16 10 19 6Z"
          fill="white" opacity="0.95"/>
        <path d="M19 16 C19 16 21.5 19 20 22 C20 22 17 20 18 17.5Z"
          fill="#ff8c00" opacity="0.8"/>
      </svg>
      <div style={{ display: "flex", flexDirection: "column", lineHeight: 1 }}>
        <span style={{
          fontFamily: "var(--font-oswald)", fontWeight: 700,
          fontSize: "1.3rem", color: "#fff",
          textTransform: "uppercase", letterSpacing: "0.06em",
        }}>
          Flamme <span style={{ color: "#ff4500" }}>&amp;</span> Fleisch
        </span>
        <span style={{ fontSize: "0.6rem", color: "rgba(255,255,255,0.35)", letterSpacing: "0.2em", textTransform: "uppercase", fontFamily: "var(--font-barlow)" }}>
          BBQ · Grill · Smoker
        </span>
      </div>
    </Link>
  );
}

export default function Header() {
  const [scrolled, setScrolled]         = useState(false);
  const [mobileOpen, setMobileOpen]     = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      background: scrolled ? "rgba(20,20,20,0.97)" : "rgba(20,20,20,0.85)",
      backdropFilter: "blur(12px)",
      borderBottom: scrolled ? "1px solid rgba(255,69,0,0.25)" : "1px solid transparent",
      boxShadow: scrolled ? "0 4px 30px rgba(0,0,0,0.5)" : "none",
      transition: "all 0.3s ease",
    }}>
      <div style={{
        maxWidth: "1280px", margin: "0 auto", padding: "0 1.5rem",
        height: "72px", display: "flex", alignItems: "center",
        justifyContent: "space-between", gap: "2rem",
      }}>
        <Logo />

        {/* Desktop Nav */}
        <nav style={{ display: "flex", alignItems: "center", gap: "0.25rem" }} className="desktop-nav">
          {NAV.map((group) => (
            <div key={group.label} style={{ position: "relative" }}
              onMouseEnter={() => setOpenDropdown(group.label)}
              onMouseLeave={() => setOpenDropdown(null)}>
              <button style={{
                display: "flex", alignItems: "center", gap: "0.3rem",
                padding: "0.5rem 1rem", background: "transparent", border: "none",
                color: openDropdown === group.label ? "#ff4500" : "rgba(255,255,255,0.8)",
                fontSize: "0.85rem", fontWeight: 600, cursor: "pointer",
                fontFamily: "var(--font-oswald)", letterSpacing: "0.08em",
                textTransform: "uppercase", transition: "color 0.15s",
              }}>
                {group.label}
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
                  style={{ transform: openDropdown === group.label ? "rotate(180deg)" : "rotate(0)", transition: "transform 0.2s" }}>
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>
              {openDropdown === group.label && (
                <div style={{
                  position: "absolute", top: "calc(100% + 4px)", left: "50%",
                  transform: "translateX(-50%)",
                  background: "#1a1a1a", border: "1px solid rgba(255,69,0,0.25)",
                  borderRadius: "8px", padding: "0.5rem", minWidth: "200px",
                  boxShadow: "0 16px 40px rgba(0,0,0,0.6), 0 0 20px rgba(255,69,0,0.1)",
                  zIndex: 200,
                }}>
                  {group.items.map((item) => (
                    <Link key={item.href} href={item.href} className="dropdown-link">{item.label}</Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Link href="/ratgeber"
            style={{ padding: "0.5rem 1rem", color: "rgba(255,255,255,0.8)", fontSize: "0.85rem", fontWeight: 600, fontFamily: "var(--font-oswald)", letterSpacing: "0.08em", textTransform: "uppercase", transition: "color 0.15s" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#ff4500")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.8)")}>
            Ratgeber
          </Link>
        </nav>

        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
          <Link href="/#kategorien" className="btn-fire desktop-cta" style={{ fontSize: "0.8rem", padding: "0.55rem 1.25rem" }}>
            Jetzt vergleichen
          </Link>
          <button onClick={() => setMobileOpen(!mobileOpen)}
            style={{ display: "none", background: "transparent", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "6px", padding: "0.5rem", color: "#fff", cursor: "pointer" }}
            className="mobile-btn" aria-label="Menü">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {mobileOpen
                ? <><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></>
                : <><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></>}
            </svg>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div style={{ borderTop: "1px solid rgba(255,69,0,0.2)", padding: "1rem 1.5rem 1.5rem", background: "#141414", display: "flex", flexDirection: "column", gap: "0.25rem", maxHeight: "70vh", overflowY: "auto" }}>
          {NAV.map((group) => (
            <div key={group.label}>
              <div style={{ padding: "0.5rem 0.5rem 0.25rem", fontSize: "0.7rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.15em", color: "#ff4500", fontFamily: "var(--font-oswald)" }}>
                {group.label}
              </div>
              {group.items.map((item) => (
                <Link key={item.href} href={item.href} onClick={() => setMobileOpen(false)} className="dropdown-link">{item.label}</Link>
              ))}
            </div>
          ))}
          <Link href="/ratgeber" onClick={() => setMobileOpen(false)} className="dropdown-link" style={{ marginTop: "0.5rem" }}>📖 Ratgeber</Link>
        </div>
      )}
    </header>
  );
}
