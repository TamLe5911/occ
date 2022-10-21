/* eslint-disable import/no-extraneous-dependencies */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
});

const baseUrl = '';
const cmsApiKey = '';
const apiEndpoint = ''
const { i18n, localePath } = require('./next-i18next.config');
module.exports = withBundleAnalyzer({
    poweredByHeader: false,
    trailingSlash: true,
    basePath: baseUrl,
    env: {
        baseUrl,
        cmsApiKey,
        apiEndpoint
    },
    reactStrictMode: true,
    i18n,

    // The starter code load resources from `public` folder with `router.basePath` in React components.
    // So, the source code is "basePath-ready".
    // You can remove `basePath` if you don't need it.
    reactStrictMode: true,
});