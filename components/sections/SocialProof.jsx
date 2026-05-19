export default function SocialProof() {
  return (
    <section style={{ padding: "80px 0", background: "var(--kelaj-bleu)" }}>
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: 32,
            textAlign: "center",
          }}
        >
          <div>
            <div
              style={{
                fontSize: "clamp(36px, 5vw, 48px)",
                fontWeight: 700,
                color: "var(--kelaj-or)",
                marginBottom: 8,
              }}
            >
              + de 10
            </div>
            <div style={{ fontSize: "15px", color: "rgba(255,255,255,0.8)" }}>
              Années d'expérience
            </div>
          </div>
          <div>
            <div
              style={{
                fontSize: "clamp(36px, 5vw, 48px)",
                fontWeight: 700,
                color: "var(--kelaj-or)",
                marginBottom: 8,
              }}
            >
              2 100+
            </div>
            <div style={{ fontSize: "15px", color: "rgba(255,255,255,0.8)" }}>
              Formations dispensées
            </div>
          </div>
          <div>
            <div
              style={{
                fontSize: "clamp(36px, 5vw, 48px)",
                fontWeight: 700,
                color: "var(--kelaj-or)",
                marginBottom: 8,
              }}
            >
              22+
            </div>
            <div style={{ fontSize: "15px", color: "rgba(255,255,255,0.8)" }}>
              Domaines de compétences
            </div>
          </div>
          <div>
            <div
              style={{
                fontSize: "clamp(36px, 5vw, 48px)",
                fontWeight: 700,
                color: "var(--kelaj-or)",
                marginBottom: 8,
              }}
            >
              100%
            </div>
            <div style={{ fontSize: "15px", color: "rgba(255,255,255,0.8)" }}>
              En ligne & flexible
            </div>
          </div>
        </div>

        <div
          style={{
            marginTop: 56,
            textAlign: "center",
            padding: "32px",
            background: "rgba(255,255,255,0.05)",
            borderRadius: 16,
            border: "1px solid rgba(197, 165, 90, 0.2)",
          }}
        >
          <p
            style={{
              fontSize: "18px",
              fontStyle: "italic",
              color: "rgba(255,255,255,0.9)",
              maxWidth: 700,
              margin: "0 auto 16px",
              lineHeight: 1.6,
            }}
          >
            "Kelaj Formation m'a permis de me reconvertir dans l'IA appliquée à mon métier. Un accompagnement vraiment professionnel."
          </p>
          <p
            style={{
              fontSize: "14px",
              fontWeight: 600,
              color: "var(--kelaj-or)",
            }}
          >
            — Sophie L., Architecte
          </p>
        </div>
      </div>
    </section>
  );
}
