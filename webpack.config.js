const path = require("path");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

const isDevelopment = process.env.NODE_ENV !== "production";

module.exports = {
  mode: isDevelopment ? "development" : "production",
  entry: path.resolve(__dirname, "src", "index.js"), // 👈 punto de entrada
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "bundle.js",
    publicPath: "/" // 👈 importante para evitar MIME type errors
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react"
            ],
            plugins: [
              isDevelopment && require.resolve("react-refresh/babel")
            ].filter(Boolean)
          }
        }
      }
    ]
  },
  plugins: [
    isDevelopment && new ReactRefreshWebpackPlugin()
  ].filter(Boolean),
  devServer: {
    static: {
      directory: path.resolve(__dirname, "public")
    },
    hot: true,
    port: 3000 // 👈 cambia el puerto aquí
  },
  resolve: {
    extensions: [".js", ".jsx"]
  }
};
