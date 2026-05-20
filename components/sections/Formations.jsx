"use client";

const IconBrain = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
  >
    <path d="M12 2C7.5 2 4 5.5 4 10C4 14.5 7.5 21 12 21C16.5 21 20 14.5 20 10C20 5.5 16.5 2 12 2Z" />
    <path d="M12 2V21" />
    <path d="M7.5 8C9.5 10 14.5 10 16.5 8" />
    <path d="M7.5 14C9.5 12 14.5 12 16.5 14" />
  </svg>
);

const IconRocket = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 2.5C12 2.5 16 7 16 12V15.5L12 18L8 15.5V12C8 7 12 2.5 12 2.5Z" />
    <path d="M8 15.5C6.5 16.5 5.5 18.5 5.5 20.5C5.5 20.5 7.5 19.5 8.5 17.5" />
    <path d="M16 15.5C17.5 16.5 18.5 18.5 18.5 20.5C18.5 20.5 16.5 19.5 15.5 17.5" />
    <circle cx="12" cy="11" r="2" />
  </svg>
);

const IconShield = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 22C12 22 20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z" />
  </svg>
);

const IconCubes = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 2L2 7L12 12L22 7L12 2Z" />
    <path d="M2 17L12 22L22 17" />
    <path d="M2 12L12 17L22 12" />
  </svg>
);

const formations = [
  {
    id: "ia",
    titre: "Formations IA Pro",
    description:
      "Intégrez l'intelligence artificielle dans votre pratique quotidienne. 26 spécialités par métier.",
    icon: <IconBrain />,
    lien: "https://formation.kelaj-company.com/formations-ia",
    tag: "Nouveau",
  },
  {
    id: "entrepreneur",
    titre: "Création d'entreprise",
    description:
      "Lancez votre business avec succès. Comptabilité, trésorerie, impôts, marketing.",
    icon: <IconRocket />,
    lien: "https://formation.kelaj-company.com/categories/Entrepreneur",
    tag: null,
  },
  {
    id: "dentaire",
    titre: "Formation dentaire",
    description:
      "Toutes les formations pour les professionnels de la santé bucco-dentaire.",
    icon: <IconShield />,
    lien: "https://formations-dentaire.fr",
    tag: null,
  },
  {
    id: "bureautique",
    titre: "Bureautique & Langues",
    description:
      "Excel, Word, PowerPoint, anglais, espagnol, chinois et plus encore.",
    icon: <IconCubes />,
    lien: "https://formation.kelaj-company.com/services",
    tag: null,
  },
];

export default function Formations() {
  return (
    <section
      className="bg-casse"
      style={{ padding: "100px 0", position: "relative" }}
    >
      {/* Grille technique fine sur fond clair */}
      <div
        className="bg-grid-fine-dark"
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.5,
          pointerEvents: "none",
        }}
      />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <span
            className="label"
            style={{
              display: "inline-block",
              marginBottom: 16,
              color: "var(--kelaj-cuivre)",
            }}
          >
            Nos domaines
          </span>
          <h2
            className="section-title section-title-dark"
            style={{ marginBottom: 16 }}
          >
            Formations phares
          </h2>
          <div className="divider" style={{ margin: "0 auto 16px" }} />
          <p className="section-sub" style={{ margin: "0 auto" }}>
            Quatre piliers pour développer vos compétences et accélérer votre
            carrière.
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
              className="card-dark"
              style={{
                display: "flex",
                flexDirection: "column",
                padding: 36,
                textDecoration: "none",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Ligne cuivre en haut */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 36,
                  right: 36,
                  height: 1,
                  background:
                    "linear-gradient(90deg, transparent, rgba(199,138,74,0.4), transparent)",
                }}
              />

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
                    color: "var(--kelaj-cuivre)",
                    background: "rgba(199, 138, 74, 0.12)",
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
                  background: "rgba(199, 138, 74, 0.08)",
                  color: "var(--kelaj-cuivre)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 28,
                  border: "1px solid rgba(199, 138, 74, 0.12)",
                }}
              >
                {f.icon}
              </div>

              {/* Contenu */}
              <h3
                style={{
                  fontSize: 20,
                  fontWeight: 700,
                  color: "var(--kelaj-blanc-casse)",
                  marginBottom: 10,
                  letterSpacing: "-0.01em",
                }}
              >
                {f.titre}
              </h3>
              <p
                style={{
                  fontSize: 14,
                  color: "rgba(242, 242, 240, 0.65)",
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
                  color: "var(--kelaj-cuivre)",
                  transition: "gap 0.3s ease",
                }}
              >
                Découvrir
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                >
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
