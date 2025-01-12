import {sjwt} from 'sjwt';

export default defineNuxtPlugin({
    name: 'sjwt',
    hooks: {
        'app:created'() {
            sjwt.configure({
                host: useRuntimeConfig().public.sjwtHost,
                projectId: useRuntimeConfig().public.sjwtProjectId,
            });
        },
    },
});
