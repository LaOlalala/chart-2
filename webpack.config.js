const merge = require("webpack-merge");
const base = require("./webpack.base");

module.exports = merge(base, {
    entry: {
        "main": [
            "./main.js",
        ],
    },

    devtool: "eval",

    output: {
        filename: "js/[name].js",
    },

    plugins: [],
});
