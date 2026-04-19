export type PressItem = {
  slug: string;
  title: string;
  date: string;
  type: "press-release" | "media-note" | "draft";
  status: "published" | "draft";
  abstract: string;
  body: string[];
  contact: string;
  download?: {
    label: string;
    href: string;
    available: boolean;
  };
};

export const pressItems: PressItem[] = [
  {
    slug: "personal-press-room",
    title: "Matteo Minutti prepara una press room personale",
    date: "2026-04-19",
    type: "media-note",
    status: "published",
    abstract:
      "Archivio editoriale per comunicati, note pubbliche, media kit e aggiornamenti verificabili legati a prodotti, societa e progetti personali.",
    body: [
      "Questa sezione e progettata per ospitare comunicati stampa futuri senza trasformare il sito in una pagina corporate generica.",
      "Ogni comunicato dovrebbe contenere data, abstract, contesto, eventuali asset scaricabili e contatto press. I contenuti non verificati vanno lasciati come bozza.",
    ],
    contact: "Contatto press da inserire",
    download: {
      label: "Media kit da aggiungere",
      href: "/documents/media-kit-placeholder.pdf",
      available: false,
    },
  },
];
