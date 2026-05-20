export default function Hero() {
  return (
    <section
      className="grid-fine"
      style={{
        position: "relative",
        background: "linear-gradient(180deg, #0A0E1F 0%, #0E0E12 100%)",
        padding: "100px 0 80px",
        overflow: "hidden",
      }}
    >
      {/* Beam lumineux central */}
      <div className="beam" />
      <div className="beam-thin" />

      {/* Halo cuivre */}
      <div
        className="halo-copper"
        style={{
          position: "absolute",
          top: "-10%",
          left: "15%",
          width: 500,
          height: 500,
          borderRadius: "50%",
          pointerEvents: "none",
          opacity: 0.5,
        }}
      />
      {/* Halo bleu */}
      <div
        className="halo-blue"
        style={{
          position: "absolute",
          bottom: "-20%",
          right: "10%",
          width: 400,
          height: 400,
          borderRadius: "50%",
          pointerEvents: "none",
          opacity: 0.5,
        }}
      />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr auto",
            gap: 48,
            alignItems: "center",
          }}
        >
          {/* Colonne gauche */}
          <div style={{ maxWidth: 640 }}>
            <span
              className="label"
              style={{ display: "inline-block", marginBottom: 24 }}
            >
              Advisory Firm — Business · Finance · IA
            </span>

            <h1 style={{ marginBottom: 24 }}>
              <span className="display" style={{ display: "block" }}>
                Formez-vous comme
              </span>
              <span
                className="display-serif"
                style={{ display: "block", color: "var(--k-cuivre)" }}
              >
                on stratège.
              </span>
            </h1>

            <p
              style={{
                fontSize: "clamp(16px, 1.8vw, 18px)",
                lineHeight: 1.6,
                color: "rgba(242,242,240,0.55)",
                maxWidth: 480,
                marginBottom: 36,
              }}
            >
              De l&apos;intelligence artificielle à la création
              d&apos;entreprise, en passant par la bureautique et les langues :
              programmes sur mesure, résultats mesurables.
            </p>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 14,
                marginBottom: 40,
              }}
            >
              <a
                href="https://calendly.com/contact-kelaj-company/prendre-rdv-avec-un-conseiller-formation"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Prendre RDV
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M3 8H13M13 8L9 4M13 8L9 12"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
              <a
                href="https://formation.kelaj-company.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                Explorer le catalogue
              </a>
            </div>

            {/* Réassurance */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "16px 28px",
                fontSize: 12,
                color: "rgba(242,242,240,0.4)",
                letterSpacing: "0.5px",
              }}
            >
              <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                  <path
                    d="M7 0.5L8.5 5.5H13.5L9.5 8.5L11 13.5L7 10.5L3 13.5L4.5 8.5L0.5 5.5H5.5L7 0.5Z"
                    fill="var(--k-cuivre)"
                  />
                </svg>
                Accompagnement personnalisé
              </span>
              <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                  <path
                    d="M7 0.5L8.5 5.5H13.5L9.5 8.5L11 13.5L7 10.5L3 13.5L4.5 8.5L0.5 5.5H5.5L7 0.5Z"
                    fill="var(--k-cuivre)"
                  />
                </svg>
                100 % en ligne
              </span>
              <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                  <path
                    d="M7 0.5L8.5 5.5H13.5L9.5 8.5L11 13.5L7 10.5L3 13.5L4.5 8.5L0.5 5.5H5.5L7 0.5Z"
                    fill="var(--k-cuivre)"
                  />
                </svg>
                Certifiantes & reconnues
              </span>
            </div>
          </div>

          {/* Colonne droite — Metrics */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 40,
              minWidth: 180,
            }}
          >
            <div>
              <div
                style={{
                  fontSize: 11,
                  fontWeight: 500,
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  color: "rgba(242,242,240,0.35)",
                  marginBottom: 8,
                }}
              >
                Formations
              </div>
              <div
                style={{
                  fontSize: "clamp(36px, 4vw, 48px)",
                  fontWeight: 700,
                  lineHeight: 1,
                  color: "var(--k-casse)",
                  letterSpacing: "-0.02em",
                }}
              >
                2 100<span style={{ fontSize: 24, color: "var(--k-cuivre)" }}>+</span>
              </div>
            </div>
            <div>
              <div
                style={{
                  fontSize: 11,
                  fontWeight: 500,
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  color: "rgba(242,242,240,0.35)",
                  marginBottom: 8,
                }}
              >
                Expertise
              </div>
              <div
                style={{
                  fontSize: "clamp(36px, 4vw, 48px)",
                  fontWeight: 700,
                  lineHeight: 1,
                  color: "var(--k-casse)",
                  letterSpacing: "-0.02em",
                }}
              >
                10<span style={{ fontSize: 24, color: "var(--k-cuivre)" }}>+</span>
              </div>
              <div
                style={{
                  fontSize: 13,
                  color: "rgba(242,242,240,0.4)",
                  marginTop: 4,
                }}
              >
                ans
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
