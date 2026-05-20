export default function Hero() {
  return (
    <section
      style={{
        position: "relative",
        background:
          "linear-gradient(165deg, #F8F7F4 0%, #FFFFFF 50%, #F0EDE8 100%)",
        padding: "100px 0 80px",
        overflow: "hidden",
      }}
    >
      {/* Fond subtil : cercles diffus */}
      <div
        style={{
          position: "absolute",
          top: "-10%",
          right: "-5%",
          width: 500,
          height: 500,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(197,165,90,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-15%",
          left: "-8%",
          width: 400,
          height: 400,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(11,27,61,0.04) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div style={{ maxWidth: 720, margin: "0 auto", textAlign: "center" }}>
          {/* Label */}
          <span
            className="label"
            style={{ display: "inline-block", marginBottom: 24 }}
          >
            Kelaj Formation
          </span>

          {/* Titre */}
          <h1
            className="display"
            style={{ marginBottom: 24 }}
          >
            Formez-vous avec les{" "}
            <span style={{ color: "var(--kelaj-or)" }}>experts</span>
          </h1>

          {/* Sous-titre */}
          <p
            className="display-sub"
            style={{ margin: "0 auto 40px" }}
          >
            De l’intelligence artificielle à la création d’entreprise, en
            passant par la bureautique et les langues : programmes sur mesure,
            accompagnement personnalisé, résultats mesurables.
          </p>

          {/* CTA */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 16,
              justifyContent: "center",
              marginBottom: 28,
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
                xmlns="http://www.w3.org/2000/svg"
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
              Trouver ma formation
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
              color: "var(--kelaj-texte-tertiaire)",
            }}
          >
            <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
              >
                <path
                  d="M7 0.5L8.5 5.5H13.5L9.5 8.5L11 13.5L7 10.5L3 13.5L4.5 8.5L0.5 5.5H5.5L7 0.5Z"
                  fill="var(--kelaj-or)"
                />
              </svg>
              Accompagnement personnalisé
            </span>
            <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
              >
                <path
                  d="M7 0.5L8.5 5.5H13.5L9.5 8.5L11 13.5L7 10.5L3 13.5L4.5 8.5L0.5 5.5H5.5L7 0.5Z"
                  fill="var(--kelaj-or)"
                />
              </svg>
              100 % en ligne
            </span>
            <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
              >
                <path
                  d="M7 0.5L8.5 5.5H13.5L9.5 8.5L11 13.5L7 10.5L3 13.5L4.5 8.5L0.5 5.5H5.5L7 0.5Z"
                  fill="var(--kelaj-or)"
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
