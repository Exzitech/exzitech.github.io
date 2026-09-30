// Génère index.html (fr), en/index.html et nl/index.html depuis src/page.html
// et src/textes.cjs, plus sitemap.xml et robots.txt. Usage : node generer.cjs
// S'arrête sur toute clé manquante ou inutilisée, pour que les trois langues
// restent alignées.

const fs = require("fs");
const path = require("path");

// Adresse publique du site : src/site.cjs, une seule ligne pour tout le monde.
// Les liens internes des pages restent relatifs et ne bougent pas.
const { SITE } = require("./src/site.cjs");
const LANGUES = [
  // locale : og:locale, pour que le partage annonce la bonne langue.
  { code: "fr", chemin: "/", fichier: "index.html", locale: "fr_BE" },
  { code: "en", chemin: "/en/", fichier: "en/index.html", locale: "en_US" },
  { code: "nl", chemin: "/nl/", fichier: "nl/index.html", locale: "nl_BE" },
];
// Image de partage (LinkedIn, Slack, Messages...) : 1200x630, fabriquee par
// `node src/partage.cjs` a partir de src/partage.html.
const IMAGE_PARTAGE = `${SITE}/img/partage.png`;
const LIENS_PUBLICS = ["https://github.com/Exzitech", "https://www.linkedin.com/in/tom-rogiers-290655221/"];
// Chemins internes relatifs a chaque page : le site marche aussi ouvert en
// fichier local (styles, polices, images), pas seulement sur GitHub Pages.
const racineDe = (l) => (l.fichier.includes("/") ? "../" : "");
const lienVers = (depuis, vers) => racineDe(depuis) + vers.fichier;

const racine = __dirname;
const gabarit = fs.readFileSync(path.join(racine, "src/page.html"), "utf8");
const textes = require("./src/textes.cjs");

const cles = new Set([...gabarit.matchAll(/\{\{(\w+)\}\}/g)].map((m) => m[1]));
const generees = new Set(["lang", "alternates", "accueil", "langues", "racine", "canonical", "social", "jsonld"]);

const erreurs = [];
for (const { code } of LANGUES) {
  const t = textes[code];
  if (!t) { erreurs.push(`langue absente : ${code}`); continue; }
  for (const c of cles) if (!generees.has(c) && !(c in t)) erreurs.push(`${code} : clé manquante « ${c} »`);
  for (const c of Object.keys(t)) if (!cles.has(c)) erreurs.push(`${code} : clé inutilisée « ${c} »`);
}
if (erreurs.length) {
  console.error(erreurs.join("\n"));
  process.exit(1);
}

const alternates = LANGUES.map((l) => `<link rel="alternate" hreflang="${l.code}" href="${SITE}${l.chemin}">`)
  .concat(`<link rel="alternate" hreflang="x-default" href="${SITE}/">`).join("\n");

// Valeur d'attribut HTML. Les esperluettes sont laissees telles quelles : les
// textes contiennent deja des entites ecrites a la main (&nbsp;), les re-encoder
// les afficherait en clair.
const attr = (s) => String(s).replace(/"/g, "&quot;").replace(/</g, "&lt;");

/** Cartes de partage (Open Graph + Twitter) : titre, description et image du lien partage. */
function social(langue, t) {
  const url = `${SITE}${langue.chemin}`;
  return [
    `<meta property="og:type" content="website">`,
    `<meta property="og:url" content="${url}">`,
    `<meta property="og:title" content="${attr(t.meta_titre)}">`,
    `<meta property="og:description" content="${attr(t.meta_desc)}">`,
    `<meta property="og:image" content="${IMAGE_PARTAGE}">`,
    `<meta property="og:image:width" content="1200">`,
    `<meta property="og:image:height" content="630">`,
    `<meta property="og:image:alt" content="${attr(t.meta_titre)}">`,
    `<meta property="og:locale" content="${langue.locale}">`,
    ...LANGUES.filter((l) => l.code !== langue.code)
      .map((l) => `<meta property="og:locale:alternate" content="${l.locale}">`),
    `<meta name="twitter:card" content="summary_large_image">`,
    `<meta name="twitter:title" content="${attr(t.meta_titre)}">`,
    `<meta name="twitter:description" content="${attr(t.meta_desc)}">`,
    `<meta name="twitter:image" content="${IMAGE_PARTAGE}">`,
  ].join("\n");
}

/**
 * Donnees structurees : qui je suis et ce que je propose. Rien qui ne soit
 * deja visible sur la page (nom, metier, langues, contact, liens publics).
 */
function jsonld(langue, t) {
  const donnees = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Exzitech",
    url: `${SITE}${langue.chemin}`,
    image: IMAGE_PARTAGE,
    description: t.meta_desc,
    email: "tom.exzitech@gmail.com",
    areaServed: "BE",
    availableLanguage: LANGUES.map((l) => l.code),
    founder: { "@type": "Person", name: "Tom Rogiers", jobTitle: t.surtitre, sameAs: LIENS_PUBLICS },
    sameAs: LIENS_PUBLICS,
  };
  // Sur une seule ligne : le gabarit replie les valeurs multilignes de toute facon.
  return `<script type="application/ld+json">${JSON.stringify(donnees)}</script>`;
}

for (const langue of LANGUES) {
  const t = textes[langue.code];
  const valeurs = {
    ...t,
    lang: langue.code,
    alternates,
    canonical: `${SITE}${langue.chemin}`,
    social: social(langue, t),
    jsonld: jsonld(langue, t),
    racine: racineDe(langue),
    accueil: lienVers(langue, langue),
    langues: LANGUES.map((l) => l.code === langue.code
      ? `<a href="${lienVers(langue, l)}" aria-current="page">${l.code.toUpperCase()}</a>`
      : `<a href="${lienVers(langue, l)}" hreflang="${l.code}" lang="${l.code}">${l.code.toUpperCase()}</a>`).join(""),
  };
  // Les textes sont replies sur une ligne (ils sont ecrits en litteraux multilignes
  // dans textes.cjs) ; les blocs generes gardent leurs retours, sinon toute l'en-tete
  // tiendrait sur une seule ligne illisible.
  const page = gabarit.replace(/\{\{(\w+)\}\}/g, (_, c) => {
    const v = String(valeurs[c]).trim();
    return generees.has(c) ? v : v.replace(/\s*\n\s*/g, " ");
  });
  const sortie = path.join(racine, langue.fichier);
  fs.mkdirSync(path.dirname(sortie), { recursive: true });
  fs.writeFileSync(sortie, page);
  console.log(`${langue.fichier} (${langue.code})`);
}

// Sitemap : les trois pages, chacune declarant ses traductions. Pas de <lastmod> :
// il serait remis a la date du jour a chaque regeneration, meme sans changement.
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${LANGUES.map((l) => `  <url>
    <loc>${SITE}${l.chemin}</loc>
${LANGUES.map((a) => `    <xhtml:link rel="alternate" hreflang="${a.code}" href="${SITE}${a.chemin}"/>`).join("\n")}
    <xhtml:link rel="alternate" hreflang="x-default" href="${SITE}/"/>
  </url>`).join("\n")}
</urlset>
`;
fs.writeFileSync(path.join(racine, "sitemap.xml"), sitemap);
console.log("sitemap.xml");

fs.writeFileSync(path.join(racine, "robots.txt"), `User-agent: *
Allow: /

Sitemap: ${SITE}/sitemap.xml
`);
console.log("robots.txt");
