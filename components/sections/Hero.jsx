export default function Hero() {
  return (
    <section
      style={{
        background: "linear-gradient(180deg, #f8f9fb 0%, #ffffff 100%)",
        padding: "80px 0 60px",
        textAlign: "center",
      }}
    >
      <div className="container">
        <span
          style={{
            display: "inline-block",
            fontSize: "13px",
            fontWeight: 600,
            letterSpacing: "2px",
            textTransform: "uppercase",
            color: "var(--kelaj-or)",
            marginBottom: 20,
          }}
        >
          Conseil · Optimisation · Formation · Performance
        </span>

        <h1
          style={{
            fontSize: "clamp(32px, 5vw, 52px)",
            fontWeight: 700,
            lineHeight: 1.15,
            color: "var(--kelaj-bleu)",
            maxWidth: 800,
            margin: "0 auto 20px",
          }}
        >
          Formez-vous avec les experts
        </h1>

        <p
          style={{
            fontSize: "18px",
            color: "var(--kelaj-texte-secondaire)",
            maxWidth: 600,
            margin: "0 auto 40px",
            lineHeight: 1.6,
          }}
        >
          Kelaj Formation vous accompagne dans vos projets professionnels. Découvrez nos programmes sur mesure en IA, entrepreneuriat, bureautique, langues et bien plus.
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
            <span>→</span>
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
      </div>
    </section>
  );
}
