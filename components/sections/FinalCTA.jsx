export default function FinalCTA() {
  return (
    <section
      style={{
        padding: "100px 0",
        background: "var(--kelaj-bleu)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative circles */}
      <div
        style={{
          position: "absolute",
          top: "-20%",
          right: "-10%",
          width: 500,
          height: 500,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(197,165,90,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-20%",
          left: "-10%",
          width: 400,
          height: 400,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(255,255,255,0.03) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div style={{ maxWidth: 720, margin: "0 auto", textAlign: "center" }}>
          <span
            className="label"
            style={{
              display: "inline-block",
              marginBottom: 20,
              color: "var(--kelaj-or)",
            }}
          >
            Prochaine étape
          </span>
          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 40px)",
              fontWeight: 700,
              lineHeight: 1.15,
              color: "var(--kelaj-blanc)",
              marginBottom: 20,
              letterSpacing: "-0.01em",
            }}
          >
            Prêt à faire évoluer votre carrière ?
          </h2>
          <p
            style={{
              fontSize: "clamp(16px, 2vw, 18px)",
              color: "rgba(255,255,255,0.75)",
              lineHeight: 1.6,
              margin: "0 auto 40px",
              maxWidth: 540,
            }}
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
              style={{
                background: "var(--kelaj-or)",
                color: "var(--kelaj-bleu)",
                boxShadow: "0 4px 14px rgba(197, 165, 90, 0.25)",
              }}
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
