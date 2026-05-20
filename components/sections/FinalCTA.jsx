export default function FinalCTA() {
  return (
    <section
      className="grid-fine"
      style={{
        position: "relative",
        background: "linear-gradient(180deg, #0E0E12 0%, #0A0E1F 100%)",
        padding: "120px 0",
        overflow: "hidden",
      }}
    >
      {/* Beam */}
      <div className="beam" />
      <div className="beam-core" />

      {/* Halos */}
      <div
        className="halo-copper"
        style={{
          position: "absolute",
          top: "-20%",
          right: "-5%",
          width: 600,
          height: 600,
          borderRadius: "50%",
          pointerEvents: "none",
          opacity: 0.3,
        }}
      />
      <div
        className="halo-blue"
        style={{
          position: "absolute",
          bottom: "-20%",
          left: "-5%",
          width: 500,
          height: 500,
          borderRadius: "50%",
          pointerEvents: "none",
          opacity: 0.3,
        }}
      />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div style={{ maxWidth: 640, margin: "0 auto", textAlign: "center" }}>
          <span
            className="label"
            style={{ display: "inline-block", marginBottom: 20 }}
          >
            Prochaine étape
          </span>
          <h2 className="section-title" style={{ marginBottom: 16 }}>
            Prêt à{" "}
            <span className="font-serif" style={{ fontStyle: "italic", color: "var(--k-cuivre)" }}>
              transformer
            </span>{" "}
            votre carrière ?
          </h2>
          <p
            style={{
              fontSize: 16,
              color: "rgba(242,242,240,0.65)",
              lineHeight: 1.6,
              margin: "0 auto 40px",
              maxWidth: 480,
            }}
          >
            Que vous soyez indépendant, salarié ou dirigeant, nous avons une
            formation adaptée à vos objectifs.
          </p>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 14,
              justifyContent: "center",
            }}
          >
            <a
              href="https://calendly.com/contact-kelaj-company/prendre-rdv-avec-un-conseiller-formation"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Prendre RDV
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
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
        </div>
      </div>
    </section>
  );
}
