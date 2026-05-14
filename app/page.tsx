import CTAButton from '@/components/CTAButton';
import ProcessStep from '@/components/ProcessStep';
import ServiceCard from '@/components/ServiceCard';
import TrustBadge from '@/components/TrustBadge';

const services = [
  { title: 'Basic Title Verification', description: 'A focused check before you commit money.', items: ['Title copy review', 'Ownership check', 'Encumbrance indicators'] },
  { title: 'Full Land Due Diligence', description: 'Evidence-backed verification for serious buyers.', items: ['Registry checks', 'Field inspection', 'GPS confirmation', 'Risk report'] },
  { title: 'Transaction Coordination', description: 'Structured support through the purchase process.', items: ['Document tracking', 'Lawyer coordination', 'Buyer-seller follow-up'] },
];

export default function Home() {
  return (
    <>
      <section className="bg-gradient-to-b from-mar-soft to-white">
        <div className="container-page grid gap-10 py-20 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="eyebrow">Mbarara-based. Uganda-focused.</p>
            <h1 className="heading-xl mt-4">Verify land in Uganda before you send money.</h1>
            <p className="body-lg mt-6">MAR Property Agency helps locals and Ugandans abroad confirm land ownership, reduce fraud risk, and make safer property decisions.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row"><CTAButton href="/contact">Request Land Verification</CTAButton><CTAButton href="https://wa.me/256700709940" variant="outline">Talk to Us on WhatsApp</CTAButton></div>
          </div>
          <div className="rounded-[2rem] bg-mar-dark p-8 text-white shadow-xl">
            <p className="text-sm uppercase tracking-[0.2em] text-mar-gold">What we verify</p>
            <div className="mt-6 grid gap-4"><TrustBadge title="Ownership" description="Confirm who is presenting the land and whether documents align." /><TrustBadge title="Location" description="Check the physical land, access, and GPS position." /><TrustBadge title="Risk" description="Identify red flags before payment or agreement signing." /></div>
          </div>
        </div>
      </section>

      <section className="section-padding container-page">
        <div className="max-w-3xl"><p className="eyebrow">The problem</p><h2 className="heading-lg mt-3">Land fraud is common and expensive.</h2><p className="body-lg mt-4">Verbal promises, broker pressure, forged papers, hidden caveats, and unclear boundaries can expose buyers to serious loss. Verification must happen before payment.</p></div>
      </section>

      <section className="section-padding bg-mar-soft"><div className="container-page"><p className="eyebrow">Services</p><h2 className="heading-lg mt-3">Verification-first property support.</h2><div className="mt-10 grid gap-6 md:grid-cols-3">{services.map((s) => <ServiceCard key={s.title} {...s} />)}</div></div></section>

      <section className="section-padding container-page"><p className="eyebrow">Process</p><h2 className="heading-lg mt-3">How verification works.</h2><div className="mt-10 grid gap-5 md:grid-cols-3"><ProcessStep number="1" title="Submit land details" description="Send location, seller information, and title copy if available." /><ProcessStep number="2" title="We verify" description="MAR performs checks, field inspection, GPS confirmation, and risk review." /><ProcessStep number="3" title="Receive report" description="You receive a clear recommendation before making the next decision." /></div></section>

      <section className="section-padding bg-mar-dark text-white"><div className="container-page grid gap-8 md:grid-cols-2 md:items-center"><div><p className="eyebrow text-mar-gold">Why MAR</p><h2 className="mt-3 text-3xl font-bold">Built for locals and diaspora clients.</h2><p className="mt-4 leading-7 text-slate-300">We focus on Uganda, operate from Mbarara, and structure every case around evidence, documentation, and clear communication.</p></div><CTAButton href="/contact" variant="secondary">Start Verification</CTAButton></div></section>
    </>
  );
}
