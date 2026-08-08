import type { Metadata } from "next";
import "../src/styles.css";

export const metadata: Metadata = {
  title: "Traustia | Independent Validation of Biomedical Prediction Claims",
  description:
    "Traustia independently validates biomedical prediction claims—reconstructing and re-running the analysis to test whether the result actually holds.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  openGraph: {
    title: "Evidence you can defend. | Traustia",
    description:
      "Independent validation of biomedical prediction claims through analytical reconstruction, leakage detection, provenance control, and evidence dossiers.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Evidence you can defend. | Traustia",
    description:
      "Independent validation of biomedical prediction claims through analytical reconstruction, leakage detection, provenance control, and evidence dossiers.",
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
