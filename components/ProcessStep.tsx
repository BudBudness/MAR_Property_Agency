type ProcessStepProps = {
  number: string;
  title: string;
  description: string;
};

export default function ProcessStep({ number, title, description }: ProcessStepProps) {
  return (
    <div className="rounded-3xl bg-mar-soft p-6">
      <div className="grid h-11 w-11 place-items-center rounded-full bg-emerald-700 text-sm font-bold text-white">{number}</div>
      <h3 className="mt-5 text-lg font-bold text-slate-950">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-700">{description}</p>
    </div>
  );
}
