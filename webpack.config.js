const merge = require("webpack-merge");
const path = require("path");
const base = require("./webpack.base");

module.exports = merge(base, {
    devtool: "source-map",

    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 9966,
        writeToDisk: true,
        disableHostCheck: true,
        hot: false,
        inline: false,
        headers: {
            "Access-Control-Allow-Origin": "*",
        }
    },

    mode: "development",
});
