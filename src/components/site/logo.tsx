export function Bolt({ className }: { className?: string }) {
  return <svg viewBox="0 0 64 64" className={className} aria-hidden="true"><path d="M36 4 12 36h16l-4 24 28-34H34z" fill="currentColor" /></svg>;
}
export function Logo() {
  return (
    <span className="flex items-center gap-2">
      <span className="grid h-10 w-10 place-items-center rounded-lg bg-gold text-ink"><Bolt className="h-6 w-6" /></span>
      <span className="font-display text-xl font-extrabold uppercase leading-[0.95] tracking-tight text-white">EV Mobile <span className="text-gold">Charging</span><span className="block text-[11px] font-semibold tracking-[0.3em] text-white/60">Dallas</span></span>
    </span>
  );
}
