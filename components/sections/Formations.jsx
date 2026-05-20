"use client";

const formations = [
  {
    id: "ia",
    titre: "Formations IA Pro",
    description:
      "Intégrez l'intelligence artificielle dans votre pratique quotidienne. 26 spécialités par métier.",
    picto: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 2L17 10H25L18.5 15.5L21 24L14 19L7 24L9.5 15.5L3 10H11L14 2Z" fill="currentColor" />
      </svg>
    ),
    lien: "https://formation.kelaj-company.com/formations-ia",
    tag: "Nouveau",
  },
  {
    id: "entrepreneur",
    titre: "Création d'entreprise",
    description:
      "Lancez votre business avec succès. Comptabilité, trésorerie, impôts, marketing.",
    picto: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 2L26 10V26H2V10L14 2Z" stroke="currentColor" strokeWidth="2" fill="none" />
        <path d="M10 26V16H18V26" stroke="currentColor" strokeWidth="2" fill="none" />
      </svg>
    ),
    lien: "https://formation.kelaj-company.com/categories/Entrepreneur",
    tag: null,
  },
  {
    id: "dentaire",
    titre: "Formation dentaire",
    description:
      "Toutes les formations pour les professionnels de la santé bucco-dentaire.",
    picto: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 3C10 3 6 6 6 11C6 16 10 25 14 25C18 25 22 16 22 11C22 6 18 3 14 3Z" stroke="currentColor" strokeWidth="2" fill="none" />
        <path d="M10 11H18" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
    lien: "https://formations-dentaire.fr",
    tag: null,
  },
  {
    id: "bureautique",
    titre: "Bureautique & Langues",
    description:
      "Excel, Word, PowerPoint, anglais, espagnol, chinois et plus encore.",
    picto: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="4" y="2" width="20" height="24" rx="2" stroke="currentColor" strokeWidth="2" fill="none" />
        <path d="M8 8H20M8 14H20M8 20H14" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
    lien: "https://formation.kelaj-company.com/services",
    tag: null,
  },
];

export default function Formations() {
  return (
    <section style={{ padding: "100px 0", background: "var(--kelaj-blanc)" }}>
      <div className="container">
        {/* Header de section */}
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <span className="label" style={{ display: "inline-block", marginBottom: 16 }}>
            Nos domaines
          </span>
          <h2 className="section-title" style={{ marginBottom: 16 }}>
            Formations phares
          </h2>
          <div className="divider" style={{ margin: "0 auto 16px" }} />
          <p className="section-sub" style={{ margin: "0 auto" }}>
            Quatre piliers pour développer vos compétences et accélérer votre carrière.
          </p>
        </div>

        {/* Grille */}
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
              className="surface"
              style={{
                display: "flex",
                flexDirection: "column",
                padding: 36,
                textDecoration: "none",
                position: "relative",
                overflow: "hidden",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(197, 165, 90, 0.35)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(11, 27, 61, 0.06)";
              }}
            >
              {/* Tag */}
              {f.tag && (
                <span
                  style={{
                    position: "absolute",
                    top: 20,
                    right: 20,
                    fontSize: 11,
                    fontWeight: 600,
                    letterSpacing: "1px",
                    textTransform: "uppercase",
                    color: "var(--kelaj-or)",
                    background: "var(--kelaj-or-pale)",
                    padding: "4px 10px",
                    borderRadius: 4,
                  }}
                >
                  {f.tag}
                </span>
              )}

              {/* Picto */}
              <div
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: 12,
                  background: "var(--kelaj-bleu)",
                  color: "var(--kelaj-or)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 28,
                }}
              >
                {f.picto}
              </div>

              {/* Contenu */}
              <h3
                style={{
                  fontSize: 20,
                  fontWeight: 700,
                  color: "var(--kelaj-bleu)",
                  marginBottom: 10,
                  letterSpacing: "-0.01em",
                }}
              >
                {f.titre}
              </h3>
              <p
                style={{
                  fontSize: 14,
                  color: "var(--kelaj-texte-secondaire)",
                  lineHeight: 1.6,
                  marginBottom: 28,
                  flex: 1,
                }}
              >
                {f.description}
              </p>

              {/* CTA carte */}
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  fontSize: 14,
                  fontWeight: 600,
                  color: "var(--kelaj-or)",
                  transition: "gap 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.gap = "12px";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.gap = "8px";
                }}
              >
                Découvrir
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path
                    d="M2.5 7H11.5M11.5 7L8 3.5M11.5 7L8 10.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
