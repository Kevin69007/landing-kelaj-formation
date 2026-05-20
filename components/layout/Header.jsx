import Image from "next/image";

export default function Header() {
  return (
    <header
      style={{
        background: "rgba(10, 14, 31, 0.85)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        borderBottom: "1px solid rgba(255,255,255,0.05)",
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
          height: 72,
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
            width={180}
            height={48}
            style={{
              objectFit: "contain",
              filter: "brightness(0) invert(1)",
            }}
            priority
          />
        </a>
        <nav>
          <a
            href="https://calendly.com/contact-kelaj-company/prendre-rdv-avec-un-conseiller-formation"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{ padding: "12px 24px", fontSize: "14px" }}
          >
            Prendre RDV
          </a>
        </nav>
      </div>
    </header>
  );
}
