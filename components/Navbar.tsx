import Link from 'next/link';
import CTAButton from './CTAButton';

const links = [
  { href: '/services', label: 'Services' },
  { href: '/how-it-works', label: 'How It Works' },
  { href: '/diaspora', label: 'Diaspora' },
  { href: '/locals', label: 'Locals' },
  { href: '/fraud-education', label: 'Fraud Education' },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <nav className="container-page flex h-16 items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2 font-bold text-mar-dark">
          <span className="grid h-9 w-9 place-items-center rounded-full border border-mar-gold bg-mar-soft text-lg">
            M
          </span>
          <span className="leading-tight">
            MAR Property
            <br className="sm:hidden" /> Agency
          </span>
        </Link>

        <div className="hidden items-center gap-6 lg:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-700 hover:text-emerald-800"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden sm:block">
          <CTAButton href="https://wa.me/256755200233" variant="outline">
            WhatsApp
          </CTAButton>
        </div>
      </nav>
    </header>
  );
}