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
    title: "Apro una press room personale",
    date: "2026-04-19",
    type: "media-note",
    status: "published",
    abstract:
      "Archivio editoriale per comunicati, note pubbliche, media kit e aggiornamenti verificabili legati ai miei prodotti, alle societa e ai progetti personali.",
    body: [
      "Ho progettato questa sezione per ospitare comunicati stampa futuri senza trasformare il sito in una pagina corporate generica.",
      "Ogni comunicato dovra contenere data, abstract, contesto, eventuali asset scaricabili e contatto press. I contenuti non verificati restano fuori dal sito pubblico.",
    ],
    contact: "Contatto press da inserire",
    download: {
      label: "Media kit da aggiungere",
      href: "/documents/media-kit-placeholder.pdf",
      available: false,
    },
  },
];
