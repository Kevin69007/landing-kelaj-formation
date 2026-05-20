import Image from "next/image";

export default function Header() {
  return (
    <header
      style={{
        background: "rgba(10, 14, 31, 0.7)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderBottom: "1px solid rgba(255,255,255,0.04)",
        position: "sticky",
        top: 0,
        zIndex: 100,
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 68,
        }}
      >
        <a
          href="https://formation.kelaj-company.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/assets/img/logo-kelaj-transparent.png"
            alt="Kelaj Formation"
            width={160}
            height={42}
            style={{
              objectFit: "contain",
              filter: "brightness(0) invert(1)",
            }}
            priority
          />
        </a>
        <nav style={{ display: "flex", gap: 24, alignItems: "center" }}>
          <a
            href="https://formation.kelaj-company.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: 14,
              color: "rgba(242,242,240,0.75)",
              transition: "color 0.25s",
            }}
          >
            Formations
          </a>
          <a
            href="https://calendly.com/contact-kelaj-company/prendre-rdv-avec-un-conseiller-formation"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{ padding: "10px 20px", fontSize: "13px" }}
          >
            Prendre RDV
          </a>
        </nav>
      </div>
    </header>
  );
}
