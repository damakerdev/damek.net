import { defineCollection } from 'astro:content';
import { glob, file} from 'astro/loaders';
import { z } from 'astro/zod';

const games= defineCollection({
    loader: glob({ base: './src/content/', pattern:'**/*.json'}),
    schema: z.object({
        title: z.string(),
        description: z.string(),
        link: z.string()
    }),
})

export const collections = { games };

