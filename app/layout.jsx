export const metadata = {
  title: "Kelaj Formation — Business · Finance · IA",
  description:
    "Formations professionnelles : IA, création d'entreprise, bureautique, langues. Accompagnement personnalisé, résultats mesurables.",
  openGraph: {
    title: "Kelaj Formation — Business · Finance · IA",
    description:
      "Formations professionnelles certifiantes en ligne.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
