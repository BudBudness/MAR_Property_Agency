import Link from 'next/link';

type CTAButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
};

export default function CTAButton({ href, children, variant = 'primary' }: CTAButtonProps) {
  const styles = {
    primary: 'bg-emerald-700 text-white hover:bg-emerald-800',
    secondary: 'bg-mar-gold text-slate-950 hover:bg-yellow-500',
    outline: 'border border-emerald-700 text-emerald-800 hover:bg-emerald-50',
  };

  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold shadow-sm transition ${styles[variant]}`}
    >
      {children}
    </Link>
  );
}
