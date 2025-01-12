import {resolve} from 'path';

export default defineNuxtConfig({
    alias: {
        store: resolve(__dirname, './src/store'),
    },

    devServer: {
        host: '127.0.0.1',
    },

    postcss: {
        plugins: {
            /*
          'tailwindcss/nesting': {},
      */
            tailwindcss: {},
            autoprefixer: {},
        },
    },

    css: [
        '~/assets/css/tailwind.css',
        '~/assets/css/iconify.css',
    ],

    modules: [
        '@pinia/nuxt',
    ],

    app: {
        head: {
            title: 'Nom Is LIVE',
            meta: [
                {charset: 'utf-8'},
                {name: 'viewport', content: 'width=device-width, initial-scale=1'},
                {hid: 'description', name: 'description', content: 'Nom Is LIVE, a fiendishly difficult puzzle.'},
                {hid: 'og-title', property: 'og:title', content: 'Nom Is LIVE'},
                {hid: 'og-description', property: 'og:description', content: 'Nom Is LIVE, a fiendishly difficult puzzle.'},
                {hid: 'og-type', property: 'og:type', content: 'website'},
                {hid: 'og-site_name', property: 'og:og-site_name', content: 'Nom Is LIVE'},
                {hid: 'twitter-title', property: 'twitter:title', content: 'Nom Is LIVE'},
                {hid: 'twitter-description', property: 'twitter:description', content: 'Nom Is LIVE, a fiendishly difficult puzzle.'},
                {hid: 'twitter-site', property: 'twitter:site', content: 'nomislive.com'},
            ],
            link: [
                {
                    rel: 'icon',
                    type: 'image/x-icon',
                    href: '/favicon.ico',
                },
                {
                    rel: 'icon',
                    type: 'image/png',
                    sizes: '16x16',
                    href: '/favicon-16x16.png',
                },
                {
                    rel: 'icon',
                    type: 'image/png',
                    sizes: '32x32',
                    href: '/favicon-32x32.png',
                },
                {
                    rel: 'icon',
                    type: 'image/png',
                    sizes: '96x96',
                    href: '/favicon-96x96.png',
                },
            ],
        },
    },

    runtimeConfig: {
        public: {
            sjwtHost: 'https://api.simplejwt.com',
            sjwtProjectId: '07b6b1ee-9843-4b08-b305-47c9d3836117',
        },
    },

    srcDir: 'src/',
    ssr: false,
    telemetry: false,
    compatibilityDate: '2024-12-19',
});