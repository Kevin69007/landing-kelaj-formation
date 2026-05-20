export default function Hero() {
  return (
    <section
      className="bg-dark bg-grid-fine"
      style={{
        position: "relative",
        padding: "120px 0 100px",
        overflow: "hidden",
      }}
    >
      {/* Halo cuivre */}
      <div
        className="halo-copper animate-pulse-glow"
        style={{
          position: "absolute",
          top: "-15%",
          left: "5%",
          width: 700,
          height: 700,
          borderRadius: "50%",
          pointerEvents: "none",
        }}
      />
      {/* Halo bleu électrique */}
      <div
        className="halo-blue"
        style={{
          position: "absolute",
          bottom: "-25%",
          right: "-10%",
          width: 600,
          height: 600,
          borderRadius: "50%",
          pointerEvents: "none",
        }}
      />
      {/* Halo secondaire cuivre subtil */}
      <div
        style={{
          position: "absolute",
          top: "40%",
          right: "20%",
          width: 300,
          height: 300,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(199,138,74,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div style={{ maxWidth: 820, margin: "0 auto", textAlign: "center" }}>
          {/* Label */}
          <span
            className="label"
            style={{ display: "inline-block", marginBottom: 24 }}
          >
            Kelaj Formation — Business · Finance · IA
          </span>

          {/* Titre */}
          <h1 className="display" style={{ marginBottom: 24 }}>
            Formez-vous comme on{" "}
            <span style={{ color: "var(--kelaj-cuivre)" }}>stratège</span>
            <span style={{ color: "var(--kelaj-cuivre)" }}>.</span>
          </h1>

          {/* Sous-titre */}
          <p
            className="display-sub"
            style={{ margin: "0 auto 40px", maxWidth: 600 }}
          >
            De l&apos;intelligence artificielle à la création d&apos;entreprise,
            en passant par la bureautique et les langues : programmes sur
            mesure, accompagnement personnalisé, résultats mesurables.
          </p>

          {/* CTAs */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 16,
              justifyContent: "center",
              marginBottom: 32,
            }}
          >
            <a
              href="https://calendly.com/contact-kelaj-company/prendre-rdv-avec-un-conseiller-formation"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Prendre RDV avec un conseiller
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
              gap: "20px 32px",
              justifyContent: "center",
              alignItems: "center",
              fontSize: 13,
              color: "rgba(242,242,240,0.5)",
            }}
          >
            <span
              style={{ display: "flex", alignItems: "center", gap: 6 }}
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
              >
                <path
                  d="M7 0.5L8.5 5.5H13.5L9.5 8.5L11 13.5L7 10.5L3 13.5L4.5 8.5L0.5 5.5H5.5L7 0.5Z"
                  fill="var(--kelaj-cuivre)"
                />
              </svg>
              Accompagnement personnalisé
            </span>
            <span
              style={{ display: "flex", alignItems: "center", gap: 6 }}
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
              >
                <path
                  d="M7 0.5L8.5 5.5H13.5L9.5 8.5L11 13.5L7 10.5L3 13.5L4.5 8.5L0.5 5.5H5.5L7 0.5Z"
                  fill="var(--kelaj-cuivre)"
                />
              </svg>
              100 % en ligne
            </span>
            <span
              style={{ display: "flex", alignItems: "center", gap: 6 }}
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
              >
                <path
                  d="M7 0.5L8.5 5.5H13.5L9.5 8.5L11 13.5L7 10.5L3 13.5L4.5 8.5L0.5 5.5H5.5L7 0.5Z"
                  fill="var(--kelaj-cuivre)"
                />
              </svg>
              Certifiantes & reconnues
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
