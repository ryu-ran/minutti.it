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
      "Il mio sito personale non deve limitarsi a dire che so fare cose. Deve mostrare il metodo con cui le metto in ordine.",
    body: [
      "Uso questo bulletin come area di appunti brevi: note tecniche, osservazioni di prodotto, comunicazioni personali e piccoli manifesti di metodo.",
      "Tengo il tono asciutto. Se una cosa non è verificabile, resta fuori. Se una cosa è ancora in costruzione, la dichiaro come tale.",
      "Quando aggiungo una nota, aggiungo un oggetto editoriale.",
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
