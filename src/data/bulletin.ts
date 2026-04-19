export type BulletinStatus = "published" | "draft";

export type BulletinEntry = {
  slug: string;
  title: string;
  date: string;
  category: string;
  status: BulletinStatus;
  excerpt: string;
  body: string[];
};

export const bulletinEntries: BulletinEntry[] = [
  {
    slug: "manifesto-operativo",
    title: "Manifesto operativo, senza poster motivazionali",
    date: "2026-04-19",
    category: "method",
    status: "published",
    excerpt:
      "Un sito personale non dovrebbe limitarsi a dire che una persona sa fare cose. Dovrebbe mostrare il metodo con cui le mette in ordine.",
    body: [
      "Questo bulletin e pensato come area di appunti brevi: note tecniche, osservazioni di prodotto, comunicazioni personali e piccoli manifesti di metodo.",
      "Il tono resta asciutto. Se una cosa non e verificabile, resta fuori. Se una cosa e ancora in costruzione, viene dichiarata come tale.",
      "Aggiungere una nota significa aggiungere un oggetto editoriale, non riempire un blog per ragioni di traffico.",
    ],
  },
  {
    slug: "placeholder-architetture-cloud",
    title: "Appunto futuro su architetture cloud",
    date: "2026-04-19",
    category: "technical note",
    status: "draft",
    excerpt:
      "Bozza segnaposto per una nota tecnica su cloud, sicurezza, automazione e manutenzione.",
    body: [
      "Sostituire questo testo con una nota reale. Il record e in stato draft e non viene mostrato negli indici pubblici.",
    ],
  },
];
