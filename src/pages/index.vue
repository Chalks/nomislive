<script setup>
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
</script>

<template>
    <div class="prose mx-auto">
        <div class="flex gap-2">
            <div class="grow">
                <h2>Register Form</h2>
                <RegisterForm @finish="handleFinish" />
            </div>

            <div class="grow">
                <h2>Login Form</h2>
                <LoginForm @finish="handleFinish" />
            </div>
        </div>

        <h2>User</h2>
        <pre>{{ user }}</pre>

        <button v-if="user" @click="doLogout">Logout</button>

        <h2>Test Save</h2>
        <button @click="testSaveNoData">Test with no data</button>
        <button @click="testSaveJustPrivate">Test with just privateData</button>
        <button @click="testSaveJustPublic">Test with just publicData</button>
        <button @click="testSaveBoth">Test with both privateData and publicData</button>
        <button @click="testOverwrite">Test overwrite</button>

        <p class="flex items-center space-x-4">
            <strong>Icon:</strong>
            <Icon icon="mdi:robot-angry" />
        </p>

        <p>
            <strong>Data from Pinia:</strong>
            {{ useSampleStore().sample }}
        </p>
    </div>
</template>
