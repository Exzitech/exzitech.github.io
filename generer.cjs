// Génère index.html (fr), en/index.html et nl/index.html depuis src/page.html
// et src/textes.cjs. Usage : node generer.cjs
// S'arrête sur toute clé manquante ou inutilisée, pour que les trois langues
// restent alignées.

const fs = require("fs");
const path = require("path");

const SITE = "https://exzitech.github.io";
const LANGUES = [
  { code: "fr", chemin: "/", fichier: "index.html" },
  { code: "en", chemin: "/en/", fichier: "en/index.html" },
  { code: "nl", chemin: "/nl/", fichier: "nl/index.html" },
];
// Chemins internes relatifs a chaque page : le site marche aussi ouvert en
// fichier local (styles, polices, images), pas seulement sur GitHub Pages.
const racineDe = (l) => (l.fichier.includes("/") ? "../" : "");
const lienVers = (depuis, vers) => racineDe(depuis) + vers.fichier;

const racine = __dirname;
const gabarit = fs.readFileSync(path.join(racine, "src/page.html"), "utf8");
const textes = require("./src/textes.cjs");

const cles = new Set([...gabarit.matchAll(/\{\{(\w+)\}\}/g)].map((m) => m[1]));
const generees = new Set(["lang", "alternates", "accueil", "langues", "racine"]);

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

for (const langue of LANGUES) {
  const t = textes[langue.code];
  const valeurs = {
    ...t,
    lang: langue.code,
    alternates,
    racine: racineDe(langue),
    accueil: lienVers(langue, langue),
    langues: LANGUES.map((l) => l.code === langue.code
      ? `<a href="${lienVers(langue, l)}" aria-current="page">${l.code.toUpperCase()}</a>`
      : `<a href="${lienVers(langue, l)}" hreflang="${l.code}" lang="${l.code}">${l.code.toUpperCase()}</a>`).join(""),
  };
  const page = gabarit.replace(/\{\{(\w+)\}\}/g, (_, c) => String(valeurs[c]).trim().replace(/\s*\n\s*/g, " "));
  const sortie = path.join(racine, langue.fichier);
  fs.mkdirSync(path.dirname(sortie), { recursive: true });
  fs.writeFileSync(sortie, page);
  console.log(`${langue.fichier} (${langue.code})`);
}
