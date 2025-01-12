<script setup>
/*
import {Icon} from '@iconify/vue';
import {useSampleStore} from 'store/sample.js';
import {getAuthenticatedUser, logout, save} from 'sjwt';

const user = ref(null);

const updateUser = async () => {
    user.value = await getAuthenticatedUser();
};

const doLogout = async () => {
    await logout();
    user.value = await getAuthenticatedUser();
};

const handleFinish = (response) => {
    // eslint-disable-next-line no-console
    console.log('response: ', response);

    updateUser();
};

const testSaveNoData = async () => {
    const result = await save();
    handleFinish(result);
};

const testSaveJustPrivate = async () => {
    const result = await save({
        privateData: {
            foo: 'bar',
        },
    });
    handleFinish(result);
};

const testSaveJustPublic = async () => {
    const result = await save({
        publicData: {
            bar: 'foo',
        },
    });
    handleFinish(result);
};

const testSaveBoth = async () => {
    const result = await save({
        privateData: {
            foo: 'bar bar',
        },
        publicData: {
            bar: 'foo foo',
        },
    });
    handleFinish(result);
};

const testOverwrite = async () => {
    const result = await save({
        privateData: {},
        publicData: {},
        overwrite: true,
    });
    handleFinish(result);
};

onMounted(() => {
    updateUser();
});
*/
</script>

<template>
    <div class="prose mx-auto">
        <h1 class="text-center">Nom Is LIVE</h1>
    </div>
</template>
