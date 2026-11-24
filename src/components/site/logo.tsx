export function Bolt({ className }: { className?: string }) {
  return <svg viewBox="0 0 64 64" className={className} aria-hidden="true"><path d="M36 4 12 36h16l-4 24 28-34H34z" fill="currentColor" /></svg>;
}
export function Logo({ dark = true }: { dark?: boolean }) {
  return (
    <span className="flex items-center gap-2.5">
      <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-brand to-volt text-navy shadow-[0_0_24px_rgba(45,226,230,.45)]"><Bolt className="h-6 w-6" /></span>
      <span className={`font-display text-[17px] font-bold leading-[1.05] tracking-tight ${dark ? 'text-white' : 'text-navy'}`}>EV Mobile Charging<span className="block text-[11px] font-semibold uppercase tracking-[0.32em] text-volt">Dallas</span></span>
    </span>
  );
}
