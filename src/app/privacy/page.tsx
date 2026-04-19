import { EditorialHero } from "@/components/editorial/EditorialHero";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { site } from "@/data/site";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Privacy",
  description:
    "Informativa privacy di minutti.it sul trattamento dei dati personali, contatti, diritti dell'interessato e servizi tecnici.",
  path: "/privacy",
});

const navigationData = [
  "indirizzo IP",
  "tipo di browser utilizzato",
  "sistema operativo",
  "nome di dominio e indirizzi dei siti dai quali e stato effettuato l'accesso",
  "pagine visitate",
  "data e orario della richiesta",
  "tempo di permanenza",
  "codice di risposta del server",
  "altri parametri relativi al sistema operativo e all'ambiente informatico dell'utente",
];

const voluntaryData = [
  "nome e cognome",
  "indirizzo email",
  "eventuale azienda o ruolo professionale",
  "contenuto del messaggio",
  "eventuali altri dati inseriti liberamente nel messaggio",
];

const purposes = [
  {
    title: "Funzionamento tecnico del sito",
    text: "I dati di navigazione sono trattati per consentire il corretto caricamento delle pagine, la gestione tecnica del sito, la sicurezza dell'infrastruttura e la prevenzione di abusi, malfunzionamenti o accessi non autorizzati.",
  },
  {
    title: "Risposta alle richieste di contatto",
    text: "I dati forniti volontariamente tramite email, form o altri canali di contatto sono utilizzati per rispondere alle richieste dell'utente, fornire informazioni, valutare eventuali collaborazioni o gestire comunicazioni professionali.",
  },
  {
    title: "Sicurezza e manutenzione",
    text: "I dati tecnici possono essere trattati per diagnostica, monitoraggio, protezione del sito, gestione di log tecnici, risoluzione di problemi e verifica del corretto funzionamento dei servizi.",
  },
  {
    title: "Analisi statistiche e miglioramento",
    text: "Se vengono attivati strumenti analytics, i dati possono essere utilizzati per analizzare l'utilizzo del sito e migliorare contenuti, struttura, accessibilita, performance e qualita dell'esperienza utente.",
  },
  {
    title: "Obblighi legali e tutela dei diritti",
    text: "I dati possono essere trattati quando necessario per adempiere a obblighi previsti dalla legge, da regolamenti, da ordini dell'autorita o per tutelare i diritti del Titolare nelle sedi competenti.",
  },
];

const rights = [
  "diritto di accesso ai dati personali",
  "diritto di rettifica dei dati inesatti",
  "diritto alla cancellazione dei dati, nei casi previsti",
  "diritto alla limitazione del trattamento",
  "diritto di opposizione al trattamento",
  "diritto alla portabilita dei dati, ove applicabile",
  "diritto di revocare il consenso, quando il trattamento si basa sul consenso",
  "diritto di proporre reclamo all'autorita di controllo competente",
];

