# exzitech.github.io

Site portfolio en français, anglais et néerlandais : offre, projets, sites web, contact.
Site statique sans dépendance, publié par GitHub Pages depuis la branche `main`.

## Modifier le site

Ne pas éditer `index.html`, `en/index.html` ni `nl/index.html` : ils sont générés.

- `src/page.html` : gabarit commun (structure, illustrations SVG), avec des repères `{{cle}}`.
- `src/textes.cjs` : les textes des trois langues.
- `node generer.cjs` : régénère les trois pages. S'arrête si une clé manque ou ne sert
  plus dans une des langues.

`style.css` et `script.js` sont écrits à la main. Les chemins internes sont relatifs
(`{{racine}}`, soit `""` ou `"../"`) : la page s'affiche aussi ouverte en fichier local.
Les démos (`budget-foyer/`...) sont les sites GitHub Pages des autres dépôts, sous le même
domaine ; en local, seules `node ../apercu.cjs` et http://localhost:8080 les servent.
Démos, code et sites externes s'ouvrent dans un nouvel onglet.

## Ressources

Polices auto-hébergées dans `fonts/` : Bricolage Grotesque et Instrument Sans, licence
SIL Open Font License 1.1 (textes joints). Aucune ressource externe n'est chargée.
Captures de `img/` : tirées des dépôts de chaque projet ou des sites en ligne.

Licence MIT pour le code ; les captures restent la propriété de leurs projets.
