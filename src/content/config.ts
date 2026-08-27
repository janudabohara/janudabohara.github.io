import { defineCollection, z } from 'astro:content';

const shared = ({ image }: { image: () => z.ZodTypeAny }) => z.object({
  title: z.string(),
  summary: z.string(),
  date: z.date(),
  tags: z.array(z.string()).default([]),
  coverImage: image().optional(),
  altText: z.string().optional(),
  draft: z.boolean().default(false),
  displayOrder: z.number().optional(),
});

const technicalWork = defineCollection({
  type: 'content',
  schema: ({ image }) => shared({ image }).extend({
    repository: z.string().url().optional(), demo: z.string().url().optional(), publication: z.string().url().optional(),
    technologies: z.array(z.string()).default([]), role: z.string().optional(), collaborators: z.array(z.string()).default([]),
  }),
});

const fieldNotes = defineCollection({
  type: 'content',
  schema: ({ image }) => shared({ image }).extend({
    eventDate: z.date().optional(), location: z.string().optional(), role: z.string().optional(),
    gallery: z.array(image()).default([]), captions: z.array(z.string()).default([]), collaborators: z.array(z.string()).default([]),
  }),
});

const journal = defineCollection({
  type: 'content',
  schema: ({ image }) => shared({ image }).extend({
    excerpt: z.string().optional(), author: z.string().default('Januda Bohara'), readingMetadata: z.string().optional(),
    canonicalURL: z.string().url().optional(), relatedContent: z.array(z.string()).default([]),
  }),
});

export const collections = { 'technical-work': technicalWork, 'field-notes': fieldNotes, journal };
