module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true,
    },
    extends: [
        'react-app',
        'react-app/jest',
        'plugin:react/recommended',
        'airbnb',
        'plugin:react/jsx-runtime',
        'prettier',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['react', 'react-hooks', '@typescript-eslint', 'prettier'],
    settings: {
        'import/resolver': {
            typescript: {},
        },
    },
    rules: {
        'no-undef': 'off',
        indent: 'off',
        'no-duplicate-imports': 'error',
        quotes: ['error', 'single'],
        semi: ['error', 'never'],
        'react/jsx-filename-extension': [
            1,
            {
                extensions: ['.tsx', '.jsx'],
            },
        ],
        'react/jsx-no-useless-fragment': [
            'warn',
            {
                allowExpressions: true,
            },
        ],
        'no-unused-vars': [
            'warn',
            {
                vars: 'all',
                args: 'after-used',
                ignoreRestSiblings: false,
            },
        ],
        'linebreak-style': 0,
        'no-plusplus': [
            'warn',
            {
                allowForLoopAfterthoughts: true,
            },
        ],
        'import/extensions': [
            'error',
            'always',
            {
                tsx: 'never',
                jsx: 'never',
                js: 'never',
                ts: 'never',
            },
        ],
    },
}
