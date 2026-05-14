type TrustBadgeProps = {
  title: string;
  description: string;
};

export default function TrustBadge({ title, description }: TrustBadgeProps) {
  return (
    <div className="rounded-2xl border border-emerald-100 bg-white p-5 shadow-sm">
      <p className="font-bold text-emerald-800">{title}</p>
      <p className="mt-2 text-sm leading-6 text-slate-700">{description}</p>
    </div>
  );
}
