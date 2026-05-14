export default function IntakeForm() {
  return (
    <form className="grid gap-4 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="grid gap-4 sm:grid-cols-2">
        <input className="rounded-xl border border-slate-300 px-4 py-3" placeholder="Full name" />
        <select className="rounded-xl border border-slate-300 px-4 py-3" defaultValue="">
          <option value="" disabled>Client type</option>
          <option>Local</option>
          <option>Diaspora</option>
        </select>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <input className="rounded-xl border border-slate-300 px-4 py-3" placeholder="Country or district" />
        <input className="rounded-xl border border-slate-300 px-4 py-3" placeholder="WhatsApp number" />
      </div>
      <input className="rounded-xl border border-slate-300 px-4 py-3" placeholder="Email" type="email" />
      <select className="rounded-xl border border-slate-300 px-4 py-3" defaultValue="">
        <option value="" disabled>Service needed</option>
        <option>Basic Title Verification</option>
        <option>Full Land Due Diligence</option>
        <option>Transaction Coordination</option>
      </select>
      <input className="rounded-xl border border-slate-300 px-4 py-3" placeholder="Land location" />
      <select className="rounded-xl border border-slate-300 px-4 py-3" defaultValue="">
        <option value="" disabled>Do you have a title copy?</option>
        <option>Yes</option>
        <option>No</option>
      </select>
      <textarea className="min-h-32 rounded-xl border border-slate-300 px-4 py-3" placeholder="Message" />
      <button type="button" className="rounded-full bg-emerald-700 px-5 py-3 font-semibold text-white hover:bg-emerald-800">
        Submit Request
      </button>
      <p className="text-xs text-slate-500">Form submission is a placeholder in v1. Use WhatsApp for immediate response.</p>
    </form>
  );
}
