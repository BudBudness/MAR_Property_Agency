import type { Metadata } from 'next';
import ServiceCard from '@/components/ServiceCard';

export const metadata: Metadata = {
  title: 'Services',
  description: 'Basic title verification, full land due diligence, and transaction coordination for land buyers in Uganda.',
};

const services = [
  {
    title: 'Basic Title Verification',
    description: 'A focused first check for buyers who need confidence before paying a deposit or proceeding with negotiations.',
    items: ['Title copy review', 'Seller and ownership alignment', 'Registry status indicators', 'Suggested timeline: 24–72 hours'],
  },
  {
    title: 'Full Land Due Diligence',
    description: 'A deeper verification package for serious buyers, families, investors, and diaspora clients.',
    items: ['Registry and ownership checks', 'Encumbrance review', 'Field inspection', 'GPS and location confirmation', 'Risk summary report', 'Suggested timeline: 3–7 working days'],
  },
  {
    title: 'Transaction Coordination',
    description: 'Structured coordination for clients who need support managing documents, lawyers, seller follow-up, and process tracking.',
    items: ['Document checklist', 'Lawyer coordination', 'Buyer-seller communication support', 'Transaction progress updates', 'Suggested timeline: depends on transaction stage'],
  },
];

export default function ServicesPage() {
  return (
    <section className="section-padding container-page">
      <p className="eyebrow">Services</p>
      <h1 className="heading-xl mt-4">Land verification services built for Uganda.</h1>
      <p className="body-lg mt-6 max-w-3xl">MAR Property Agency focuses on verification, due diligence, and transaction coordination before money changes hands.</p>
      <div className="mt-12 grid gap-6 lg:grid-cols-3">{services.map((service) => <ServiceCard key={service.title} {...service} />)}</div>
    </section>
  );
}
