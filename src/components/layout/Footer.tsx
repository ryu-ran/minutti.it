import Link from 'next/link';
import { footerNavigation } from '@/data/navigation';
import { site } from '@/data/site';

export function Footer() {
  return (
    <footer className='mt-20 border-t border-ink bg-ink text-paper'>
      <div className='editorial-shell grid gap-8 py-10 md:grid-cols-12 md:py-14'>
        <div className='md:col-span-7'>
          <p className='headline footer-headline max-w-4xl'>
            Matteo
            <br />
            Minutti
          </p>
        </div>
        <div className='grid gap-6 md:col-span-5 md:grid-cols-2'>
          <div>
            <p className='mb-3 text-xs font-black uppercase tracking-[0.16em] text-paper/60'>
              Archive
            </p>
            <nav aria-label='Footer navigation' className='grid gap-2'>
              {footerNavigation.map((item) => (
                <Link
                  className='underline hover:text-accent'
                  href={item.href}
                  key={item.href}>
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
          <div>
            <p className='mb-3 text-xs font-black uppercase tracking-[0.16em] text-paper/60'>
              Contact
            </p>
            <a
              className='underline hover:text-accent'
              href={site.contactEmailHref}>
              {site.contactEmailLabel}
            </a>
            <p className='mt-6 text-sm text-paper/60'>
              Personal editorial object. <br />
              Good.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
