import { defineCollection } from 'astro:content';
import { file } from 'astro/loaders';
import { z } from 'astro/zod';

const games= defineCollection({
    loader: file('./src/content/games.json'),
    schema: z.object({
        id: z.string(),
        title: z.string(),
        description: z.string(),
        link: z.string()
    }),
})

export const collections = { games };

