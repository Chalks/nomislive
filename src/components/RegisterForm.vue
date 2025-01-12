<script setup>
import {register} from 'sjwt';

const email = ref('');
const password = ref('');
const emit = defineEmits(['finish']);

const handleSubmit = (async () => {
    const result = await register({
        email: email.value,
        password: password.value,
    });

    emit('finish', result);
});
</script>

<template>
    <form @submit.prevent="handleSubmit">
        <input v-model="email" type="text" name="email" placeholder="Email" />
        <input v-model="password" type="password" name="password" placeholder="Password" />
        <input type="submit" value="Register" />
    </form>
</template>