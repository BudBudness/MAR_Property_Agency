import CTAButton from './CTAButton';

type ServiceCardProps = {
  title: string;
  description: string;
  items: string[];
  href?: string;
};

export default function ServiceCard({ title, description, items, href = '/contact' }: ServiceCardProps) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <h3 className="text-xl font-bold text-slate-950">{title}</h3>
      <p className="mt-3 text-slate-700">{description}</p>
      <ul className="mt-5 space-y-2 text-sm text-slate-700">
        {items.map((item) => (
          <li key={item} className="flex gap-2"><span className="mt-1 h-2 w-2 rounded-full bg-emerald-700" />{item}</li>
        ))}
      </ul>
      <div className="mt-6"><CTAButton href={href} variant="outline">Request this service</CTAButton></div>
    </div>
  );
}
