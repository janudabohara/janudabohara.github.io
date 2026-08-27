import { useEffect, useId, useState } from 'react';

type Link = { label: string; href: string };

export default function MobileNav({ links }: { links: Link[] }) {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  useEffect(() => {
    const close = (event: KeyboardEvent) => event.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', close);
    return () => window.removeEventListener('keydown', close);
  }, []);

  return (
    <div className="md:hidden relative z-[60]">
      <button type="button" aria-expanded={open} aria-controls={panelId} onClick={() => setOpen(value => !value)} className="font-mono text-[10px] tracking-[.12em] uppercase px-3 py-2 rounded-xl hover:bg-white/50">
        {open ? 'Close' : 'Menu'}
      </button>
      {open && (
        <nav id={panelId} aria-label="Mobile navigation" className="fixed top-[104px] left-5 right-5 glass-panel rounded-[24px] p-5">
          <ul className="space-y-1">
            {links.map(link => <li key={link.href}><a href={link.href} onClick={() => setOpen(false)} className="block rounded-xl px-4 py-3 font-serif text-2xl hover:bg-white/60">{link.label}</a></li>)}
          </ul>
        </nav>
      )}
    </div>
  );
}
