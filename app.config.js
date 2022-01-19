export default () => ({
  expo: {
    name: 'test-1-19',
    slug: 'test-1-19',
    version: '1.0.0',
    orientation: 'portrait',
    icon: './assets/icon.png',
    extra: {
      eas: {
        API_URL:
          process.env.API_URL ||
          'NOT PROVIDED NOT PROVIDED NOT PROVIDED NOT PROVIDED NOT PROVIDED',
      },
    },
    splash: {
      image: './assets/splash.png',
      resizeMode: 'contain',
      backgroundColor: '#ffffff',
    },
    updates: {
      fallbackToCacheTimeout: 0,
      url: 'https://u.expo.dev/eebade72-f12a-4f8f-bb72-4c79a3ef1a10',
    },
    assetBundlePatterns: ['**/*'],
    ios: {
      supportsTablet: true,
      bundleIdentifier: 'jon.samp.testenvvar',
      buildNumber: '2',
    },
    android: {
      adaptiveIcon: {
        foregroundImage: './assets/adaptive-icon.png',
        backgroundColor: '#FFFFFF',
      },
    },
    web: {
      favicon: './assets/favicon.png',
    },
    runtimeVersion: {
      policy: 'sdkVersion',
    },
  },
});
