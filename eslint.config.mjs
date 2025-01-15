import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginVue from 'eslint-plugin-vue';

/** @type {import('eslint').Linter.Config[]} */
export default [
    {files: ['**/*.{ts,js,mjs,cjs,vue}']},
    {
        languageOptions:
            {
                globals: {
                    ...globals.node,
                    ...globals.browser,
                    defineNuxtConfig: 'readonly',
                    definePageMeta: 'readonly',
                    useRuntimeConfig: 'readonly',
                    defineNuxtPlugin: 'readonly',
                    defineNuxtRouteMiddleware: 'readonly',
                    useCookie: 'readonly',
                    useRoute: 'readonly',
                    useRouter: 'readonly',
                    navigateTo: 'readonly',
                    useFetch: 'readonly',
                    $fetch: 'readonly',
                    ref: 'readonly',
                    computed: 'readonly',
                    useHead: 'readonly',
                    onMounted: 'readonly',
                },
            },
    },
    pluginJs.configs.recommended,
    ...pluginVue.configs['flat/essential'],
    {
        ignores: ['dist/', '.nuxt/'],
    },
    {
        rules: {
            'indent': ['error', 4, {
                ignoredNodes: ['TemplateLiteral'],
                SwitchCase: 1,
            }],
            'no-plusplus': ['error', {allowForLoopAfterthoughts: true}],
            'object-curly-spacing': [2, 'never'],
            'vue/html-indent': ['error', 4],
            'no-underscore-dangle': 0,
            'arrow-parens': ['error', 'always'],
            'import/extensions': 0,
            'import/no-unresolved': 0,
            'prettier/prettier': 0,
            'comma-dangle': ['error', 'always-multiline'],
            'quotes': ['error', 'single'],
            'semi': ['error', 'always'],
            'quote-props': ['error', 'consistent-as-needed'],
            'key-spacing': ['error', {mode: 'strict'}],
            'max-len': 0,
            'prefer-destructuring': 0,
            'vue/singleline-html-element-content-newline': 0,
            'vue/max-attributes-per-line': ['error', {singleline: 8, multiline: 1}],
            'vue/no-multiple-template-root': 0,
            'no-multiple-empty-lines': ['error', {max: 2}],
            'no-console': ['error', {allow: ['warn', 'error']}],
            'vue/multi-word-component-names': 0,
            'vue/html-self-closing': ['error', {
                html: {
                    void: 'always',
                    normal: 'always',
                    component: 'always',
                },
                svg: 'always',
                math: 'always',
            }],
        },
    },
];