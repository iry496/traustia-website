import react from "@vitejs/plugin-react";
import { defineConfig, type Plugin } from "vite";

function resolveBasePath() {
  const explicitBase = process.env.VITE_BASE_PATH?.trim();
  if (explicitBase) {
    return explicitBase.startsWith("/") ? explicitBase : `/${explicitBase}`;
  }

  if (process.env.CUSTOM_DOMAIN === "true") return "/";

  const repository = process.env.GITHUB_REPOSITORY?.split("/")[1];
  return repository ? `/${repository}/` : "/";
}

function siteMetadata(): Plugin {
  const configuredUrl = process.env.VITE_SITE_URL?.trim();
  const canonical = configuredUrl
    ? configuredUrl.endsWith("/")
      ? configuredUrl
      : `${configuredUrl}/`
    : undefined;

  return {
    name: "traustia-site-metadata",
    transformIndexHtml(html) {
      if (!canonical) return html;
      const imageUrl = new URL("og.png", canonical).toString();
      const metadata = [
        `<link rel="canonical" href="${canonical}" />`,
        `<meta property="og:url" content="${canonical}" />`,
        `<meta property="og:image" content="${imageUrl}" />`,
        `<meta name="twitter:image" content="${imageUrl}" />`,
      ].join("\n    ");

      return html.replace("</head>", `    ${metadata}\n  </head>`);
    },
    generateBundle() {
      this.emitFile({
        type: "asset",
        fileName: "robots.txt",
        source: `User-agent: *\nAllow: /\n${canonical ? `Sitemap: ${new URL("sitemap.xml", canonical)}\n` : ""}`,
      });

      if (canonical) {
        this.emitFile({
          type: "asset",
          fileName: "sitemap.xml",
          source: `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n  <url>\n    <loc>${canonical}</loc>\n    <lastmod>2026-09-01</lastmod>\n  </url>\n  <url>\n    <loc>${new URL("iris/", canonical)}</loc>\n    <lastmod>2026-09-01</lastmod>\n  </url>\n</urlset>\n`,
        });
      }
    },
  };
}

export default defineConfig(() => {
  const base = resolveBasePath();
  return {
    base,
    plugins: [react(), siteMetadata()],
    build: {
      outDir: "dist",
      emptyOutDir: true,
      sourcemap: false,
    },
  };
});
