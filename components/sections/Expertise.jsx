export default function Expertise() {
  const piliers = [
    {
      num: "01",
      titre: "Audit & analyse",
      texte:
        "Identifier les points de friction, clarifier les process et améliorer l'existant avec un regard extérieur structuré.",
    },
    {
      num: "02",
      titre: "Optimisation des coûts",
      texte:
        "Mettre en place des solutions adaptées, opérationnelles et mesurables pour libérer des marges de manœuvre.",
    },
    {
      num: "03",
      titre: "Développement commercial",
      texte:
        "Structurer votre croissance, votre présence en ligne et vos leviers d'acquisition avec méthode et résultats.",
    },
  ];

  return (
    <section style={{ background: "#0E0E12", padding: "100px 0" }}>
      <div className="container">
        {/* Header */}
        <div style={{ maxWidth: 640, margin: "0 auto 72px", textAlign: "center" }}>
          <span
            className="label"
            style={{ display: "inline-block", marginBottom: 20 }}
          >
            Expertise terrain
          </span>
          <h2 className="section-title" style={{ marginBottom: 20 }}>
            Une expertise{" "}
            <span
              className="font-serif"
              style={{ fontStyle: "italic", color: "var(--k-cuivre)" }}
            >
              issue du terrain
            </span>
          </h2>
          <p
            style={{
              fontSize: "clamp(15px, 1.6vw, 17px)",
              lineHeight: 1.6,
              color: "rgba(242,242,240,0.65)",
              maxWidth: 520,
              margin: "0 auto",
            }}
          >
            Chez KELAJ, nos formations s&apos;appuient sur une expérience
            concrète de l&apos;entreprise : audit, optimisation des opérations,
            développement commercial et intégration des nouveaux leviers
            business.
          </p>
        </div>

        {/* 3 Piliers */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 40,
            marginBottom: 72,
          }}
        >
          {piliers.map((p) => (
            <div key={p.num} style={{ position: "relative" }}>
              <span
                style={{
                  fontSize: 11,
                  fontWeight: 600,
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  color: "var(--k-cuivre)",
                  opacity: 0.6,
                  display: "block",
                  marginBottom: 12,
                }}
              >
                {p.num}
              </span>
              <h3
                style={{
                  fontSize: "clamp(17px, 1.8vw, 20px)",
                  fontWeight: 600,
                  color: "var(--k-casse)",
                  marginBottom: 16,
                  letterSpacing: "-0.01em",
                  lineHeight: 1.3,
                }}
              >
                {p.titre}
              </h3>
              <div
                style={{
                  width: 24,
                  height: 1,
                  background: "var(--k-cuivre)",
                  opacity: 0.4,
                  marginBottom: 16,
                }}
              />
              <p
                style={{
                  fontSize: 14,
                  lineHeight: 1.65,
                  color: "rgba(242,242,240,0.55)",
                }}
              >
                {p.texte}
              </p>
            </div>
          ))}
        </div>

        {/* Conclusion */}
        <div
          style={{
            maxWidth: 680,
            margin: "0 auto",
            textAlign: "center",
            paddingTop: 40,
            borderTop: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          <p
            className="font-serif"
            style={{
              fontSize: "clamp(16px, 1.8vw, 19px)",
              fontStyle: "italic",
              lineHeight: 1.55,
              color: "rgba(242,242,240,0.75)",
            }}
          >
            Nos programmes ne sont pas pensés hors-sol : ils prolongent une
            expertise stratégique au service de la performance réelle des
            entreprises.
          </p>
        </div>
      </div>
    </section>
  );
}
