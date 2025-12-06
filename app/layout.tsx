import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import { generateHomeMetadata } from "./lib/seo/metadata";

// Use our centralized SEO metadata system
export const metadata: Metadata = {
  ...generateHomeMetadata(),
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://www.visaportal.online"
  ),
  icons: {
    icon: [{ url: "/icon.png", type: "image/png" }],
    apple: [{ url: "/apple-icon.png", type: "image/png" }],
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
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
          src="https://www.googletagmanager.com/gtag/js?id=G-L8ZTZHMWRZ"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-L8ZTZHMWRZ');
            `,
          }}
        />
      </head>
      <body className="antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
