import type { Metadata } from "next";
import { Inter, Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://webcontrol.smarterbot.cl"),
  title: {
    default: "Smarter OS v5 | Infraestructura Soberana Crossborder",
    template: "%s | Smarter OS"
  },
  description: "Infraestructura Soberana para el Mercado Crossborder CL-AR. Capa Cloud + Hardware Industrial + Organoid Intelligence. Odoo ERP, n8n, Supabase, Grafana.",
  keywords: [
    "Smarter OS",
    "infraestructura",
    "crossborder",
    "Chile",
    "Argentina",
    "Odoo",
    "ERP",
    "n8n",
    "Supabase",
    "Grafana",
    "SII",
    "AFIP",
    "Smarterbot"
  ],
  authors: [{ name: "Smarter OS Team", url: "https://smarterbot.cl" }],
  creator: "Smarter OS",
  publisher: "Smarter OS",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "es_CL",
    url: "https://webcontrol.smarterbot.cl",
    siteName: "Smarter OS",
    title: "Smarter OS v5 | Infraestructura Soberana Crossborder",
    description: "Infraestructura Soberana para el Mercado Crossborder. Santiago ↔ Mendoza ↔ Buenos Aires.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Smarter OS - La Red es el Territorio"
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Smarter OS v5 | Infraestructura Soberana",
    description: "Infraestructura Sovereign Crossborder. Chile + Argentina + Organoid Intelligence",
    images: ["/og-image.png"],
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
  verification: {
    google: "google-site-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-CL" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#05070a" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </head>
      <body className={`${inter.variable} ${outfit.variable} ${jetbrainsMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
