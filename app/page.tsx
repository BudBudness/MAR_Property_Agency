import type { Metadata } from 'next';
import CTAButton from '@/components/CTAButton';
import IntakeForm from '@/components/IntakeForm';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Contact MAR Property Agency in Mbarara, Uganda for land verification, due diligence, and transaction coordination.',
};

export default function ContactPage() {
  return (
    <section className="section-padding container-page">
      <p className="eyebrow">Contact MAR Property Agency</p>

      <h1 className="heading-xl mt-4">
        Request land verification in Uganda.
      </h1>

      <p className="body-lg mt-6 max-w-3xl">
        Send us the land location, seller details, and title copy if available.
        We will guide you through the next verification step.
      </p>

      <div className="mt-10 grid gap-8 lg:grid-cols-2">
        <div>
          <div className="rounded-3xl bg-mar-soft p-6">
            <h2 className="text-2xl font-bold text-slate-950">
              Official Contact
            </h2>

            <div className="mt-5 space-y-3 text-slate-700">
              <p>
                <span className="font-semibold">WhatsApp:</span>{' '}
                +256 755 200 233
              </p>

              <p>
                <span className="font-semibold">Email:</span>{' '}
                atwineronald@gmail.com
              </p>

              <p>
                <span className="font-semibold">Base:</span> Mbarara, Uganda
              </p>

              <p>
                <span className="font-semibold">Services:</span> Land
                Verification | Due Diligence | Transaction Coordination
              </p>
            </div>

            <div className="mt-6">
              <CTAButton href="https://wa.me/256755200233">
                Chat with MAR Property Agency on WhatsApp
              </CTAButton>
            </div>
          </div>
        </div>

        <IntakeForm />
      </div>
    </section>
  );
}