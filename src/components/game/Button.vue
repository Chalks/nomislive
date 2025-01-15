<script setup>
import playFrequency from 'utils/playFrequency.js';

const props = defineProps({
    real: {
        type: Array,
        default: () => [0, 1],
    },
    imag: {
        type: Array,
        default: () => [0, 0],
    },
});

const play = () => {
    playFrequency({frequency: 277.18, real: props.real, imag: props.imag});
};
</script>

<template>
    <button @click="play">button</button>
</template>