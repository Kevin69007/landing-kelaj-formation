export default function FinalCTA() {
  return (
    <section
      className="bg-dark bg-grid-fine"
      style={{
        padding: "100px 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Halo cuivre */}
      <div
        className="halo-copper"
        style={{
          position: "absolute",
          top: "-30%",
          right: "-10%",
          width: 700,
          height: 700,
          borderRadius: "50%",
          pointerEvents: "none",
          opacity: 0.35,
        }}
      />
      {/* Halo bleu */}
      <div
        className="halo-blue"
        style={{
          position: "absolute",
          bottom: "-30%",
          left: "-10%",
          width: 600,
          height: 600,
          borderRadius: "50%",
          pointerEvents: "none",
          opacity: 0.5,
        }}
      />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div
          style={{ maxWidth: 720, margin: "0 auto", textAlign: "center" }}
        >
          <span
            className="label"
            style={{
              display: "inline-block",
              marginBottom: 20,
            }}
          >
            Prochaine étape
          </span>
          <h2
            className="section-title"
            style={{
              marginBottom: 20,
            }}
          >
            Prêt à transformer votre carrière ?
          </h2>
          <p
            className="display-sub"
            style={{ margin: "0 auto 40px", maxWidth: 540 }}
          >
            Que vous soyez indépendant, salarié ou dirigeant, nous avons une
            formation adaptée à vos objectifs. Parlez-en à un conseiller ou
            explorez notre catalogue.
          </p>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 16,
              justifyContent: "center",
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
              className="btn-ghost"
            >
              Explorer le catalogue
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
