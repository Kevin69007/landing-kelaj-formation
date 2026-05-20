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
      {/* Lumière structurelle — très discrète */}
      <div className="beam" />
      <div className="beam-core" />

      {/* Halo cuivre subtil */}
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
          opacity: 0.35,
        }}
      />
      {/* Halo bleu subtil */}
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
          opacity: 0.35,
        }}
      />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr auto",
            gap: 64,
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
                color: "rgba(242,242,240,0.7)",
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
                color: "rgba(242,242,240,0.6)",
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
                Certifiantes &amp; reconnues
              </span>
            </div>
          </div>

          {/* Colonne droite — Metrics + preuves */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 28,
              minWidth: 200,
            }}
          >
            {/* 4 Metrics */}
            <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
              {[
                { label: "Formations", value: "2 100", suffix: "+" },
                { label: "Expertise", value: "10", suffix: "+" },
                { label: "Domaines", value: "22", suffix: "+" },
                { label: "En ligne", value: "100", suffix: "%" },
              ].map((m, i) => (
                <div key={i}>
                  <div
                    style={{
                      fontSize: 11,
                      fontWeight: 500,
                      letterSpacing: "2px",
                      textTransform: "uppercase",
                      color: "rgba(242,242,240,0.55)",
                      marginBottom: 6,
                    }}
                  >
                    {m.label}
                  </div>
                  <div
                    style={{
                      fontSize: "clamp(32px, 3.5vw, 42px)",
                      fontWeight: 700,
                      lineHeight: 1,
                      color: "var(--k-casse)",
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {m.value}
                    <span style={{ fontSize: 20, color: "var(--k-cuivre)" }}>
                      {m.suffix}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Mini bloc de preuves */}
            <div
              className="glass"
              style={{ padding: "20px", borderRadius: 10 }}
            >
              <div
                style={{
                  fontSize: 10,
                  fontWeight: 600,
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  color: "var(--k-cuivre)",
                  marginBottom: 14,
                }}
              >
                Notre stack
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 10,
                }}
              >
                {[
                  "Accompagnement 1:1",
                  "Certification incluse",
                  "Accès illimité",
                ].map((item, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                      fontSize: 12,
                      color: "rgba(242,242,240,0.6)",
                    }}
                  >
                    <span
                      style={{
                        width: 5,
                        height: 5,
                        borderRadius: "50%",
                        background: "var(--k-cuivre)",
                        flexShrink: 0,
                      }}
                    />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
