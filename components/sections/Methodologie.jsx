export default function Methodologie() {
  const steps = [
    {
      num: "01",
      title: "Analyser",
      desc: "Audit de vos besoins, de vos compétences actuelles et de vos objectifs professionnels.",
    },
    {
      num: "02",
      title: "Structurer",
      desc: "Construction d'un parcours de formation sur mesure, aligné sur votre métier et votre niveau.",
    },
    {
      num: "03",
      title: "Déployer",
      desc: "Mise en œuvre avec accompagnement continu, outils pratiques et suivi des résultats.",
    },
  ];

  const stack = [
    { label: "Interface", width: "100%", alpha: 1 },
    { label: "Automatisation", width: "92%", alpha: 0.85 },
    { label: "Données", width: "84%", alpha: 0.7 },
    { label: "Outils", width: "76%", alpha: 0.55 },
    { label: "Infrastructure", width: "68%", alpha: 0.4 },
  ];

  return (
    <section
      className="bg-dark"
      style={{ padding: "100px 0", position: "relative", overflow: "hidden" }}
    >
      {/* Halo cuivre central */}
      <div
        className="halo-copper"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 900,
          height: 900,
          borderRadius: "50%",
          pointerEvents: "none",
          opacity: 0.25,
        }}
      />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <span
            className="label"
            style={{ display: "inline-block", marginBottom: 16 }}
          >
            Notre méthode
          </span>
          <h2 className="section-title" style={{ marginBottom: 16 }}>
            Analyser. Structurer. Déployer.
          </h2>
          <div className="divider" style={{ margin: "0 auto 16px" }} />
          <p
            className="display-sub"
            style={{ margin: "0 auto", maxWidth: 560 }}
          >
            Une approche systémique inspirée des meilleures pratiques du
            conseil en transformation digitale.
          </p>
        </div>

        {/* 3 Étapes */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 24,
            marginBottom: 80,
          }}
        >
          {steps.map((step, i) => (
            <div
              key={i}
              className="glass"
              style={{
                padding: "44px 32px",
                position: "relative",
              }}
            >
              {/* Numéro */}
              <div
                style={{
                  fontSize: 13,
                  fontWeight: 700,
                  color: "var(--kelaj-cuivre)",
                  letterSpacing: "2px",
                  marginBottom: 20,
                }}
              >
                {step.num}
              </div>
              <h3
                style={{
                  fontSize: 22,
                  fontWeight: 700,
                  color: "var(--kelaj-blanc-casse)",
                  marginBottom: 12,
                  letterSpacing: "-0.01em",
                }}
              >
                {step.title}
              </h3>
              <p
                style={{
                  fontSize: 14,
                  color: "rgba(242,242,240,0.6)",
                  lineHeight: 1.6,
                }}
              >
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Stack Système */}
        <div
          className="glass"
          style={{ padding: "48px", maxWidth: 720, margin: "0 auto" }}
        >
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <h3
              style={{
                fontSize: 18,
                fontWeight: 600,
                color: "var(--kelaj-blanc-casse)",
                marginBottom: 8,
                letterSpacing: "-0.01em",
              }}
            >
              Stack Système KELAJ
            </h3>
            <p
              style={{
                fontSize: 14,
                color: "rgba(242,242,240,0.45)",
              }}
            >
              Cinq couches pour une formation optimale
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {stack.map((layer, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 16,
                }}
              >
                <div
                  style={{
                    width: 110,
                    fontSize: 12,
                    fontWeight: 500,
                    color: "rgba(242,242,240,0.45)",
                    textAlign: "right",
                    flexShrink: 0,
                  }}
                >
                  {layer.label}
                </div>
                <div
                  style={{
                    flex: 1,
                    height: 28,
                    background: "rgba(255,255,255,0.03)",
                    borderRadius: 4,
                    overflow: "hidden",
                    border: "1px solid rgba(255,255,255,0.04)",
                  }}
                >
                  <div
                    style={{
                      width: layer.width,
                      height: "100%",
                      background: `rgba(199, 138, 74, ${layer.alpha})`,
                      borderRadius: 4,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
