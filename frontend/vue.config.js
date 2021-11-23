//requireでモジュール群をまとめたJSファイルを読み込む
const BundleTracker = require("webpack-bundle-tracker");

//モジュール定義
module.exports = {
  publicPath: "http://127.0.0.1:8080/",
  outputDir: "./dist/",
  transpileDependencies: ["vuetify"],

  chainWebpack: (config) => {
    //「複数のエントリーポイント間で利用している共通モジュールをバンドルしたファイル」を出力するための設定のこと。
    config.optimization.splitChunks(false);

    config.output.filename("bundle.js");

    config
      .plugin("BundleTracker")
      .use(BundleTracker, [{ filename: "./webpack-stats.json" }]);

    config.resolve.alias.set("__STATIC__", "static");

    config.devServer
      .hotOnly(true)
      .watchOptions({ poll: 1000 })
      .https(false)
      .disableHostCheck(true)
      .headers({ "Access-Control-Allow-Origin": ["*"] });
  },
};