export default function PrivacyPage() {
  return (
    <>
      <EditorialHero
        deck="Informativa sul trattamento dei dati personali per il sito personale di Matteo Minutti. Linguaggio leggibile, perche anche la privacy non deve sembrare scritta da una stampante nervosa."
        kicker="Privacy / Data protection"
        meta="GDPR / rights / contact"
        title={
          <>
            Privacy
            <br />
            notice
          </>
        }
      />

      <section className="editorial-shell py-12 md:py-20">
        <SectionLabel index="00" label="Last update" />
        <p className="serif max-w-4xl text-pretty text-3xl leading-tight">
          Ultimo aggiornamento: 19 aprile 2026. Questa informativa descrive come vengono trattati i
          dati personali nell'ambito della consultazione e dell'utilizzo del sito {site.url}.
        </p>
      </section>

      <section className="editorial-shell border-t border-ink py-12 md:py-20">
        <div className="grid gap-8 md:grid-cols-12">
          <div className="md:col-span-4">
            <SectionLabel index="01" label="Titolare" />
            <h2 className="text-4xl font-black uppercase leading-none md:text-6xl">Titolare</h2>
          </div>
          <div className="grid gap-5 text-pretty text-lg leading-relaxed md:col-span-8">
            <p>Il Titolare del trattamento e:</p>
            <address className="not-italic">
              <strong>{site.legalName}</strong>
              <br />
              Email:{" "}
              <a className="font-black underline" href={site.contactEmailHref}>
                {site.contactEmailLabel}
              </a>
              <br />
              Sito web:{" "}
              <a className="font-black underline" href={site.url}>
                {site.url}
              </a>
            </address>
            <p>
              Per richieste relative al trattamento dei dati personali o per l'esercizio dei diritti
              previsti dalla normativa applicabile, l'utente puo contattare il Titolare
              all'indirizzo email indicato sopra.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-ink bg-wash">
        <div className="editorial-shell grid gap-8 py-12 md:grid-cols-12 md:py-20">
          <div className="md:col-span-4">
            <SectionLabel index="02" label="Dati trattati" />
            <h2 className="text-4xl font-black uppercase leading-none md:text-6xl">
              Dati trattati
            </h2>
          </div>
          <div className="grid gap-10 md:col-span-8">
            <article>
              <h3 className="mb-4 text-2xl font-black uppercase leading-none">Dati di navigazione</h3>
              <p className="text-pretty text-lg leading-relaxed text-muted">
                Durante la normale consultazione del sito, i sistemi informatici e le procedure
                software preposte al suo funzionamento possono acquisire alcuni dati tecnici la cui
                trasmissione e implicita nell'uso dei protocolli di comunicazione di Internet.
              </p>
              <ul className="mt-5 grid gap-2 border-t border-ink pt-5">
                {navigationData.map((item) => (
                  <li className="text-lg" key={item}>
                    {item}
                  </li>
                ))}
              </ul>
            </article>

            <article>
              <h3 className="mb-4 text-2xl font-black uppercase leading-none">
                Dati forniti volontariamente
              </h3>
              <p className="text-pretty text-lg leading-relaxed text-muted">
                Qualora l'utente utilizzi link email o strumenti di comunicazione presenti nel sito,
                possono essere trattati i dati forniti volontariamente dall'utente.
              </p>
              <ul className="mt-5 grid gap-2 border-t border-ink pt-5">
                {voluntaryData.map((item) => (
                  <li className="text-lg" key={item}>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-pretty text-muted">
                L'utente e invitato a non inserire nei messaggi dati non necessari, dati sensibili o
                informazioni riservate non pertinenti alla richiesta.
              </p>
            </article>

            <article>
              <h3 className="mb-4 text-2xl font-black uppercase leading-none">
                Analytics, cookie e tecnologie simili
              </h3>
              <div className="grid gap-4 text-pretty text-lg leading-relaxed text-muted">
                <p>
                  Il sito non integra nel codice applicativo strumenti analytics di profilazione,
                  marketing automation o tracciamento pubblicitario.
                </p>
                <p>
                  Il sito non utilizza cookie di profilazione o marketing. Eventuali cookie tecnici,
                  se presenti, sono limitati a funzionalita necessarie al corretto funzionamento
                  delle pagine o alla sicurezza del servizio.
                </p>
                <p>
                  I provider tecnici utilizzati per hosting, distribuzione o sicurezza possono
                  generare log tecnici necessari alla fornitura del servizio e alla protezione
                  dell'infrastruttura.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="editorial-shell grid gap-8 py-12 md:grid-cols-12 md:py-20">
        <div className="md:col-span-4">
          <SectionLabel index="03" label="Finalita" />
          <h2 className="text-4xl font-black uppercase leading-none md:text-6xl">Finalita</h2>
        </div>
        <div className="grid gap-5 md:col-span-8">
          {purposes.map((purpose) => (
            <article className="border-t border-ink pt-5" key={purpose.title}>
              <h3 className="text-xl font-black uppercase leading-none">{purpose.title}</h3>
              <p className="mt-3 text-pretty text-lg leading-relaxed text-muted">{purpose.text}</p>
            </article>
          ))}
          <article className="border-t border-ink pt-5">
            <h3 className="text-xl font-black uppercase leading-none">Basi giuridiche</h3>
            <p className="mt-3 text-pretty text-lg leading-relaxed text-muted">
              Le basi giuridiche del trattamento possono includere il legittimo interesse del
              Titolare alla sicurezza, manutenzione e gestione del sito, l'esecuzione di misure
              precontrattuali o contrattuali richieste dall'utente, l'adempimento di obblighi di
              legge e, ove necessario, il consenso dell'interessato.
            </p>
          </article>
        </div>
      </section>

      <section className="border-y border-ink bg-ink text-paper">
        <div className="editorial-shell grid gap-8 py-12 md:grid-cols-12 md:py-20">
          <div className="md:col-span-4">
            <SectionLabel index="04" label="Servizi terzi" />
            <h2 className="text-4xl font-black uppercase leading-none md:text-6xl">
              Servizi terzi
            </h2>
          </div>
          <div className="grid gap-5 md:col-span-8">
            <article className="border-t border-paper/40 pt-5">
              <h3 className="text-xl font-black uppercase leading-none">Hosting, CDN e sicurezza</h3>
              <p className="mt-3 text-pretty text-lg leading-relaxed text-paper/70">
                Il sito puo avvalersi di provider tecnici per hosting, distribuzione dei contenuti,
                DNS, caching, protezione del traffico e sicurezza infrastrutturale. Tali provider
                possono trattare dati tecnici e log necessari all'erogazione del servizio.
              </p>
            </article>
            <article className="border-t border-paper/40 pt-5">
              <h3 className="text-xl font-black uppercase leading-none">Analytics</h3>
              <p className="mt-3 text-pretty text-lg leading-relaxed text-paper/70">
                Non sono configurati nel codice applicativo strumenti analytics di profilazione o
                marketing. Eventuali statistiche infrastrutturali possono essere generate dal
                provider tecnico in forma compatibile con la gestione del servizio.
              </p>
            </article>
            <article className="border-t border-paper/40 pt-5">
              <h3 className="text-xl font-black uppercase leading-none">Form e messaggi</h3>
              <p className="mt-3 text-pretty text-lg leading-relaxed text-paper/70">
                Il form contatti presente sul sito utilizza il client email dell'utente tramite
                mailto e non archivia messaggi in un backend applicativo del sito.
              </p>
            </article>
            <article className="border-t border-paper/40 pt-5">
              <h3 className="text-xl font-black uppercase leading-none">Font, media e asset</h3>
              <p className="mt-3 text-pretty text-lg leading-relaxed text-paper/70">
                Il sito utilizza font di sistema e asset locali inclusi nel progetto. Non sono
                caricati nel codice applicativo font, script o media da Google Fonts, Adobe Fonts,
                YouTube, Vimeo o servizi equivalenti.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="editorial-shell grid gap-8 py-12 md:grid-cols-12 md:py-20">
        <div className="md:col-span-4">
          <SectionLabel index="05" label="Diritti" />
          <h2 className="text-4xl font-black uppercase leading-none md:text-6xl">Diritti</h2>
        </div>
        <div className="grid gap-6 md:col-span-8">
          <p className="text-pretty text-lg leading-relaxed text-muted">
            L'utente, in qualita di interessato, puo esercitare i diritti previsti dagli artt. 15-22
            del GDPR, tra cui:
          </p>
          <ul className="grid gap-2 border-t border-ink pt-5">
            {rights.map((right) => (
              <li className="text-lg" key={right}>
                {right}
              </li>
            ))}
          </ul>
          <p className="text-pretty text-lg leading-relaxed text-muted">
            Per esercitare i propri diritti, l'utente puo contattare il Titolare all'indirizzo{" "}
            <a className="font-black underline" href={site.contactEmailHref}>
              {site.contactEmailLabel}
            </a>
            . Il Titolare si impegna a rispondere alle richieste entro i termini previsti dalla
            normativa applicabile.
          </p>
          <p className="text-pretty text-lg leading-relaxed text-muted">
            Qualora l'utente ritenga che il trattamento dei propri dati personali avvenga in
            violazione della normativa, ha il diritto di proporre reclamo al Garante per la
            protezione dei dati personali o di adire le competenti sedi giudiziarie. Il Garante
            mette a disposizione informazioni e strumenti per l'esercizio dei diritti in materia di
            protezione dei dati personali.
          </p>
          <p>
            <a
              className="font-black uppercase underline"
              href="https://www.garanteprivacy.it/regolamentoue/diritti-degli-interessati"
            >
              Diritti degli interessati - Garante Privacy
            </a>
          </p>
        </div>
      </section>

      <section className="border-y border-ink bg-wash">
        <div className="editorial-shell grid gap-8 py-12 md:grid-cols-12 md:py-20">
          <div className="md:col-span-4">
            <SectionLabel index="06" label="Conservazione" />
            <h2 className="text-4xl font-black uppercase leading-none md:text-6xl">
              Conservazione
            </h2>
          </div>
          <div className="grid gap-4 text-pretty text-lg leading-relaxed text-muted md:col-span-8">
            <p>
              I dati personali vengono conservati per il tempo necessario al raggiungimento delle
              finalita per cui sono stati raccolti.
            </p>
            <ul className="grid gap-2 border-t border-ink pt-5 text-ink">
              <li>
                i dati tecnici e i log di navigazione sono conservati per il tempo necessario alla
                sicurezza, manutenzione e corretto funzionamento del sito;
              </li>
              <li>
                i dati inviati tramite email sono conservati per il tempo necessario a gestire la
                richiesta e le eventuali comunicazioni successive;
              </li>
              <li>
                eventuali dati analytics, se attivati, sono conservati secondo le impostazioni del
                provider utilizzato;
              </li>
              <li>
                eventuali dati necessari per obblighi legali o tutela dei diritti possono essere
                conservati per i termini previsti dalla legge.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="editorial-shell grid gap-8 py-12 md:grid-cols-12 md:py-20">
        <div className="md:col-span-4">
          <SectionLabel index="07" label="Trasferimenti" />
          <h2 className="text-4xl font-black uppercase leading-none md:text-6xl">
            Extra UE
          </h2>
        </div>
        <div className="grid gap-4 text-pretty text-lg leading-relaxed text-muted md:col-span-8">
          <p>
            Alcuni servizi terzi eventualmente utilizzati dal sito potrebbero trattare dati
            personali al di fuori dello Spazio Economico Europeo.
          </p>
          <p>
            In tal caso, il trasferimento avverra nel rispetto delle garanzie previste dal GDPR,
            quali decisioni di adeguatezza, clausole contrattuali standard o altri strumenti
            riconosciuti dalla normativa applicabile.
          </p>
          <p>
            La presente informativa puo essere aggiornata in caso di modifiche tecniche, introduzione
            di nuovi servizi, variazioni del trattamento o aggiornamenti normativi.
          </p>
        </div>
      </section>
    </>
  );
}
