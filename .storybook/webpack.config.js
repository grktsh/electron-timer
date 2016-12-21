const path = require('path');

module.exports = {
  module: {
    loaders: [
      {
        test: /\.css$/,
        include: path.join(__dirname, '..'),
        loaders: [
          'style-loader',
          'css-loader?modules&importLoaders=1',
          'postcss-loader',
        ],
      },
    ],
  },
};
