"use client";

const stats = [
  {
    number: "+ de 10",
    label: "Années d'expertise",
    desc: "Dans la formation professionnelle et le conseil en entreprise",
  },
  {
    number: "2 100+",
    label: "Formations dispensées",
    desc: "Auprès de professionnels dans tous les secteurs d'activité",
  },
  {
    number: "22+",
    label: "Domaines couverts",
    desc: "De l'IA à la création d'entreprise, en passant par la santé",
  },
  {
    number: "100 %",
    label: "En ligne & flexible",
    desc: "Apprenez à votre rythme, où que vous soyez, sans contrainte",
  },
];

export default function SocialProof() {
  return (
    <section style={{ padding: "100px 0", background: "var(--kelaj-casse)" }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <span
            className="label"
            style={{ display: "inline-block", marginBottom: 16 }}
          >
            Notre expérience
          </span>
          <h2 className="section-title" style={{ marginBottom: 16 }}>
            Des chiffres qui parlent
          </h2>
          <div className="divider" style={{ margin: "0 auto 16px" }} />
          <p className="section-sub" style={{ margin: "0 auto" }}>
            Une expertise reconnue, des résultats mesurables, des professionnels
            formés avec exigence.
          </p>
        </div>

        {/* Stats Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: 24,
            marginBottom: 80,
          }}
        >
          {stats.map((s, i) => (
            <div
              key={i}
              className="surface"
              style={{ padding: "40px 28px", textAlign: "center" }}
            >
              <div
                style={{
                  fontSize: "clamp(32px, 4vw, 42px)",
                  fontWeight: 700,
                  color: "var(--kelaj-or)",
                  marginBottom: 10,
                  lineHeight: 1,
                  letterSpacing: "-0.02em",
                }}
              >
                {s.number}
              </div>
              <div
                style={{
                  fontSize: "15px",
                  fontWeight: 600,
                  color: "var(--kelaj-bleu)",
                  marginBottom: 8,
                }}
              >
                {s.label}
              </div>
              <div
                style={{
                  fontSize: "13px",
                  color: "var(--kelaj-texte-secondaire)",
                  lineHeight: 1.55,
                }}
              >
                {s.desc}
              </div>
            </div>
          ))}
        </div>

        {/* Testimonial */}
        <div
          className="surface-elevated"
          style={{
            maxWidth: 800,
            margin: "0 auto",
            padding: "52px 44px",
            textAlign: "center",
            position: "relative",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 28,
              left: 36,
              fontSize: 80,
              lineHeight: 1,
              color: "var(--kelaj-or)",
              opacity: 0.12,
              fontFamily: "Georgia, serif",
              fontWeight: 700,
              userSelect: "none",
            }}
          >
            &ldquo;
          </div>
          <p
            style={{
              fontSize: "clamp(16px, 2vw, 20px)",
              fontStyle: "italic",
              color: "var(--kelaj-texte)",
              lineHeight: 1.7,
              marginBottom: 28,
              position: "relative",
              zIndex: 1,
            }}
          >
            Kelaj Formation m&apos;a permis de me reconvertir dans l&apos;IA
            appliquée à mon métier. Un accompagnement vraiment professionnel,
            des contenus pointus et une pédagogie qui fait la différence. Je
            recommande vivement.
          </p>
          <div
            style={{
              width: 40,
              height: 2,
              background: "var(--kelaj-or)",
              margin: "0 auto 20px",
              borderRadius: 1,
            }}
          />
          <p
            style={{
              fontSize: "15px",
              fontWeight: 600,
              color: "var(--kelaj-bleu)",
              marginBottom: 4,
            }}
          >
            Sophie L.
          </p>
          <p
            style={{
              fontSize: "13px",
              color: "var(--kelaj-texte-tertiaire)",
            }}
          >
            Architecte d&apos;intérieur — Formation IA Pro
          </p>
        </div>
      </div>
    </section>
  );
}
