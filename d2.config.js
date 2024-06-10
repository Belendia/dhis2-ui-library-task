const config = {
  type: 'app',
  name: 'training-app',
  title: 'Training App',
  pwa: {
    enable: true,
    caching: {
      // For the purposes of this demo, to simulate dashboard content:
      patternsToOmitFromAppShell: ['visualizations'],
      // To test precache filtering: (relative to PUBLIC_DIR)
      globsToOmitFromPrecache: ['exclude-from-precache/**'],
    },
  },

  entryPoints: {
    app: './src/App.js',
  },
};

module.exports = config;
