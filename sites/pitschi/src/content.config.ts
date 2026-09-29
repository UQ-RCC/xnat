import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { docsSchema } from '@astrojs/starlight/schema';

export const collections = {
  // Landing page only until the copied pages have frontmatter; then use docsLoader().
  docs: defineCollection({ loader: glob({ base: './src/landing', pattern: '*.mdx' }), schema: docsSchema() }),
};
