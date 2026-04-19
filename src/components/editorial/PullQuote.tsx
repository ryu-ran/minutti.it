export function PullQuote({
  quote,
  caption,
}: {
  quote: string;
  caption?: string;
}) {
  return (
    <figure className="border-l-4 border-accent pl-5">
      <blockquote className="serif text-pretty text-3xl leading-tight md:text-5xl">
        {quote}
      </blockquote>
      {caption ? (
        <figcaption className="mt-4 text-xs font-black uppercase tracking-[0.16em] text-muted">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
