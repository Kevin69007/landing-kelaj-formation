import Image from "next/image";

export default function Footer() {
  return (
    <footer
      style={{
        background: "#08080C",
        color: "var(--k-casse)",
        padding: "64px 0 28px",
        borderTop: "1px solid rgba(255,255,255,0.03)",
      }}
    >
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: 40,
            marginBottom: 48,
          }}
        >
          <div>
            <h3
              style={{
                fontSize: 16,
                fontWeight: 700,
                color: "var(--k-casse)",
                marginBottom: 12,
                letterSpacing: "-0.01em",
              }}
            >
              Kelaj Formation
            </h3>
            <p
              style={{
                fontSize: 13,
                lineHeight: 1.7,
                color: "rgba(255,255,255,0.55)",
                maxWidth: 280,
              }}
            >
              Formations professionnelles certifiantes en ligne.
              Business · Finance · IA.
            </p>
            <Image
              src="/assets/img/logo-square.png"
              alt="Kelaj Formation"
              width={140}
              height={140}
              style={{
                objectFit: "contain",
                filter: "brightness(0) invert(1)",
                marginTop: 20,
                opacity: 0.9,
              }}
            />
          </div>

          <div>
            <h4
              style={{
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: "2px",
                textTransform: "uppercase",
                color: "var(--k-cuivre)",
                marginBottom: 16,
              }}
            >
              Formations
            </h4>
            <ul
              style={{
                listStyle: "none",
                display: "flex",
                flexDirection: "column",
                gap: 10,
              }}
            >
              <li>
                <a
                  href="https://formation.kelaj-company.com/formations-ia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link"
                >
                  IA Pro
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

          <div>
            <h4
              style={{
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: "2px",
                textTransform: "uppercase",
                color: "var(--k-cuivre)",
                marginBottom: 16,
              }}
            >
              Entreprise
            </h4>
            <ul
              style={{
                listStyle: "none",
                display: "flex",
                flexDirection: "column",
                gap: 10,
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
                  Catalogue
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

        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.04)",
            paddingTop: 20,
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 12,
          }}
        >
          <p
            style={{
              fontSize: 12,
              color: "rgba(255,255,255,0.4)",
            }}
          >
            © {new Date().getFullYear()} Kelaj Formation
          </p>
          <div style={{ display: "flex", gap: 20 }}>
            <a
              href="https://formation.kelaj-company.com/cookiepolicy"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-legal"
            >
              Cookies
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
