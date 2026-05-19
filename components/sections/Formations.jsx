"use client";

const formations = [
  {
    titre: "Formations IA Pro",
    description:
      "Intégrez l'intelligence artificielle dans votre pratique quotidienne. 26 spécialités par métier.",
    image: "🤖",
    lien: "https://formation.kelaj-company.com/formations-ia",
  },
  {
    titre: "Création d'entreprise",
    description:
      "Lancez votre business avec succès. Comptabilité, trésorerie, impôts, marketing.",
    image: "🚀",
    lien: "https://formation.kelaj-company.com/categories/Entrepreneur",
  },
  {
    titre: "Formation dentaire",
    description:
      "Toutes les formations pour les professionnels de la santé bucco-dentaire.",
    image: "🦷",
    lien: "https://formations-dentaire.fr",
  },
  {
    titre: "Bureautique & Langues",
    description:
      "Excel, Word, PowerPoint, anglais, espagnol, chinois et plus encore.",
    image: "📚",
    lien: "https://formation.kelaj-company.com/services",
  },
];

export default function Formations() {
  return (
    <section style={{ padding: "80px 0", background: "#ffffff" }}>
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <h2
            style={{
              fontSize: "clamp(26px, 4vw, 36px)",
              fontWeight: 700,
              color: "var(--kelaj-bleu)",
              marginBottom: 12,
            }}
          >
            Nos formations phares
          </h2>
          <p style={{ color: "var(--kelaj-texte-secondaire)", fontSize: "16px" }}>
            Choisissez la vôtre et commencez dès maintenant
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 24,
          }}
        >
          {formations.map((f, i) => (
            <a
              key={i}
              href={f.lien}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "block",
                background: "var(--kelaj-blanc)",
                borderRadius: 16,
                padding: 32,
                border: "1px solid rgba(12, 30, 63, 0.08)",
                transition: "all 0.3s ease",
                textDecoration: "none",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--kelaj-or)";
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow =
                  "0 12px 40px rgba(12, 30, 63, 0.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(12, 30, 63, 0.08)";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <div
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: 14,
                  background: "var(--kelaj-bleu)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 24,
                  marginBottom: 20,
                }}
              >
                {f.image}
              </div>
              <h3
                style={{
                  fontSize: "18px",
                  fontWeight: 700,
                  color: "var(--kelaj-bleu)",
                  marginBottom: 10,
                }}
              >
                {f.titre}
              </h3>
              <p
                style={{
                  fontSize: "14px",
                  color: "var(--kelaj-texte-secondaire)",
                  lineHeight: 1.55,
                  marginBottom: 20,
                }}
              >
                {f.description}
              </p>
              <span
                style={{
                  fontSize: "14px",
                  fontWeight: 600,
                  color: "var(--kelaj-or)",
                }}
              >
                Découvrir →
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
