export type ProjectStatus = "active" | "ongoing" | "concept" | "archive";

export type Project = {
  slug: string;
  title: string;
  eyebrow: string;
  year: string;
  category: string;
  status: ProjectStatus;
  summary: string;
  description: string;
  challenge: string;
  approach: string;
  output: string;
  stack: string[];
  tags: string[];
  image: string;
  imageAlt: string;
  links?: { label: string; href: string }[];
  notes?: string[];
};

export const projects: Project[] = [
  {
    slug: "silph-technologies",
    title: "SILPH Technologies",
    eyebrow: "Company / systems",
    year: "ongoing",
    category: "venture",
    status: "active",
    summary:
      "Un laboratorio operativo per costruire software, piattaforme digitali e sistemi custom senza separare prodotto, tecnologia e identita.",
    description:
      "SILPH Technologies e il contenitore imprenditoriale collegato al lavoro su architetture software, prodotti digitali e processi tecnici. I dettagli pubblici vanno completati con informazioni verificate.",
    challenge:
      "Tenere insieme visione di prodotto, esecuzione tecnica, qualita visiva e responsabilita operativa senza trasformare tutto in consulenza generica.",
    approach:
      "Progettazione per sistemi: requisiti, UX, infrastruttura, codice, sicurezza, identita e comunicazione trattati come parti dello stesso oggetto.",
    output:
      "Struttura societaria e laboratorio di sviluppo per piattaforme digitali, soluzioni B2B e prodotti software custom.",
    stack: ["Software engineering", "Cloud architecture", "Product design", "Automation"],
    tags: ["company", "software", "systems"],
    image: "/images/project-silph.svg",
    imageAlt: "Tavola editoriale astratta per SILPH Technologies",
    links: [{ label: "Project file", href: "/projects/silph-technologies" }],
  },
  {
    slug: "silph-control",
    title: "SILPH Control",
    eyebrow: "Product / platform",
    year: "ongoing",
    category: "product",
    status: "ongoing",
    summary:
      "Sistema software per controllo operativo, automazione e gestione strutturata di processi digitali.",
    description:
      "SILPH Control viene trattato come prodotto/piattaforma collegabile all'ecosistema SILPH. I dettagli funzionali devono essere completati con specifiche pubblicabili.",
    challenge:
      "Portare ordine in processi ad alta densita operativa, dove interfaccia, permessi, dati e affidabilita non possono essere pensati dopo.",
    approach:
      "Architettura modulare, interfacce leggibili, attenzione a sicurezza, auditabilita e riduzione dell'attrito operativo.",
    output:
      "Base di prodotto per controllo, gestione e automazione di workflow digitali.",
    stack: ["Web app", "B2B platform", "Security", "Process automation"],
    tags: ["platform", "control", "operations"],
    image: "/images/project-control.svg",
    imageAlt: "Tavola editoriale astratta per SILPH Control",
    links: [{ label: "Project file", href: "/projects/silph-control" }],
  },
  {
    slug: "mangiafuoco",
    title: "Mangiafuoco",
    eyebrow: "Software / fire simulation",
    year: "live",
    category: "product",
    status: "active",
    summary:
      "Simulatore integrato per esodo e reazione al fuoco: workflow FDS, scena 2D, simulazione 3D, report e neural network per gli esodi.",
    description:
      "Mangiafuoco e un prodotto SILPH Technologies per simulazioni di esodo e reazione al fuoco. Unisce exod.IA, neural network per la simulazione degli esodi, e FDS Modular Controller in un flusso unico dalla scena 2D alla simulazione 3D.",
    challenge:
      "Portare controllo dentro un dominio dove modellazione, incendio, esodo, parametri e report spesso vivono come pezzi separati e poco leggibili.",
    approach:
      "Workflow editoriale ma tecnico: editor 2D modulare, parametri espliciti, integrazione con FDS e Smokeview, motore exod.IA per esodi, confronto scenari e tracciabilita.",
    output:
      "Software professionale per scenari di incendio ed evacuazione, pensato per costruire, simulare, leggere output e produrre report in un percorso operativo unico.",
    stack: [
      "FDS",
      "Smokeview",
      "exod.IA",
      "Neural network",
      "2D editor",
      "3D simulation",
      "Reporting",
    ],
    tags: ["fire safety", "simulation", "ai", "fds"],
    image: "/images/project-mangiafuoco.svg",
    imageAlt: "Tavola editoriale astratta per Mangiafuoco",
    links: [{ label: "Visit Mangiafuoco", href: "https://mangiafuoco.app/" }],
  },
  {
    slug: "altair",
    title: "ALTAIR",
    eyebrow: "Private software / social analysis",
    year: "private",
    category: "research system",
    status: "archive",
    summary:
      "Software riservato di analisi sociale per una think tank: osservazione di account, lettura delle interazioni, mappatura dei commenti e costruzione di strategie comunicative controllate.",
    description:
      "ALTAIR e un sistema privato, senza sito e senza comunicazione pubblica, progettato per analizzare un pool di account di ingresso, monitorare azioni, commenti e traiettorie narrative, e tradurre l'osservazione in scenari comunicativi leggibili. Il prodotto lavora sul rapporto tra comportamento, messaggio, contesto e obiettivo: meno dashboard estetica, piu macchina editoriale per capire cosa sta accadendo, dove si muove la conversazione e quali leve comunicative possono essere valutate in modo strutturato.",
    challenge:
      "Il problema non era raccogliere dati e basta. Era rendere interpretabile un ambiente sociale rumoroso, mobile, contraddittorio, pieno di segnali deboli e micro-comportamenti. Serviva uno strumento capace di leggere account, azioni e commenti come parte di un sistema: chi parla, come risponde, quali temi ritornano, quali posizioni si consolidano, quali frizioni emergono e quali strategie rischiano di diventare controproducenti.",
    approach:
      "Il processo e stato costruito per strati: ingestione e normalizzazione dei profili osservati, timeline delle azioni, classificazione dei commenti, lettura dei pattern ricorrenti, segmentazione dei comportamenti e definizione di linee comunicative alternative. La parte di regia non viene trattata come un pulsante magico, ma come un piano di lavoro: ipotesi, tono, postura, argomenti, rischi, coerenza e verifica. ALTAIR permette di istruire un pool di account autorizzati a sostenere una causa attraverso strategie diverse, mantenendo separati scenario, obiettivo, messaggio e comportamento atteso.",
    output:
      "Una piattaforma interna per analisi, monitoraggio e pianificazione comunicativa: archivio degli account osservati, lettura dei commenti, viste per cluster narrativi, schede strategiche, confronto tra approcci comportamentali e strumenti di controllo per evitare che la comunicazione diventi solo rumore organizzato. Non esiste una pagina pubblica del progetto: la sua forma e quella di un software operativo riservato.",
    stack: [
      "Social analysis",
      "Account monitoring",
      "Comment intelligence",
      "Narrative mapping",
      "Strategy planning",
      "Behavioral models",
      "Private software",
    ],
    tags: ["private", "analysis", "strategy", "social"],
    image: "/images/project-altair.svg",
    imageAlt: "Tavola editoriale astratta per ALTAIR",
    notes: [
      "Nessun sito pubblico, nessuna landing, nessuna comunicazione esterna: il progetto resta documentato come sistema privato.",
      "Il lavoro si concentra su metodo, tracciabilita delle ipotesi e lettura dei segnali sociali, non su vanity metric o schermate decorative.",
      "Le strategie comunicative sono modellate come scenari confrontabili: tono, argomento, comportamento previsto, rischio e coerenza narrativa.",
      "La piattaforma nasce per una think tank e va raccontata solo per perimetro, funzione e metodo, senza esporre dettagli operativi riservati.",
    ],
  },
  {
    slug: "qonecto",
    title: "Qonecto",
    eyebrow: "Software / physical spaces",
    year: "live",
    category: "product",
    status: "active",
    summary:
      "Piattaforma per QR dinamici, landing responsive, raccolta consensi GDPR, analytics, export marketing e accessi a pagamento.",
    description:
      "Qonecto collega spazi fisici e flussi digitali: il QR e il punto di ingresso, mentre il sistema gestisce landing, form, consensi, dati, campagne e ticket/accessi.",
    challenge:
      "Trasformare visite, eventi e accessi fisici in un flusso digitale ordinato, senza far pagare all'utente finale la complessita di consensi, analytics, follow-up e verifica.",
    approach:
      "Un solo percorso operativo: QR dinamico, landing configurabile, raccolta dati conforme, export marketing, paid access e verifica tramite QR o workflow dedicato.",
    output:
      "Software per lead generation, gestione accessi e biglietti, con notarizzazione delle prove ticket su blockchain pubblica Stellar dichiarata dal prodotto.",
    stack: ["Dynamic QR", "Landing pages", "GDPR consent", "Analytics", "Paid access", "Stellar"],
    tags: ["software", "qr", "events", "gdpr"],
    image: "/images/project-qonecto.svg",
    imageAlt: "Tavola editoriale astratta per Qonecto",
    links: [{ label: "Visit Qonecto", href: "https://qonecto.io/" }],
  },
  {
    slug: "faiconto",
    title: "FaiCONTO",
    eyebrow: "Software / business operations",
    year: "live",
    category: "product",
    status: "active",
    summary:
      "Workspace gestionale per tenere preventivi, contratti e fatture nello stesso flusso operativo.",
    description:
      "FaiCONTO e un software per gestire anagrafiche, risorse, preventivi, contratti, fatture e dashboard in un'interfaccia unica ottimizzata per desktop e mobile.",
    challenge:
      "Ridurre la frizione tra vendita, accordo contrattuale e ciclo di fatturazione: quando i documenti vivono separati, il processo diventa amministrazione performativa.",
    approach:
      "Un workspace unico per clienti, risorse, progressivi, preventivi, contratti, billing plan, caricamento PDF/XML e monitoraggio dello stato documentale.",
    output:
      "Sistema gestionale per creare e seguire preventivi, associare contratti, caricare fatture e leggere metriche operative da dashboard.",
    stack: ["Client registry", "Quotes", "Contracts", "Invoices", "Billing plans", "Dashboard"],
    tags: ["software", "b2b", "documents", "operations"],
    image: "/images/project-faiconto.svg",
    imageAlt: "Tavola editoriale astratta per FaiCONTO",
    links: [{ label: "Visit FaiCONTO", href: "https://faiconto.it/" }],
  },
];

export const featuredProjects = projects.filter((project) =>
  [
    "silph-technologies",
    "mangiafuoco",
    "altair",
    "qonecto",
    "faiconto",
    "silph-control",
  ].includes(project.slug),
);
