import Link from "next/link";

export default function NotFound() {
  return (
    <section className="editorial-shell py-20">
      <p className="mb-5 text-xs font-black uppercase tracking-[0.18em] text-accent">404</p>
      <h1 className="headline page-headline">
        Not
        <br />
        found
      </h1>
      <p className="serif mt-6 max-w-2xl text-2xl leading-tight">
        La pagina non esiste, oppure non e ancora stata archiviata.
      </p>
      <Link className="mt-8 inline-flex border border-ink px-5 py-3 font-black uppercase" href="/">
        Back home
      </Link>
    </section>
  );
}
