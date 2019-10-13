const merge = require("webpack-merge");
const base = require("./webpack.base");

module.exports = merge(base, {
    entry: {
        main: [
            "./scripts/main.js",
        ],
    },

    devtool: "eval",

    output: {
        filename: "js/[name].js",
    },

    module: {
        rules: [
            {
                test: /\.[tj]sx?$/,
                use: ["babel-loader"],
                exclude: /node_modules/,
            },
            {
                test: /\.scss$/,
                use: ["style-loader", "css-loader", "sass-loader"],
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
        ],
    },

    plugins: [],
});
