"use client";

const stats = [
  { number: "+ de 10", label: "Années d'expertise" },
  { number: "2 100+", label: "Formations dispensées" },
  { number: "22+", label: "Domaines couverts" },
  { number: "100 %", label: "En ligne & flexible" },
];

export default function SocialProof() {
  return (
    <section
      style={{
        background: "linear-gradient(180deg, #0A0E1F 0%, #0E0E12 100%)",
        padding: "100px 0",
        position: "relative",
      }}
    >
      <div className="container">
        {/* Stats */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: 20,
            marginBottom: 80,
          }}
        >
          {stats.map((s, i) => (
            <div
              key={i}
              className="glass"
              style={{ padding: "32px 24px", textAlign: "center" }}
            >
              <div
                style={{
                  fontSize: "clamp(28px, 3.5vw, 36px)",
                  fontWeight: 700,
                  color: "var(--k-casse)",
                  marginBottom: 6,
                  lineHeight: 1,
                  letterSpacing: "-0.02em",
                }}
              >
                {s.number}
              </div>
              <div
                style={{
                  fontSize: 12,
                  fontWeight: 500,
                  letterSpacing: "1.5px",
                  textTransform: "uppercase",
                  color: "rgba(242,242,240,0.55)",
                }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>

        {/* Témoignage */}
        <div
          className="card"
          style={{
            maxWidth: 760,
            margin: "0 auto",
            padding: "52px 48px",
            textAlign: "center",
            position: "relative",
            borderColor: "rgba(199, 138, 74, 0.1)",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 24,
              left: 32,
              fontSize: 72,
              lineHeight: 1,
              color: "var(--k-cuivre)",
              opacity: 0.1,
              fontFamily: "'Playfair Display', Georgia, serif",
              fontWeight: 700,
              userSelect: "none",
            }}
          >
            &ldquo;
          </div>
          <p
            className="font-serif"
            style={{
              fontSize: "clamp(17px, 2vw, 22px)",
              fontStyle: "italic",
              fontWeight: 400,
              color: "rgba(242,242,240,0.85)",
              lineHeight: 1.6,
              marginBottom: 28,
              position: "relative",
              zIndex: 1,
            }}
          >
            Kelaj Formation m&apos;a permis de me reconvertir dans l&apos;IA
            appliquée à mon métier. Un accompagnement vraiment professionnel,
            des contenus pointus et une pédagogie qui fait la différence.
          </p>
          <div
            style={{
              width: 32,
              height: 1,
              background: "var(--k-cuivre)",
              margin: "0 auto 20px",
            }}
          />
          <p
            style={{
              fontSize: 14,
              fontWeight: 600,
              color: "var(--k-casse)",
              marginBottom: 4,
            }}
          >
            Sophie L.
          </p>
          <p
            style={{
              fontSize: 12,
              color: "rgba(242,242,240,0.5)",
              letterSpacing: "0.5px",
            }}
          >
            Architecte d&apos;intérieur — Formation IA Pro
          </p>
        </div>
      </div>
    </section>
  );
}
