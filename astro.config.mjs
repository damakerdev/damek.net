// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
    integrations: [react()],
    fonts: [
        {
            provider: fontProviders.local(),
            name: 'Inter',
            cssVariable: '--font-inter',
            fallbacks: ["serif"],
            options: {
                variants: [
                    {
                        weight: "500",
                        src: ["./src/assets/fonts/InterVariable.woff2"],
                        style: "normal"
                    }
                ]
            }
        }
    ]
});

