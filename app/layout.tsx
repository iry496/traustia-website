import type { Metadata } from "next";
import "../src/styles.css";

export const metadata: Metadata = {
  title: "Traustia | Sponsor-Side Biomedical Evidence Validation",
  description:
    "Traustia helps biotech sponsors prepare CRO work, review vendor outputs, independently validate biomarkers and models, and build decision-ready evidence dossiers.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    title: "Sponsor-Side Biomedical Evidence Validation | Traustia",
    description:
      "Four focused services for CRO readiness, output integrity, independent validation, and financing or partnering evidence.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sponsor-Side Biomedical Evidence Validation | Traustia",
    description:
      "Four focused services for CRO readiness, output integrity, independent validation, and financing or partnering evidence.",
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
