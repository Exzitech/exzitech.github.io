// Adresse publique du site, au même endroit pour tout ce qui la cite : pages
// générées (canonical, hreflang, Open Graph), sitemap, robots et l'image de
// partage. Passer à un nom de domaine = changer cette ligne, régénérer
// (`node generer.cjs` puis `node src/partage.cjs`) et committer un fichier
// CNAME à la racine : GitHub Pages le relit à chaque déploiement, un domaine
// réglé seulement dans l'interface du dépôt finit par disparaître.
const SITE = "https://exzitech.github.io";

/** Ce qui s'affiche quand on montre l'adresse à quelqu'un : sans le https://. */
const DOMAINE = SITE.replace(/^https?:\/\//, "");

module.exports = { SITE, DOMAINE };
