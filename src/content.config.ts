import { defineCollection } from 'astro:content';
import { glob, file } from 'astro/loaders';
import { z } from 'astro/zod';

const courses = defineCollection({
  loader: glob({ base: './src/content/courses', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    code: z.string(),
    title: z.string(),
    term: z.string(),
    description: z.string().optional(),
    status: z.enum(['planned', 'in-progress', 'completed']),
  }),
});

export const collections = { courses };
