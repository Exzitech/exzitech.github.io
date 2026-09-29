// Animations légères. Sans JavaScript, ou si le système demande moins
// d'animations, la page reste complète et immobile.
const calme = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (!calme) {
  // Mot qui change dans le titre.
  const mot = document.querySelector(".mot");
  if (mot) {
    const mots = mot.dataset.mots.split(",");
    let i = 0;
    setInterval(() => {
      mot.classList.add("sort");
      setTimeout(() => {
        i = (i + 1) % mots.length;
        mot.textContent = mots[i];
        mot.classList.remove("sort");
      }, 350);
    }, 2600);
  }

  // Apparition douce des blocs au défilement.
  const blocs = document.querySelectorAll(
    ".offres > div, .projet, .projet-image, .methode p, .titre-section"
  );
  const observateur = new IntersectionObserver((entrees) => {
    for (const e of entrees) {
      if (e.isIntersecting) {
        e.target.classList.add("visible");
        observateur.unobserve(e.target);
      }
    }
  }, { rootMargin: "0px 0px -8% 0px" });
  blocs.forEach((b, n) => {
    b.classList.add("apparait");
    b.style.transitionDelay = (n % 3) * 80 + "ms";
    observateur.observe(b);
  });
}
