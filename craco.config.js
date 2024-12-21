// craco.config.js
module.exports = {
  style: {
    rules: [
      {
        test: /\.less$/,
        use: [
          {
            loader: require.resolve('style-loader'),
          },
          {
            loader: require.resolve('css-loader'),
          },
          {
            loader: require.resolve('less-loader'), // Compiles Less to CSS
            options: {
              lessOptions: {
                strictMath: true,
                noIeCompat: true,
              },
            },
          },
        ],
      },
    ],
  },
    webpack: {
    configure: (webpackConfig) => {
      webpackConfig.module.rules.push({
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      });
      return webpackConfig;
    },
  },
};


