import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';
import { siteConfig } from '../config/site';

export async function GET(context: APIContext) {
  const entries = (await getCollection('journal', ({ data }) => !data.draft)).sort((a,b) => b.data.date.valueOf() - a.data.date.valueOf());
  return rss({ title: `${siteConfig.name} — Journal`, description: siteConfig.description, site: context.site!, items: entries.map(entry => ({ title: entry.data.title, description: entry.data.excerpt ?? entry.data.summary, pubDate: entry.data.date, link: `/journal/${entry.slug}/` })) });
}
