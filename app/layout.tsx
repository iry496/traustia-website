import type { Metadata } from "next";
import "../src/styles.css";

export const metadata: Metadata = {
  title: "Traustia | Biomedical Data Science, Reproducibility & Evidence Validation",
  description:
    "Traustia provides collaborative biostatistics, biomedical data science, omics analysis, reproducibility auditing, independent evidence validation, and translational research support.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  openGraph: {
    title: "Evidence you can defend. | Traustia",
    description:
      "Biomedical data science, reproducibility, and evidence validation for research teams.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Evidence you can defend. | Traustia",
    description:
      "Biomedical data science, reproducibility, and evidence validation for research teams.",
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
