// Textes du site, une entrée par langue. Chaque clé correspond à un {{repère}}
// de page.html ; generer.cjs refuse une clé manquante ou inutilisée.
// Le HTML est permis dans les valeurs. En français, espace insécable (&nbsp;)
// avant : ; ? !

module.exports = {
  fr: {
    meta_titre: "Tom · Développeur full-stack freelance",
    meta_desc: "Développeur full-stack freelance : sites vitrines, applications web et de bureau, automatisation, auto-hébergement pour petites structures. Projets à essayer en ligne.",
    nav_offre: "Offre", nav_projets: "Projets", nav_sites: "Sites", nav_contact: "Contact",
    dispo: "Disponible pour de nouvelles missions",
    surtitre: "Développeur full-stack freelance",
    h1_label: "Des outils sur mesure qui tournent vraiment, pas des maquettes.",
    h1_debut: "Des", mots: "outils,sites,applications,serveurs", mot1: "outils", h1_suite: "sur mesure",
    h1_milieu: "qui tournent", vraiment: "vraiment", h1_fin: "pas des maquettes.",
    chapo: `Je crée des sites et des applications web ou de bureau, j'automatise ce qui n'a pas
      d'API et j'installe des serveurs que les petites structures peuvent garder sans
      informaticien. Ce qui est présenté ici sert tous les jours, et la plupart des projets
      s'essaient directement dans le navigateur.`,
    lien_projets: "Voir les projets", lien_contact: "Parler d'un projet",
    defile_label: "Technologies utilisées",

    offre_titre: "Ce que je peux faire pour vous",
    offre1_t: "Sites vitrines",
    offre1_p: "Un site à votre image, rapide sur téléphone, en plusieurs langues si votre clientèle le demande, avec un formulaire de contact qui arrive vraiment chez vous.",
    offre2_t: "Applications sur mesure",
    offre2_p: "Outil interne, tableau de bord, application de bureau ou mobile&nbsp;: une interface simple posée sur une logique testée.",
    offre3_t: "Automatisation et données",
    offre3_p: "Récupérer des données d'un logiciel sans API, d'un écran ou de documents scannés, puis les fiabiliser et les exploiter. Simulation quand le résultat dépend du hasard.",
    offre4_t: "Auto-hébergement",
    offre4_p: "Fichiers partagés, mots de passe et documents classés sur votre propre serveur, avec des sauvegardes vérifiées et des alertes qui arrivent même quand la machine est éteinte.",

    projets_titre: "Projets",
    projets_intro: "Chaque projet a son dépôt public&nbsp;: le code, les tests et un README qui explique les choix.",
    hub_etiq: "Application de bureau",
    hub_t: "ExziHub, une application dont chaque outil est un plugin",
    hub_p: `Le socle des autres projets. Les outils s'installent, se mettent à jour et se
      désinstallent depuis un catalogue en ligne, sans retélécharger l'application. Un plugin
      peut embarquer un moteur Python que le hub lance et surveille. Le même code tourne sur
      Windows et Android.`,
    hub_l1: "Environ 13&nbsp;Mo, contre plus de 100 avec Electron.",
    hub_l2: "Paquets vérifiés par empreinte SHA-256 avant installation.",
    hub_l3: "Synchronisation entre appareils sans écraser une modification faite ailleurs.",
    hub_lien: "Code et architecture",
    ocr_etiq: "Extraction de données",
    ocr_t: "Lire un écran en temps réel, sans rien compter deux fois",
    ocr_p: `Un moteur lit une zone d'écran en continu et en tire des événements structurés,
      comptés une fois et une seule, même quand l'affichage défile, se répète ou est mal lu.
      Exemple&nbsp;: le coût réel des plats d'un restaurant, lu dans le logiciel de commande
      de son grossiste, qui n'offre pas d'API.`,
    ocr_l1: "Déduplication par position, tolérante aux erreurs de lecture.",
    ocr_l2: "Ce qui est ambigu est mis de côté, jamais compté d'office.",
    ocr_l3: "Sessions réelles rejouées hors ligne, 120&nbsp;tests.",
    ocr_lien: "Étude de cas et code",
    lab_etiq: "Infrastructure",
    lab_t: "Un serveur fiable pour une petite structure",
    lab_p: `Un modèle complet, tiré d'une installation en service&nbsp;: fichiers, mots de passe
      et documents scannés sur un mini PC. L'effort porte sur ce qui dure&nbsp;: sauvegardes
      sur trois niveaux, restauration testée, surveillance, et des retours d'incident écrits.`,
    lab_lien: "Modèle et documentation",
    opti_etiq: "Aide à la décision",
    opti_t: "Planificateur de croisements, planifier par la simulation",
    opti_p: `Quand chaque décision a un résultat aléatoire, l'outil simule des centaines de
      parties pour chaque option, toutes sur les mêmes tirages&nbsp;: l'écart mesuré vient du
      choix, pas du hasard. Modèle calibré sur des données réelles, calcul hors du fil
      principal, sous la seconde.`,
    lien_demo: "Essayer la démo", demo: "Démo", code: "Code", tests: "tests",

    budget_t: "Budget du foyer",
    budget_p: "Ce qu'il reste vraiment à dépenser&nbsp;: opérations récurrentes calculées, factures annuelles lissées sur les mois qui les précèdent, période de paie à paie.",
    budget_alt: "Budget du foyer : soldes, provisions et catégories du mois",
    crois_t: "Courbe de croissance",
    crois_p: "Les normes de l'OMS, converties par script depuis les tables officielles, et un graphique SVG écrit sans bibliothèque, net à l'écran comme à l'impression.",
    crois_alt: "Courbe de croissance : mesures d'un enfant sur les percentiles OMS",
    rout_t: "Routines visuelles",
    rout_p: "Des routines en pictogrammes pour enfants, imprimées en bande A4 ou suivies pas à pas sur tablette. Le PDF est écrit octet par octet, sans bibliothèque.",
    rout_alt: "Routines visuelles : étapes de la journée en pictogrammes",
    pdf_t: "Éditeur PDF",
    pdf_alt: "Éditeur PDF : un document annoté et signé", portrait_alt: "Tom, développeur freelance",
    pdf_p: "Remplir et signer un PDF sans l'envoyer nulle part&nbsp;: le document ne quitte jamais la machine, et l'export reste un vrai PDF, texte compris.",

    sites_titre: "Sites web",
    sites_intro: "Une identité propre à chaque client, plusieurs langues si besoin, et des pages légères.",
    client: "Client", demo_etiq: "Démo", voir_site: "Voir le site", voir_demo: "Voir la démo",
    nm_p: "Le site d'une traductrice jurée, en quatre langues dont le farsi, qui s'écrit de droite à gauche&nbsp;: toute la mise en page se retourne avec la langue.",
    nm_alt: "NM traductions : page d'accueil",
    vau_p: "Pour une architecte d'intérieur fictive&nbsp;: une identité affirmée, des animations au service du contenu, environ 115&nbsp;Ko de JavaScript.",
    vau_alt: "Atelier Solène Vaudray : page d'accueil",
    sw_p: "Un tableau de bord de supervision&nbsp;: services, disponibilité, latence, charge et incidents, sur des données simulées.",
    sw_alt: "ServerWatch : supervision de services et incidents",

    methode_titre: "Comment je travaille",
    m1_t: "Comprendre avant d'écrire.", m1_p: "Le besoin réel d'abord, puis la solution la plus simple qui y répond, sans dépendance superflue.",
    m2_t: "Tester ce qui compte.", m2_p: "La logique métier est séparée de l'interface et couverte par des tests&nbsp;; chaque bug corrigé en laisse un derrière lui.",
    m3_t: "Mesurer avant d'optimiser.", m3_p: "Une mesure de départ, un changement à la fois, une nouvelle mesure.",
    m4_t: "Laisser un projet maintenable.", m4_p: "Du code lisible et une documentation qui décrit l'état réel, pour que vous puissiez le reprendre sans moi.",

    contact_titre: "Un projet, une question&nbsp;?",
    contact_p: "Décrivez-moi le besoin en quelques lignes. Je réponds sous 48&nbsp;heures avec une première estimation, ou avec les questions qui manquent pour en faire une.",
    pied: "Site statique, sans traceur ni cookie.", pied_code: "Code du site",

    ill_catalogue: "Catalogue", ill_verifie: "vérifié", ill_installe: "installe", ill_croissance: "Croissance",
    ill_capture: "Capture", ill_achat: "Achat", ill_recouvrement: "recouvrement aligné",
    ill_comptes: "nouveaux achats", ill_doublon: "0 doublon",
    ill_vm: "Services", ill_exports: "exports chaque nuit", ill_disque: "Disque local",
    ill_horssite: "Hors site", ill_chiffre: "chiffré",
    ill_surv: "Contrôle toutes les 5 minutes", ill_alerte: "échec ou silence",
    ill_gen: "générations jusqu'à l'objectif", ill_opt: "Option", ill_conseille: "conseillée",
    ill_tirages: "mêmes tirages pour chaque option",
  },

  en: {
    meta_titre: "Tom · Freelance full-stack developer",
    meta_desc: "Freelance full-stack developer: business websites, web and desktop applications, automation, self-hosting for small businesses. Projects you can try online.",
    nav_offre: "Services", nav_projets: "Projects", nav_sites: "Websites", nav_contact: "Contact",
    dispo: "Available for new projects",
    surtitre: "Freelance full-stack developer",
    h1_label: "Custom-built tools that actually run, not mock-ups.",
    h1_debut: "Custom-built", mots: "tools,websites,apps,servers", mot1: "tools", h1_suite: "",
    h1_milieu: "that", vraiment: "actually run", h1_fin: "not mock-ups.",
    chapo: `I build websites and web or desktop applications, automate what has no API, and
      set up servers that small businesses can keep running without an IT department. Everything
      shown here is used every day, and most projects can be tried right in your browser.`,
    lien_projets: "See the projects", lien_contact: "Discuss a project",
    defile_label: "Technologies used",

    offre_titre: "What I can do for you",
    offre1_t: "Business websites",
    offre1_p: "A site that looks like you, fast on phones, in several languages if your customers need it, with a contact form that actually reaches you.",
    offre2_t: "Custom applications",
    offre2_p: "Internal tool, dashboard, desktop or mobile app: a simple interface on top of tested logic.",
    offre3_t: "Automation and data",
    offre3_p: "Pull data out of software with no API, off a screen or from scanned documents, then make it reliable and useful. Simulation when outcomes depend on chance.",
    offre4_t: "Self-hosting",
    offre4_p: "Shared files, passwords and filed documents on your own server, with verified backups and alerts that arrive even when the machine is down.",

    projets_titre: "Projects",
    projets_intro: "Each project has its own public repository: the code, the tests and a README that explains the decisions.",
    hub_etiq: "Desktop application",
    hub_t: "ExziHub, an app where every tool is a plugin",
    hub_p: `The foundation for the other projects. Tools are installed, updated and removed from
      an online catalogue, without downloading the app again. A plugin can ship its own Python
      engine, which the hub starts and monitors. The same code runs on Windows and Android.`,
    hub_l1: "About 13&nbsp;MB, versus over 100 with Electron.",
    hub_l2: "Packages checked against a SHA-256 hash before installing.",
    hub_l3: "Sync across devices without overwriting a change made elsewhere.",
    hub_lien: "Code and architecture",
    ocr_etiq: "Data extraction",
    ocr_t: "Reading a screen in real time, never counting twice",
    ocr_p: `An engine reads part of the screen continuously and turns it into structured events,
      each counted exactly once, even when the display scrolls, repeats itself or is misread.
      Example: the real cost of a restaurant's dishes, read from its wholesaler's ordering
      software, which offers no API.`,
    ocr_l1: "Deduplication by position, tolerant of reading errors.",
    ocr_l2: "Anything ambiguous is set aside, never counted by default.",
    ocr_l3: "Real sessions replayed offline, 120&nbsp;tests.",
    ocr_lien: "Case study and code",
    lab_etiq: "Infrastructure",
    lab_t: "A reliable server for a small business",
    lab_p: `A complete template, taken from a live installation: files, passwords and scanned
      documents on a mini PC. The effort goes into what lasts: three levels of backup, tested
      restores, monitoring, and written incident reports.`,
    lab_lien: "Template and documentation",
    opti_etiq: "Decision support",
    opti_t: "Breeding planner, planning by simulation",
    opti_p: `When every decision has a random outcome, the tool simulates hundreds of runs for
      each option, all on the same random draws: the measured difference comes from the choice,
      not from luck. The model is calibrated on real data and runs off the main thread, in
      under a second.`,
    lien_demo: "Try the demo", demo: "Demo", code: "Code", tests: "tests",

    budget_t: "Household budget",
    budget_p: "What is really left to spend: recurring transactions computed, yearly bills spread over the months before them, pay-day to pay-day periods.",
    budget_alt: "Household budget: balances, provisions and categories for the month",
    crois_t: "Growth chart",
    crois_p: "WHO growth standards, converted by script from the official tables, and an SVG chart written without a library, sharp on screen and on paper.",
    crois_alt: "Growth chart: a child's measurements on WHO percentiles",
    rout_t: "Visual routines",
    rout_p: "Picture routines for children, printed as an A4 strip or followed step by step on a tablet. The PDF is written byte by byte, with no library.",
    rout_alt: "Visual routines: the steps of the day as pictograms",
    pdf_t: "PDF editor",
    pdf_alt: "PDF editor: a document with added text and a signature", portrait_alt: "Tom, freelance developer",
    pdf_p: "Fill in and sign a PDF without sending it anywhere: the document never leaves the machine, and the export stays a real PDF, text included.",

    sites_titre: "Websites",
    sites_intro: "An identity of its own for every client, several languages when needed, and lightweight pages.",
    client: "Client", demo_etiq: "Demo", voir_site: "Visit the site", voir_demo: "See the demo",
    nm_p: "The site of a sworn translator, in four languages including Farsi, written right to left: the whole layout flips with the language.",
    nm_alt: "NM traductions: home page",
    vau_p: "For a fictional interior architect: a bold identity, animation that serves the content, about 115&nbsp;KB of JavaScript.",
    vau_alt: "Atelier Solène Vaudray: home page",
    sw_p: "A monitoring dashboard: services, uptime, latency, load and incidents, on simulated data.",
    sw_alt: "ServerWatch: service monitoring and incidents",

    methode_titre: "How I work",
    m1_t: "Understand before writing.", m1_p: "The real need first, then the simplest solution that meets it, with no needless dependencies.",
    m2_t: "Test what matters.", m2_p: "Business logic is kept apart from the interface and covered by tests; every fixed bug leaves a test behind.",
    m3_t: "Measure before optimising.", m3_p: "A baseline, one change at a time, a new measurement.",
    m4_t: "Leave something maintainable.", m4_p: "Readable code and documentation that describes the actual state, so you can take it over without me.",

    contact_titre: "A project, a question?",
    contact_p: "Describe what you need in a few lines. I reply within 48&nbsp;hours with a first estimate, or with the questions needed to make one.",
    pied: "Static site, no trackers, no cookies.", pied_code: "Site source code",

    ill_catalogue: "Catalogue", ill_verifie: "verified", ill_installe: "install", ill_croissance: "Growth",
    ill_capture: "Capture", ill_achat: "Purchase", ill_recouvrement: "overlap aligned",
    ill_comptes: "new purchases", ill_doublon: "0 duplicates",
    ill_vm: "Services", ill_exports: "nightly exports", ill_disque: "Local disk",
    ill_horssite: "Off-site", ill_chiffre: "encrypted",
    ill_surv: "Checked every 5 minutes", ill_alerte: "failure or silence",
    ill_gen: "generations to reach the goal", ill_opt: "Option", ill_conseille: "advised",
    ill_tirages: "same random draws for every option",
  },

  nl: {
    meta_titre: "Tom · Freelance full-stack developer",
    meta_desc: "Freelance full-stack developer: websites, web- en desktopapplicaties, automatisering, zelf hosten voor kleine ondernemingen. Projecten die u online kunt uitproberen.",
    nav_offre: "Aanbod", nav_projets: "Projecten", nav_sites: "Websites", nav_contact: "Contact",
    dispo: "Beschikbaar voor nieuwe opdrachten",
    surtitre: "Freelance full-stack developer",
    h1_label: "Tools op maat die echt werken, geen mock-ups.",
    h1_debut: "", mots: "Tools,Websites,Apps,Servers", mot1: "Tools", h1_suite: "op maat",
    h1_milieu: "die", vraiment: "écht werken", h1_fin: "geen mock-ups.",
    chapo: `Ik bouw websites en web- of desktopapplicaties, automatiseer wat geen API heeft en
      zet servers op die kleine ondernemingen zonder IT-afdeling draaiende kunnen houden. Alles
      wat hier staat wordt dagelijks gebruikt, en de meeste projecten kunt u meteen in uw browser
      uitproberen.`,
    lien_projets: "Bekijk de projecten", lien_contact: "Een project bespreken",
    defile_label: "Gebruikte technologieën",

    offre_titre: "Wat ik voor u kan doen",
    offre1_t: "Websites",
    offre1_p: "Een site die bij u past, snel op de smartphone, in meerdere talen als uw klanten dat vragen, met een contactformulier dat ook echt bij u aankomt.",
    offre2_t: "Applicaties op maat",
    offre2_p: "Interne tool, dashboard, desktop- of mobiele app: een eenvoudige interface bovenop geteste logica.",
    offre3_t: "Automatisering en data",
    offre3_p: "Gegevens halen uit software zonder API, van een scherm of uit gescande documenten, en ze betrouwbaar en bruikbaar maken. Simulatie wanneer het resultaat van toeval afhangt.",
    offre4_t: "Zelf hosten",
    offre4_p: "Gedeelde bestanden, wachtwoorden en geklasseerde documenten op uw eigen server, met gecontroleerde back-ups en meldingen die ook aankomen als de machine uitvalt.",

    projets_titre: "Projecten",
    projets_intro: "Elk project heeft een eigen publieke repository: de code, de tests en een README die de keuzes uitlegt.",
    hub_etiq: "Desktopapplicatie",
    hub_t: "ExziHub, een app waarin elke tool een plug-in is",
    hub_p: `De basis voor de andere projecten. Tools worden geïnstalleerd, bijgewerkt en
      verwijderd vanuit een online catalogus, zonder de app opnieuw te downloaden. Een plug-in
      kan een eigen Python-engine meebrengen, die de hub start en bewaakt. Dezelfde code draait
      op Windows en Android.`,
    hub_l1: "Ongeveer 13&nbsp;MB, tegenover meer dan 100 met Electron.",
    hub_l2: "Pakketten gecontroleerd met een SHA-256-hash vóór installatie.",
    hub_l3: "Synchronisatie tussen toestellen zonder een wijziging van elders te overschrijven.",
    hub_lien: "Code en architectuur",
    ocr_etiq: "Data-extractie",
    ocr_t: "Een scherm live uitlezen, zonder iets dubbel te tellen",
    ocr_p: `Een engine leest continu een deel van het scherm en zet het om in gestructureerde
      gebeurtenissen, elk precies één keer geteld, ook als de weergave scrolt, zich herhaalt of
      verkeerd gelezen wordt. Voorbeeld: de echte kostprijs van de gerechten van een
      restaurant, uitgelezen uit de bestelsoftware van de groothandel, die geen API heeft.`,
    ocr_l1: "Ontdubbeling op positie, bestand tegen leesfouten.",
    ocr_l2: "Wat twijfelachtig is, wordt apart gezet en nooit zomaar geteld.",
    ocr_l3: "Echte sessies offline opnieuw afgespeeld, 120&nbsp;tests.",
    ocr_lien: "Case study en code",
    lab_etiq: "Infrastructuur",
    lab_t: "Een betrouwbare server voor een kleine onderneming",
    lab_p: `Een volledig sjabloon, overgenomen van een installatie die in gebruik is: bestanden,
      wachtwoorden en gescande documenten op een mini-pc. De aandacht gaat naar wat blijft:
      back-ups op drie niveaus, geteste herstelprocedure, monitoring en uitgeschreven
      incidentverslagen.`,
    lab_lien: "Sjabloon en documentatie",
    opti_etiq: "Beslissingsondersteuning",
    opti_t: "Kruisingsplanner, plannen met simulatie",
    opti_p: `Als elke beslissing een willekeurige uitkomst heeft, simuleert de tool honderden
      rondes per optie, allemaal met dezelfde trekkingen: het gemeten verschil komt van de keuze,
      niet van het toeval. Het model is gekalibreerd op echte gegevens en rekent buiten de
      hoofdthread, in minder dan een seconde.`,
    lien_demo: "Probeer de demo", demo: "Demo", code: "Code", tests: "tests",

    budget_t: "Gezinsbudget",
    budget_p: "Wat er echt nog te besteden valt: terugkerende verrichtingen berekend, jaarlijkse facturen gespreid over de maanden ervoor, periodes van loon tot loon.",
    budget_alt: "Gezinsbudget: saldi, provisies en categorieën van de maand",
    crois_t: "Groeicurve",
    crois_p: "De groeinormen van de WHO, per script omgezet uit de officiële tabellen, en een SVG-grafiek zonder bibliotheek, scherp op het scherm en op papier.",
    crois_alt: "Groeicurve: metingen van een kind op de WHO-percentielen",
    rout_t: "Visuele routines",
    rout_p: "Routines in pictogrammen voor kinderen, afgedrukt als A4-strook of stap voor stap gevolgd op een tablet. De pdf wordt byte per byte geschreven, zonder bibliotheek.",
    rout_alt: "Visuele routines: de stappen van de dag in pictogrammen",
    pdf_t: "Pdf-editor",
    pdf_alt: "Pdf-editor: een document met tekst en handtekening", portrait_alt: "Tom, freelance developer",
    pdf_p: "Een pdf invullen en ondertekenen zonder hem ergens naartoe te sturen: het document verlaat nooit de computer, en de export blijft een echte pdf, tekst inbegrepen.",

    sites_titre: "Websites",
    sites_intro: "Een eigen identiteit voor elke klant, meerdere talen waar nodig, en lichte pagina's.",
    client: "Klant", demo_etiq: "Demo", voir_site: "Bekijk de site", voir_demo: "Bekijk de demo",
    nm_p: "De site van een beëdigd vertaalster, in vier talen waaronder het Perzisch, dat van rechts naar links geschreven wordt: de hele opmaak draait mee met de taal.",
    nm_alt: "NM traductions: startpagina",
    vau_p: "Voor een fictieve interieurarchitecte: een uitgesproken identiteit, animaties ten dienste van de inhoud, ongeveer 115&nbsp;kB JavaScript.",
    vau_alt: "Atelier Solène Vaudray: startpagina",
    sw_p: "Een monitoringdashboard: diensten, beschikbaarheid, latentie, belasting en incidenten, op gesimuleerde gegevens.",
    sw_alt: "ServerWatch: monitoring van diensten en incidenten",

    methode_titre: "Hoe ik werk",
    m1_t: "Begrijpen voor ik schrijf.", m1_p: "Eerst de echte behoefte, dan de eenvoudigste oplossing die eraan voldoet, zonder overbodige afhankelijkheden.",
    m2_t: "Testen wat telt.", m2_p: "De bedrijfslogica staat los van de interface en is gedekt door tests; elke opgeloste bug laat een test achter.",
    m3_t: "Meten voor ik optimaliseer.", m3_p: "Een vertrekmeting, één wijziging tegelijk, een nieuwe meting.",
    m4_t: "Iets onderhoudbaars achterlaten.", m4_p: "Leesbare code en documentatie die de werkelijke toestand beschrijft, zodat u het zonder mij kunt overnemen.",

    contact_titre: "Een project, een vraag?",
    contact_p: "Beschrijf uw behoefte in een paar regels. Ik antwoord binnen 48&nbsp;uur met een eerste inschatting, of met de vragen die daarvoor nog nodig zijn.",
    pied: "Statische site, zonder trackers of cookies.", pied_code: "Broncode van de site",

    ill_catalogue: "Catalogus", ill_verifie: "gecontroleerd", ill_installe: "installeert", ill_croissance: "Groei",
    ill_capture: "Opname", ill_achat: "Aankoop", ill_recouvrement: "overlap uitgelijnd",
    ill_comptes: "nieuwe aankopen", ill_doublon: "0 dubbels",
    ill_vm: "Diensten", ill_exports: "nachtelijke exports", ill_disque: "Lokale schijf",
    ill_horssite: "Off-site", ill_chiffre: "versleuteld",
    ill_surv: "Controle om de 5 minuten", ill_alerte: "fout of stilte",
    ill_gen: "generaties tot het doel", ill_opt: "Optie", ill_conseille: "aangeraden",
    ill_tirages: "dezelfde trekkingen voor elke optie",
  },
};
