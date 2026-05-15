import type { Metadata } from 'next';
import CTAButton from '@/components/CTAButton';
import TrustBadge from '@/components/TrustBadge';

export const metadata: Metadata = {
  title: 'Diaspora Land Verification',
  description:
    'Remote land verification in Uganda for Ugandans abroad buying or verifying property through MAR Property Agency.',
};

export default function DiasporaPage() {
  return (
    <section className="section-padding container-page">
      <p className="eyebrow">Diaspora Clients</p>

      <h1 className="heading-xl mt-4">
        Verify land in Uganda from wherever you are.
      </h1>

      <p className="body-lg mt-6 max-w-3xl">
        MAR Property Agency helps Ugandans abroad verify land ownership,
        inspect physical location details, review seller information, and reduce
        fraud risk before sending money or completing a transaction.
      </p>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <CTAButton href="/contact">Request Remote Verification</CTAButton>

        <CTAButton href="https://wa.me/256755200233" variant="outline">
          Chat on WhatsApp
        </CTAButton>
      </div>

      <div className="mt-14 grid gap-6 lg:grid-cols-2">
        <div className="rounded-3xl bg-mar-dark p-8 text-white">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-mar-gold">
            For Ugandans abroad
          </p>

          <h2 className="mt-4 text-3xl font-bold">
            You should not depend only on verbal promises.
          </h2>

          <p className="mt-5 leading-7 text-slate-300">
            Whether you are in the UK, USA, Canada, UAE, Europe, or elsewhere,
            you need clear evidence before committing funds to land in Uganda.
            MAR Property Agency provides a structured verification workflow
            from Mbarara with Uganda-only focus.
          </p>
        </div>

        <div className="grid gap-5">
          <TrustBadge
            title="Remote verification"
            description="Submit land details, title copy, seller information, and location details from abroad."
          />

          <TrustBadge
            title="WhatsApp updates"
            description="Receive structured updates through WhatsApp during the verification process."
          />

          <TrustBadge
            title="Evidence-backed reports"
            description="Get a clear verification report with findings, risk notes, and practical recommendations."
          />
        </div>
      </div>

      <div className="mt-14">
        <p className="eyebrow">What we help verify</p>

        <h2 className="heading-lg mt-3">
          Reduce uncertainty before you send money.
        </h2>

        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          <TrustBadge
            title="Title details"
            description="Review available title information and identify document inconsistencies."
          />

          <TrustBadge
            title="Seller information"
            description="Check whether seller details align with the transaction story and available documents."
          />

          <TrustBadge
            title="Land location"
            description="Confirm physical location, access, and GPS-related evidence where applicable."
          />

          <TrustBadge
            title="Risk indicators"
            description="Flag suspicious claims, missing information, unclear ownership, or process gaps."
          />

          <TrustBadge
            title="Legal coordination"
            description="Coordinate legal review where the transaction requires professional interpretation."
          />

          <TrustBadge
            title="Transaction support"
            description="Help organize next steps before payment, signing, or completion."
          />
        </div>
      </div>

      <div className="mt-16 rounded-3xl bg-mar-soft p-8">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="eyebrow">Official Contact</p>

            <h2 className="mt-3 text-3xl font-bold text-slate-950">
              Start with a simple WhatsApp message.
            </h2>

            <p className="mt-4 leading-7 text-slate-700">
              Send the land location, seller name, title copy if available, and
              your current transaction stage.
            </p>

            <div className="mt-5 space-y-2 text-slate-700">
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
            </div>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
            <CTAButton href="/contact">Open Intake Form</CTAButton>

            <CTAButton href="https://wa.me/256755200233" variant="outline">
              WhatsApp MAR
            </CTAButton>
          </div>
        </div>
      </div>
    </section>
  );
}