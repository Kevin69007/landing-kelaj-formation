export default function Footer() {
  return (
    <footer
      style={{
        background: "var(--kelaj-bleu)",
        color: "var(--kelaj-blanc)",
        padding: "48px 0 32px",
      }}
    >
      <div className="container" style={{ textAlign: "center" }}>
        <p style={{ fontSize: "14px", opacity: 0.7, marginBottom: 16 }}>
          © {new Date().getFullYear()} Kelaj Formation — Tous droits réservés
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 24,
            fontSize: "13px",
            opacity: 0.6,
          }}
        >
          <a
            href="https://formation.kelaj-company.com/cookiepolicy"
            target="_blank"
            rel="noopener noreferrer"
          >
            Politique de cookies
          </a>
          <a
            href="https://formation.kelaj-company.com/cgv"
            target="_blank"
            rel="noopener noreferrer"
          >
            CGV
          </a>
          <a
            href="https://kelaj-company.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Kelaj Company
          </a>
        </div>
      </div>
    </footer>
  );
}
