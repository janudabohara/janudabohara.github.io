import { useMemo, useState } from 'react';

export type ArchiveItem = { slug: string; title: string; summary: string; tags: string[]; folio: string; url: string; date?: string };

export default function ArchiveFilter({ items, label }: { items: ArchiveItem[]; label: string }) {
  const [tag, setTag] = useState<string | null>(null);
  const tags = useMemo(() => [...new Set(items.flatMap(item => item.tags))].sort(), [items]);
  const visible = tag ? items.filter(item => item.tags.includes(tag)) : items;

  if (items.length === 0) return <div className="glass-panel rounded-[28px] p-8 md:p-12"><p className="font-serif text-3xl">No published {label.toLowerCase()} yet.</p><p className="mt-4 text-sm text-ink-muted">Only complete, verified entries appear here.</p></div>;

  return (
    <div>
      {tags.length > 0 && <div className="flex flex-wrap gap-2 mb-8" aria-label="Filter by tag">
        <button className={`rounded-full border px-4 py-2 text-xs ${tag === null ? 'bg-ink text-canvas border-ink' : 'border-hairline hover:bg-white/60'}`} onClick={() => setTag(null)}>All {label}</button>
        {tags.map(item => <button key={item} className={`rounded-full border px-4 py-2 text-xs ${tag === item ? 'bg-ink text-canvas border-ink' : 'border-hairline hover:bg-white/60'}`} onClick={() => setTag(item)}>{item}</button>)}
      </div>}
      <div className="grid gap-5 md:grid-cols-2">
        {visible.map(item => <a key={item.slug} href={item.url} className="glass-card rounded-[28px] p-7 min-h-64 flex flex-col">
          <div className="flex justify-between gap-4 font-mono text-[10px] tracking-[.12em] uppercase text-ink-muted"><span>{item.folio}</span><span>{item.date}</span></div>
          <h2 className="font-serif text-4xl leading-tight mt-8">{item.title}</h2>
          <p className="mt-auto pt-8 text-sm leading-relaxed text-ink-secondary">{item.summary}</p>
        </a>)}
      </div>
    </div>
  );
}
