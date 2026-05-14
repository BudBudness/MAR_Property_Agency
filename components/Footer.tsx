import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-mar-dark text-white">
      <div className="container-page grid gap-8 py-10 md:grid-cols-3">
        <div>
          <p className="text-xl font-bold">MAR Property Agency</p>
          <p className="mt-3 text-sm leading-6 text-slate-300">Mbarara, Uganda<br />Land Verification | Due Diligence | Transaction Coordination</p>
        </div>
        <div>
          <p className="font-semibold">Quick Links</p>
          <div className="mt-3 grid gap-2 text-sm text-slate-300">
            <Link href="/services">Services</Link><Link href="/diaspora">Diaspora Clients</Link><Link href="/locals">Local Clients</Link><Link href="/contact">Contact</Link>
          </div>
        </div>
        <div>
          <p className="font-semibold">Contact</p>
          <p className="mt-3 text-sm text-slate-300">WhatsApp: +256 700 709 940</p>
          <Link href="https://wa.me/256700709940" className="mt-4 inline-flex rounded-full bg-mar-gold px-4 py-2 text-sm font-semibold text-slate-950">Chat on WhatsApp</Link>
        </div>
      </div>
    </footer>
  );
}
