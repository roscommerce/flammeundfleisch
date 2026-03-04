import Link from "next/link";

interface ProductCardProps {
  name: string;
  image: string;
  rating: number;
  reviews: number;
  price: string;
  highlight: string;
  pros: string[];
  affiliateUrl: string;
  badge?: string;
}

export default function ProductCard({
  name,
  image,
  rating,
  reviews,
  price,
  highlight,
  pros,
  affiliateUrl,
  badge,
}: ProductCardProps) {
  const stars = Array.from({ length: 5 }, (_, i) => i < Math.floor(rating));

  return (
    <div className="card" style={{ display: "flex", flexDirection: "column" }}>
      {badge && (
        <div
          style={{
            background: "linear-gradient(135deg, #e25822, #c0481a)",
            color: "#fff",
            fontSize: "0.75rem",
            fontWeight: 700,
            padding: "0.35rem 0.875rem",
            textAlign: "center",
            letterSpacing: "0.05em",
            textTransform: "uppercase",
          }}
        >
          {badge}
        </div>
      )}
      <div
        style={{
          background: "#f9fafb",
          padding: "1.5rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "160px",
          fontSize: "4rem",
        }}
      >
        {image}
      </div>
      <div style={{ padding: "1.25rem", display: "flex", flexDirection: "column", gap: "0.75rem", flex: 1 }}>
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
            {name}
          </h3>
          <div style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
            <div style={{ display: "flex", gap: "2px" }}>
              {stars.map((filled, i) => (
                <span key={i} style={{ color: filled ? "#f59e0b" : "#d1d5db", fontSize: "0.875rem" }}>
                  ★
                </span>
              ))}
            </div>
            <span style={{ fontSize: "0.8rem", color: "#6b7280" }}>
              {rating.toFixed(1)} ({reviews} Bewertungen)
            </span>
          </div>
        </div>

        <p style={{ fontSize: "0.875rem", color: "#6b7280", fontStyle: "italic" }}>
          {highlight}
        </p>

        <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.3rem" }}>
          {pros.map((pro, i) => (
            <li key={i} style={{ fontSize: "0.85rem", color: "#374151", display: "flex", gap: "0.4rem" }}>
              <span style={{ color: "#e25822", flexShrink: 0 }}>✓</span>
              {pro}
            </li>
          ))}
        </ul>

        <div style={{ marginTop: "auto", paddingTop: "0.75rem", borderTop: "1px solid #f1f5f9" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "0.75rem" }}>
            <span
              style={{
                fontFamily: "var(--font-syne)",
                fontWeight: 800,
                fontSize: "1.4rem",
                color: "#1a0f0a",
              }}
            >
              {price}
            </span>
            <span className="affiliate-badge">Affiliate-Link*</span>
          </div>
          <Link
            href={affiliateUrl}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="btn-primary"
            style={{ width: "100%", justifyContent: "center", fontSize: "0.875rem" }}
          >
            Auf Amazon ansehen →
          </Link>
        </div>
      </div>
    </div>
  );
}
