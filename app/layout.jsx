import './globals.css';

export const metadata = {
  title: 'Kelaj Formation — Business · Finance · IA',
  description:
    "Formations professionnelles : IA, création d'entreprise, bureautique, langues. Accompagnement personnalisé, résultats mesurables.",
  openGraph: {
    title: 'Kelaj Formation — Business · Finance · IA',
    description: 'Formations professionnelles certifiantes en ligne.',
    type: 'website',
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
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400;1,600;1,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
