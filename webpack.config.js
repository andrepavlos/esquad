const { resolve } = require("path");
const { DefinePlugin } = require("webpack");
const HtmlPlugin = require("html-webpack-plugin");

const [DEV, PROD] = ["development", "production"];
const { NODE_ENV = DEV } = process.env;
const IS_DEV = NODE_ENV === DEV;

const [SRC, DIST] = [
  resolve(__dirname, "client"),
  resolve(__dirname, "dist", "client")
];

switch (NODE_ENV) {
  case DEV:
  case PROD:
    break;

  default:
    throw new Error("NODE_ENV is invalid");
}

module.exports = {
  mode: NODE_ENV,
  context: SRC,
  resolve: {
    extensions: [".jsx", ".js"],
    modules: ["node_modules", SRC]
  },
  entry: "./index",
  output: {
    path: DIST,
    publicPath: "/"
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: SRC,
        use: ["babel-loader"]
      },

      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },

      {
        test: /\.(jpg|png)$/,
        loader: "file-loader",
        options: {
          name: "assets/[name].[ext]"
        }
      },

      {
        test: /\.svg$/,
        loader: "react-svg-loader"
      }
    ]
  },
  plugins: [
    new HtmlPlugin({ template: "./index.html" }),
    new DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify(NODE_ENV),
      IS_DEV: JSON.stringify(IS_DEV)
    })
  ],
  devServer: {
    historyApiFallback: true,
    stats: {
      colors: true,
      chunks: false,
      children: false,
      modules: false
    }
  }
};
