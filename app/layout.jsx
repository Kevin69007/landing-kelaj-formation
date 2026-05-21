import './globals.css';
import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google';

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
  const fbPixelId = '853995805272230';
  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID;
  const linkedInId = process.env.NEXT_PUBLIC_LINKEDIN_PARTNER_ID;

  return (
    <html lang="fr">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
            `,
          }}
        />
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

        {fbPixelId && (
          <>
            <script
              id="meta-pixel"
              dangerouslySetInnerHTML={{
                __html: `
                !function(f,b,e,v,n,t,s)
                {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)}(window,document,'script',
                'https://connect.facebook.net/en_US/fbevents.js');
                fbq('init', '${fbPixelId}');
                fbq('track', 'PageView');
                `,
              }}
            />
            <noscript>
              <img
                height="1"
                width="1"
                style={{ display: 'none' }}
                src={`https://www.facebook.com/tr?id=${fbPixelId}&ev=PageView&noscript=1`}
                alt=""
              />
            </noscript>
          </>
        )}
        {linkedInId && (
          <>
            <script
              id="linkedin-insight"
              dangerouslySetInnerHTML={{
                __html: `
                _linkedin_partner_id = "${linkedInId}";
                window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
                window._linkedin_data_partner_ids.push(_linkedin_partner_id);
                `,
              }}
            />
            <script
              id="linkedin-insight-script"
              dangerouslySetInnerHTML={{
                __html: `
                (function(l) {
                  if (!l) {
                    window.lintrk = function(a, b) {
                      window.lintrk.q.push([a, b])
                    };
                    window.lintrk.q = []
                  }
                  var s = document.getElementsByTagName("script")[0];
                  var b = document.createElement("script");
                  b.type = "text/javascript";
                  b.async = true;
                  b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
                  s.parentNode.insertBefore(b, s);
                })(window.lintrk);
                `,
              }}
            />
            <noscript>
              <img
                height="1"
                width="1"
                style={{ display: 'none' }}
                alt=""
                src={`https://px.ads.linkedin.com/collect/?pid=${linkedInId}&fmt=gif`}
              />
            </noscript>
          </>
        )}
      </head>
      <body>
        {children}
        {gaId && <GoogleAnalytics gaId={gaId} />}
        {gtmId && <GoogleTagManager gtmId={gtmId} />}
      </body>
    </html>
  );
}
