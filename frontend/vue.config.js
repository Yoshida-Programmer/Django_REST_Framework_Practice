//requireでモジュール群をまとめたJSファイルを読み込む
const BundleTracker = require("webpack-bundle-tracker");

//モジュール定義
module.exports = {
    publicPath: "http://127.0.0.1:8080/",
    outputDir: './dist/',
    transpileDependencies: ["vuetify"],
    
    chainWebpack: config => {

        //「複数のエントリーポイント間で利用している共通モジュールをバンドルしたファイル」を出力するための設定のこと。
        config.optimization
            .splitChunks(false)

        config
            .plugin('BundleTracker')
            .use(BundleTracker, [{filename: '../frontend/webpack-stats.json'}])

        config.resolve.alias
            .set('__STATIC__', 'static')

        config.devServer
            .public('http://0.0.0.0:8080')
            .host('0.0.0.0')
            .port(8080)
            .hotOnly(true)
            .watchOptions({poll: 1000})
            .https(false)
            .headers({"Access-Control-Allow-Origin": ["\*"]})
            }
        };