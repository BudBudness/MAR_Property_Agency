import type { Metadata } from 'next';
import CTAButton from '@/components/CTAButton';
import TrustBadge from '@/components/TrustBadge';

export const metadata: Metadata = {
  title: 'Local Land Verification',
  description:
    'Land verification support for Ugandan buyers, families, investors, and small businesses through MAR Property Agency in Mbarara.',
};

export default function LocalsPage() {
  return (
    <section className="section-padding container-page">
      <p className="eyebrow">Local Clients</p>

      <h1 className="heading-xl mt-4">
        Before you pay for land, verify the title, seller, and location.
      </h1>

      <p className="body-lg mt-6 max-w-3xl">
        MAR Property Agency helps Ugandan buyers reduce land fraud risk through
        structured title checks, seller review, field verification, and
        transaction coordination.
      </p>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <CTAButton href="/contact">Request Local Verification</CTAButton>

        <CTAButton href="https://wa.me/256755200233" variant="outline">
          Chat on WhatsApp
        </CTAButton>
      </div>

      <div className="mt-14 grid gap-6 lg:grid-cols-2">
        <div className="rounded-3xl bg-mar-soft p-8">
          <p className="eyebrow">Why verify first?</p>

          <h2 className="mt-3 text-3xl font-bold text-slate-950">
            Land mistakes are expensive.
          </h2>

          <p className="mt-5 leading-7 text-slate-700">
            Many buyers lose money because they trust verbal promises, rushed
            broker introductions, incomplete title copies, unclear boundaries,
            or sellers whose authority has not been properly checked.
          </p>

          <p className="mt-4 leading-7 text-slate-700">
            Verification gives you a clearer picture before you pay a deposit,
            sign an agreement, or complete the transaction.
          </p>
        </div>

        <div className="grid gap-5">
          <TrustBadge
            title="Affordable verification"
            description="Practical checks for local buyers before committing money."
          />

          <TrustBadge
            title="Faster decision-making"
            description="A structured process helps you know what to check next."
          />

          <TrustBadge
            title="Local field support"
            description="Mbarara-based coordination for location and site-related checks."
          />
        </div>
      </div>

      <div className="mt-14">
        <p className="eyebrow">What we check</p>

        <h2 className="heading-lg mt-3">
          Verification support for Ugandan land buyers.
        </h2>

        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          <TrustBadge
            title="Title information"
            description="Review title details and identify inconsistencies or missing information."
          />

          <TrustBadge
            title="Seller details"
            description="Check whether seller details align with available documents and transaction claims."
          />

          <TrustBadge
            title="Physical location"
            description="Confirm land location, access, and visible site conditions where applicable."
          />

          <TrustBadge
            title="Boundary indicators"
            description="Observe visible boundary markers and note areas requiring surveyor confirmation."
          />

          <TrustBadge
            title="Payment readiness"
            description="Help identify whether the transaction has enough verification before payment."
          />

          <TrustBadge
            title="Legal review"
            description="Coordinate lawyer review where ownership, agreement, or encumbrance issues arise."
          />
        </div>
      </div>

      <div className="mt-16 rounded-3xl bg-mar-dark p-8 text-white">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-mar-gold">
              Start safely
            </p>

            <h2 className="mt-3 text-3xl font-bold">
              Verify before deposit or agreement signing.
            </h2>

            <p className="mt-4 leading-7 text-slate-300">
              Send the land location, seller contact, title copy if available,
              and your current transaction stage.
            </p>

            <div className="mt-5 space-y-2 text-slate-300">
              <p>
                <span className="font-semibold text-white">WhatsApp:</span>{' '}
                +256 755 200 233
              </p>

              <p>
                <span className="font-semibold text-white">Email:</span>{' '}
                atwineronald@gmail.com
              </p>

              <p>
                <span className="font-semibold text-white">Base:</span>{' '}
                Mbarara, Uganda
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
            <CTAButton href="/contact" variant="secondary">
              Open Intake Form
            </CTAButton>

            <CTAButton href="https://wa.me/256755200233" variant="outline">
              WhatsApp MAR
            </CTAButton>
          </div>
        </div>
      </div>
    </section>
  );
}