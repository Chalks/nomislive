import {defineStore} from 'pinia';

export const useSampleStore = defineStore('sampleStore', () => {
    const sample = ref('Sample pinia store item');

    function setSample(newSample) {
        sample.value = newSample;
    }

    return {
        sample,
        setSample,
    };
});

