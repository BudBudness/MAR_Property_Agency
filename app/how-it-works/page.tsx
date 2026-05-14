import type { Metadata } from 'next';
import ProcessStep from '@/components/ProcessStep';
import CTAButton from '@/components/CTAButton';

export const metadata: Metadata = {
  title: 'How It Works',
  description: 'How MAR Property Agency verifies land in Uganda before payment or transaction completion.',
};

const steps = [
  ['1', 'Submit land details', 'Share the land location, seller contacts, title copy if available, and your intended transaction stage.'],
  ['2', 'Provide title and seller information', 'We organize the documents and identify the first verification tasks required.'],
  ['3', 'Registry and ownership checks', 'MAR reviews available registry, title, seller, and ownership information for consistency.'],
  ['4', 'Field inspection and GPS confirmation', 'The physical land is checked for location, access, and observable risks.'],
  ['5', 'Legal and risk review', 'Findings are assessed for red flags, inconsistencies, caveats, disputes, or missing information.'],
  ['6', 'Final report delivered', 'You receive a clear report with evidence, findings, and a practical recommendation.'],
];

export default function HowItWorksPage() {
  return (
    <section className="section-padding container-page">
      <p className="eyebrow">Process</p>
      <h1 className="heading-xl mt-4">A structured verification workflow.</h1>
      <p className="body-lg mt-6 max-w-3xl">The objective is simple: verify before payment, document the evidence, and help clients make safer land decisions in Uganda.</p>
      <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {steps.map(([number, title, description]) => <ProcessStep key={number} number={number} title={title} description={description} />)}
      </div>
      <div className="mt-12"><CTAButton href="/contact">Request Land Verification</CTAButton></div>
    </section>
  );
}
