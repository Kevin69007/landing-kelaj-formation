export default function Footer() {
  return (
    <footer
      style={{
        background: "#08080C",
        color: "var(--kelaj-blanc-casse)",
        padding: "72px 0 32px",
        borderTop: "1px solid rgba(255,255,255,0.04)",
      }}
    >
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: 48,
            marginBottom: 56,
          }}
        >
          {/* Brand */}
          <div>
            <h3
              style={{
                fontSize: 18,
                fontWeight: 700,
                color: "var(--kelaj-blanc-casse)",
                marginBottom: 16,
                letterSpacing: "-0.01em",
              }}
            >
              Kelaj Formation
            </h3>
            <p
              style={{
                fontSize: 14,
                lineHeight: 1.7,
                color: "rgba(255,255,255,0.5)",
                maxWidth: 300,
              }}
            >
              Formations professionnelles certifiantes en ligne. Business ·
              Finance · IA.
            </p>
          </div>

          {/* Formations */}
          <div>
            <h4
              style={{
                fontSize: 12,
                fontWeight: 600,
                letterSpacing: "2px",
                textTransform: "uppercase",
                color: "var(--kelaj-cuivre)",
                marginBottom: 20,
              }}
            >
              Nos formations
            </h4>
            <ul
              style={{
                listStyle: "none",
                display: "flex",
                flexDirection: "column",
                gap: 12,
              }}
            >
              <li>
                <a
                  href="https://formation.kelaj-company.com/formations-ia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link"
                >
                  Formations IA Pro
                </a>
              </li>
              <li>
                <a
                  href="https://formation.kelaj-company.com/categories/Entrepreneur"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link"
                >
                  Création d&apos;entreprise
                </a>
              </li>
              <li>
                <a
                  href="https://formations-dentaire.fr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link"
                >
                  Formation dentaire
                </a>
              </li>
              <li>
                <a
                  href="https://formation.kelaj-company.com/services"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link"
                >
                  Bureautique &amp; Langues
                </a>
              </li>
            </ul>
          </div>

          {/* Entreprise */}
          <div>
            <h4
              style={{
                fontSize: 12,
                fontWeight: 600,
                letterSpacing: "2px",
                textTransform: "uppercase",
                color: "var(--kelaj-cuivre)",
                marginBottom: 20,
              }}
            >
              Entreprise
            </h4>
            <ul
              style={{
                listStyle: "none",
                display: "flex",
                flexDirection: "column",
                gap: 12,
              }}
            >
              <li>
                <a
                  href="https://kelaj-company.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link"
                >
                  Kelaj Company
                </a>
              </li>
              <li>
                <a
                  href="https://formation.kelaj-company.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link"
                >
                  Catalogue formations
                </a>
              </li>
              <li>
                <a
                  href="https://calendly.com/contact-kelaj-company/prendre-rdv-avec-un-conseiller-formation"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link"
                >
                  Prendre RDV
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.06)",
            paddingTop: 24,
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 16,
          }}
        >
          <p
            style={{
              fontSize: 13,
              color: "rgba(255,255,255,0.3)",
            }}
          >
            © {new Date().getFullYear()} Kelaj Formation — Tous droits
            réservés
          </p>
          <div style={{ display: "flex", gap: 24 }}>
            <a
              href="https://formation.kelaj-company.com/cookiepolicy"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-legal"
            >
              Politique de cookies
            </a>
            <a
              href="https://formation.kelaj-company.com/cgv"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-legal"
            >
              CGV
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
