# minutti.it

Nuova codebase per il sito personale di Matteo Minutti: portfolio, manifesto professionale, archivio progetti, bulletin e press room.

Il sito è costruito come oggetto editoriale: tipografia forte, griglie, sezioni ampie, contenuti strutturati e asset sostituibili. Non contiene dati biografici inventati, metriche, clienti o certificazioni non fornite.

## Stack

- Next.js App Router
- React
- TypeScript
- Tailwind CSS
- Content collections in TypeScript under `src/data`
- Cartelle `src/content` pronte per futuri testi MDX/editoriali
- SEO con metadata Next, Open Graph, `robots.ts` e `sitemap.ts`

## Avvio locale

```bash
pnpm install
pnpm dev
```

Apri `http://localhost:3000`.

Build di produzione:

```bash
pnpm build
pnpm start
```

## Struttura

```txt
src/
  app/
    about/
    bulletin/
      [slug]/
    contact/
    cv/
    press/
    privacy/
    projects/
      [slug]/
    globals.css
    layout.tsx
    page.tsx
    robots.ts
    sitemap.ts
  components/
    editorial/
    layout/
    ui/
  content/
    bulletin/
    press/
    projects/
  data/
    bulletin.ts
    cv.ts
    navigation.ts
    press.ts
    projects.ts
    site.ts
  lib/
    content.ts
    seo.ts
    utils.ts
public/
  documents/
  images/
  logo/
```

## Aggiungere un progetto

1. Apri `src/data/projects.ts`.
2. Aggiungi un oggetto all'array `projects` con `slug`, `title`, `summary`, `challenge`, `approach`, `output`, `stack`, `tags`, `image` e `imageAlt`.
3. Se serve un visual, aggiungi il file in `public/images`.
4. La pagina dinamica sara disponibile in `/projects/[slug]`.

## Aggiungere una nota

1. Apri `src/data/bulletin.ts`.
2. Aggiungi un oggetto a `bulletinEntries`.
3. Imposta `status: "published"` per mostrarla nell'indice e generare la pagina.
4. Usa `status: "draft"` per bozze non pubbliche.

## Aggiungere una press release

1. Apri `src/data/press.ts`.
2. Aggiungi un oggetto a `pressItems`.
3. Usa `type: "press-release"` per comunicati ufficiali o `type: "media-note"` per note stampa.
4. Inserisci asset reali in `public/documents` e aggiorna `download.available`.

## Da personalizzare prima del deploy

- Email pubblica in `src/data/site.ts`.
- URL social reali o rimozione dei placeholder.
- Testi legali definitivi in `src/app/privacy/page.tsx`.
- CV PDF in `public/documents/matteo-minutti-cv.pdf`.
- Media kit e asset press reali.
- Immagini reali dei progetti al posto delle tavole editoriali placeholder.
- Dettagli pubblici verificati su progetti, ruoli, date e link.
