<script setup>
const real1 = ref(0);
const real2 = ref(0);
const real3 = ref(0);
const imag1 = ref(0);
const imag2 = ref(0);
const imag3 = ref(0);

const real = computed(() => [
    Number.parseFloat(real1.value),
    Number.parseFloat(real2.value),
    Number.parseFloat(real3.value),
]);

const imag = computed(() => [
    Number.parseFloat(imag1.value),
    Number.parseFloat(imag2.value),
    Number.parseFloat(imag3.value),
]);
</script>

<template>
    <div class="prose mx-auto">
        <div class="flex items-center gap-2">
            <input v-model="real1" type="range" min="-1" max="1" step="0.01" />
            <div class="font-bold w-20">{{ real1 }}</div>
            <div @click="() => { real1 = -1; }" class="select-none cursor-pointer">-1</div>
            <div @click="() => { real1 = 0; }" class="select-none cursor-pointer">0</div>
            <div @click="() => { real1 = 1; }" class="select-none cursor-pointer">1</div>
        </div>
        <div class="flex items-center gap-2">
            <input v-model="real2" type="range" min="-1" max="1" step="0.01" />
            <div class="font-bold w-20">{{ real2 }}</div>
            <div @click="() => { real2 = -1; }" class="select-none cursor-pointer">-1</div>
            <div @click="() => { real2 = 0; }" class="select-none cursor-pointer">0</div>
            <div @click="() => { real2 = 1; }" class="select-none cursor-pointer">1</div>
        </div>
        <div class="flex items-center gap-2">
            <input v-model="real3" type="range" min="-1" max="1" step="0.01" />
            <div class="font-bold w-20">{{ real3 }}</div>
            <div @click="() => { real3 = -1; }" class="select-none cursor-pointer">-1</div>
            <div @click="() => { real3 = 0; }" class="select-none cursor-pointer">0</div>
            <div @click="() => { real3 = 1; }" class="select-none cursor-pointer">1</div>
        </div>
        <div class="flex items-center gap-2">
            <input v-model="imag1" type="range" min="-1" max="1" step="0.01" />
            <div class="font-bold w-20">{{ imag1 }}</div>
            <div @click="() => { imag1 = -1; }" class="select-none cursor-pointer">-1</div>
            <div @click="() => { imag1 = 0; }" class="select-none cursor-pointer">0</div>
            <div @click="() => { imag1 = 1; }" class="select-none cursor-pointer">1</div>
        </div>
        <div class="flex items-center gap-2">
            <input v-model="imag2" type="range" min="-1" max="1" step="0.01" />
            <div class="font-bold w-20">{{ imag2 }}</div>
            <div @click="() => { imag2 = -1; }" class="select-none cursor-pointer">-1</div>
            <div @click="() => { imag2 = 0; }" class="select-none cursor-pointer">0</div>
            <div @click="() => { imag2 = 1; }" class="select-none cursor-pointer">1</div>
        </div>
        <div class="flex items-center gap-2">
            <input v-model="imag3" type="range" min="-1" max="1" step="0.01" />
            <div class="font-bold w-20">{{ imag3 }}</div>
            <div @click="() => { imag3 = -1; }" class="select-none cursor-pointer">-1</div>
            <div @click="() => { imag3 = 0; }" class="select-none cursor-pointer">0</div>
            <div @click="() => { imag3 = 1; }" class="select-none cursor-pointer">1</div>
        </div>

        <GameButton :real="real" :imag="imag" />

        <h1 class="text-center">Nom Is LIVE</h1>
    </div>
</template>
