"use client";

import { useState, useEffect } from "react";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("cookies-accepted");
    if (!accepted) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem("cookies-accepted", "true");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      style={{
        position: "fixed",
        bottom: "1.5rem",
        left: "50%",
        transform: "translateX(-50%)",
        width: "min(640px, calc(100vw - 2rem))",
        background: "#1a0f0a",
        color: "#fff",
        borderRadius: "16px",
        padding: "1.25rem 1.5rem",
        boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
        display: "flex",
        alignItems: "center",
        gap: "1rem",
        flexWrap: "wrap",
        zIndex: 9999,
        border: "1px solid rgba(255,255,255,0.1)",
      }}
    >
      <p style={{ flex: 1, fontSize: "0.85rem", color: "rgba(255,255,255,0.75)", minWidth: "200px" }}>
        🍪 Wir nutzen Cookies, um dir die beste Erfahrung zu bieten und Affiliate-Links zu verfolgen.{" "}
        <a href="/datenschutz" style={{ color: "#e25822", textDecoration: "underline" }}>
          Mehr erfahren
        </a>
      </p>
      <button
        onClick={accept}
        style={{
          background: "linear-gradient(135deg, #e25822, #c0481a)",
          color: "#fff",
          border: "none",
          borderRadius: "8px",
          padding: "0.6rem 1.25rem",
          fontWeight: 600,
          fontSize: "0.875rem",
          cursor: "pointer",
          flexShrink: 0,
        }}
      >
        Akzeptieren
      </button>
    </div>
  );
}
