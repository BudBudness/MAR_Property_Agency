import type { Metadata } from 'next';
import CTAButton from '@/components/CTAButton';
import TrustBadge from '@/components/TrustBadge';

export const metadata: Metadata = {
  title: 'Uganda Land Fraud Education',
  description:
    'Learn common Uganda land fraud risks including fake titles, duplicate sales, seller impersonation, hidden caveats, and boundary confusion.',
};

const fraudTopics = [
  {
    title: 'Fake land titles',
    description:
      'A title copy may look convincing but still require verification against official records and transaction context.',
  },
  {
    title: 'Duplicate land sales',
    description:
      'The same land may be presented or sold to multiple buyers, especially where buyers are remote or rushed.',
  },
  {
    title: 'Seller impersonation',
    description:
      'Someone may claim authority to sell land without being the rightful owner, administrator, or authorized representative.',
  },
  {
    title: 'Family land disputes',
    description:
      'Family land can involve beneficiaries, administrators, spouses, or relatives whose interests must be understood before payment.',
  },
  {
    title: 'Hidden caveats and mortgages',
    description:
      'Land may have restrictions, claims, caveats, mortgages, or other interests that affect transfer or safe purchase.',
  },
  {
    title: 'Boundary confusion',
    description:
      'A buyer may be shown land that does not match the title, survey details, or expected physical boundaries.',
  },
];

export default function FraudEducationPage() {
  return (
    <section className="section-padding container-page">
      <p className="eyebrow">Fraud Education</p>

      <h1 className="heading-xl mt-4">
        Learn the common land fraud risks before you buy.
      </h1>

      <p className="body-lg mt-6 max-w-3xl">
        Land transactions in Uganda require careful verification. These common
        fraud patterns can affect both local buyers and Ugandans in the
        diaspora.
      </p>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <CTAButton href="/contact">Request Verification</CTAButton>

        <CTAButton href="https://wa.me/256755200233" variant="outline">
          Ask MAR on WhatsApp
        </CTAButton>
      </div>

      <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {fraudTopics.map((topic) => (
          <TrustBadge
            key={topic.title}
            title={topic.title}
            description={topic.description}
          />
        ))}
      </div>

      <div className="mt-16 grid gap-8 lg:grid-cols-2">
        <div className="rounded-3xl bg-mar-soft p-8">
          <p className="eyebrow">Verification principle</p>

          <h2 className="mt-3 text-3xl font-bold text-slate-950">
            Do not rely on pressure or verbal assurance.
          </h2>

          <p className="mt-5 leading-7 text-slate-700">
            A serious seller should allow reasonable verification. Be cautious
            when someone pressures you to pay quickly, discourages title checks,
            refuses to share documents, or avoids physical inspection.
          </p>
        </div>

        <div className="rounded-3xl bg-mar-dark p-8 text-white">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-mar-gold">
            Before payment
          </p>

          <h2 className="mt-3 text-3xl font-bold">
            Verify the land, seller, and transaction path.
          </h2>

          <p className="mt-5 leading-7 text-slate-300">
            MAR Property Agency helps organize the verification process so you
            can make a better decision before sending money, signing an
            agreement, or completing a purchase.
          </p>
        </div>
      </div>

      <div className="mt-16 rounded-3xl border border-slate-200 p-8">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="eyebrow">Need help checking land?</p>

            <h2 className="mt-3 text-3xl font-bold text-slate-950">
              Send the details before you commit.
            </h2>

            <p className="mt-4 leading-7 text-slate-700">
              Share the land location, seller name, title copy if available,
              and your current stage in the transaction.
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