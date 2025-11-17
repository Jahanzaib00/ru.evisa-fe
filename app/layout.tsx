import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";

const SITE_NAME = "ESTA Application Online";
const SITE_URL = "https://visaportal.online";
const SITE_DESCRIPTION =
  "Apply for U.S. ESTA in 3 easy steps. Expert assistance, 99% approval rate, 24/7 support. Get approved within 72 hours. Fast, secure, and reliable ESTA application service.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "ESTA Application - Fast U.S. Travel Authorization",
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  icons: {
    icon: [{ url: "/icon.png", type: "image/png" }],
    apple: [{ url: "/apple-icon.png", type: "image/png" }],
  },
  keywords: [
    "ESTA application",
    "US ESTA",
    "travel authorization",
    "visa waiver program",
    "ESTA online",
    "apply ESTA",
    "USA travel permit",
    "electronic travel authorization",
    "ESTA assistance",
    "fast ESTA approval",
  ],
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    title: "ESTA Application - Fast U.S. Travel Authorization",
    description: SITE_DESCRIPTION,
    siteName: SITE_NAME,
    images: [
      {
        url: "/images/hero.png", // Create this image (1200x630px)
        width: 1200,
        height: 630,
        alt: "ESTA Application Service",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ESTA Application - Fast U.S. Travel Authorization",
    description: SITE_DESCRIPTION,
    images: ["/images/logo.png"],
    creator: "@yourtwitterhandle", // Update with actual Twitter handle
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
  verification: {
    google: "your-google-verification-code", // Add Google Search Console verification
    // yandex: "your-yandex-verification-code",
    // bing: "your-bing-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Google Analytics - Add your GA4 Measurement ID */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XXXXXXXXXX');
            `,
          }}
        />
      </head>
      <body className="antialiased">
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
