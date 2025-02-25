module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'], // Define a pasta src como a raiz
        alias: {
          assets: './assets', // Alias para a pasta assets
        },
      },
    ],
  ],
};
