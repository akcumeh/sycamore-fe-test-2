// https://nuxt.com/docs/api/configuration/nuxt-config

import tailwindcss from '@tailwindcss/vite';

export default defineNuxtConfig({
    modules: ['@nuxtjs/google-fonts'],
    googleFonts: {
        families: {
            'DM Sans': [400, 500, 700],
            'Plus Jakarta Sans': [500, 700, 800],
        },
    },
    compatibilityDate: '2026-08-01',
    devtools: { enabled: true },
    css: ['~/assets/css/main.css'],
    vite: {
        plugins: [tailwindcss()],
    },
});
