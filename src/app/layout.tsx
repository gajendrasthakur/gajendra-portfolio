
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Gajendra Singh Thakur | SAP Integration Consultant",
    template: "%s | Gajendra Singh Thakur",
  },

  description:
    "Portfolio of Gajendra Singh Thakur, SAP Integration Consultant with 3+ years of experience in SAP CPI, SAP PI/PO, SAP BTP Integration Suite, APIs, and enterprise integrations.",

  keywords: [
    "Gajendra Singh Thakur",
    "SAP CPI",
    "SAP PI/PO",
    "SAP BTP",
    "SAP Integration Suite",
    "SAP Consultant",
    "SAP Integration Consultant",
    "IBM SAP Consultant",
    "SAP Developer",
    "Enterprise Integration",
    "REST API",
    "SOAP API",
    "OData",
    "IDoc",
    "RFC",
    "Groovy",
    "Bengaluru",
    "Portfolio",
  ],

  authors: [
    {
      name: "Gajendra Singh Thakur",
      url: "https://YOUR-DOMAIN.com",
    },
  ],

  creator: "Gajendra Singh Thakur",
  publisher: "Gajendra Singh Thakur",

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: "https://YOUR-DOMAIN.com",
  },

  openGraph: {
    title: "Gajendra Singh Thakur | SAP Integration Consultant",
    description:
      "SAP CPI, SAP PI/PO and SAP BTP Integration Suite Consultant with 3+ years of experience building enterprise integrations.",
    url: "https://YOUR-DOMAIN.com",
    siteName: "Gajendra Singh Thakur Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/profile.jpg",
        width: 1200,
        height: 630,
        alt: "Gajendra Singh Thakur",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Gajendra Singh Thakur | SAP Integration Consultant",
    description:
      "SAP CPI, SAP PI/PO and SAP BTP Integration Suite Consultant.",
    images: ["/profile.jpg"],
  },

  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
