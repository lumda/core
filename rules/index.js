module.exports = {
    extends: [
        './best-practices',
        './errors',
        './node',
        './style',
        './variables',
        './es6',
        './imports',
    ].map(require.resolve),
    parserOptions: {
        sourceType: 'module',
        ecmaFeatures: {
            experimentalObjectRestSpread: true,
        },
    },
    rules: {
        strict: 'error',
    },
};
