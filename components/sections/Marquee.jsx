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
              color: "rgba(242,242,240,0.25)",
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
  );
}
