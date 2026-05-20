const words = [
  "SYSTÈME",
  "LEVIER",
  "CASHFLOW",
  "AUTOMATISER",
  "SCALER",
  "MOINS D'EFFORT",
  "PLUS DE RÉSULTAT",
  "DÉLÉGUER",
  "PROCESS",
  "IA AU SERVICE DU BUSINESS",
];

export default function Marquee() {
  const items = [...words, ...words];

  return (
    <div style={{ position: "relative" }}>
      {/* Ligne bleutée horizontale au-dessus du marquee */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "10%",
          right: "10%",
          height: 1,
          background:
            "linear-gradient(90deg, transparent 0%, rgba(30, 104, 255, 0.25) 30%, rgba(30, 104, 255, 0.35) 50%, rgba(30, 104, 255, 0.25) 70%, transparent 100%)",
          filter: "blur(1px)",
          pointerEvents: "none",
          zIndex: 1,
        }}
      />
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "10%",
          right: "10%",
          height: 1,
          background:
            "linear-gradient(90deg, transparent 0%, rgba(30, 104, 255, 0.4) 30%, rgba(30, 104, 255, 0.5) 50%, rgba(30, 104, 255, 0.4) 70%, transparent 100%)",
          pointerEvents: "none",
          zIndex: 1,
          opacity: 0.6,
        }}
      />
      <section
        style={{
          background: "rgba(255,255,255,0.02)",
          borderTop: "1px solid rgba(255,255,255,0.04)",
          borderBottom: "1px solid rgba(255,255,255,0.04)",
          padding: "20px 0",
          overflow: "hidden",
        }}
      >
        <div className="marquee-track">
        {items.map((w, i) => (
          <span
            key={i}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 56,
              fontSize: 12,
              fontWeight: 500,
              letterSpacing: "2.5px",
              textTransform: "uppercase",
              color: "rgba(242,242,240,0.4)",
              whiteSpace: "nowrap",
            }}
          >
            {w}
            <span
              style={{
                width: 4,
                height: 4,
                borderRadius: "50%",
                background: "var(--k-cuivre)",
                opacity: 0.5,
                flexShrink: 0,
              }}
            />
          </span>
        ))}
      </div>
    </section>
  </div>
  );
}
