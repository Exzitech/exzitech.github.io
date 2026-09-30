// Fabrique img/partage.png (1200x630), l'image que montrent LinkedIn, Slack ou
// Messages quand on partage un lien du site : node src/partage.cjs
//
// Rend src/partage.html dans Edge sans fenetre, a la taille exacte de l'image.
// La page utilise les polices et les couleurs du site, donc l'image suit le site
// au lieu de vieillir dans son coin. Le domaine vient de src/site.cjs.
const { execFileSync } = require("child_process");
const fs = require("fs");
const os = require("os");
const path = require("path");
const { DOMAINE } = require("./site.cjs");

const EDGE = [
  "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe",
  "C:/Program Files/Microsoft/Edge/Application/msedge.exe",
].find((p) => fs.existsSync(p));
if (!EDGE) {
  console.error("Edge introuvable : l'image de partage se rend avec Edge sans fenetre.");
  process.exit(1);
}

const racine = path.resolve(__dirname, "..");
const sortie = path.join(racine, "img/partage.png");

// Le gabarit est ecrit a cote des polices (src/../fonts) : la copie doit rester
// dans src/ pour que les chemins relatifs des @font-face marchent encore.
const gabarit = fs.readFileSync(path.join(__dirname, "partage.html"), "utf8");
const provisoire = path.join(__dirname, ".partage-rendu.html");
fs.writeFileSync(provisoire, gabarit.replaceAll("{{domaine}}", DOMAINE));

try {
  fs.rmSync(sortie, { force: true });
  execFileSync(EDGE, [
    "--headless=new",
    "--disable-gpu",
    "--hide-scrollbars",
    // Les @font-face sont lues depuis le disque : sans ca, Edge les refuse et
    // l'image sortirait dans une police de secours.
    "--allow-file-access-from-files",
    "--force-device-scale-factor=1",
    "--window-size=1200,630",
    `--screenshot=${sortie}`,
    // Profil jetable : sinon Edge refuse de demarrer si une fenetre est ouverte.
    `--user-data-dir=${fs.mkdtempSync(path.join(os.tmpdir(), "partage-"))}`,
    provisoire,
  ], { stdio: "ignore" });
} finally {
  fs.rmSync(provisoire, { force: true });
}

if (!fs.existsSync(sortie)) {
  console.error("Aucune image produite : verifier src/partage.html dans un navigateur.");
  process.exit(1);
}
console.log(`img/partage.png (${Math.round(fs.statSync(sortie).size / 1024)} Ko, ${DOMAINE})`);
