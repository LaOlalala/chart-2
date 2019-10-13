const {resolve} = require("path");
const webpack = require("webpack");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

const config = {
    resolve: {
        modules: [
            "node_modules",
        ],

        alias: {
            "@main": resolve(__dirname, "src/scripts/main"),
            "@std": resolve(__dirname, "src/scripts/std"),
        },

        extensions: [".js", ".jsx", ".ts", ".tsx", ".css"],
    },

    output: {
        path: resolve(__dirname, "dist"),
    },

    context: resolve(__dirname, "src"),

    mode: "development",

    module: {
        rules: [
            {
                test: /\.(png|jpg)$/,
                use: "url-loader?limit=15000",
            },
            {
                test: /\.svg$/,
                loader: "url-loader?limit=65536&mimetype=image/svg+xml&name=fonts/[name].[ext]",
            },
            {
                test: /\.woff$/,
                loader: "url-loader?limit=65536&mimetype=application/font-woff&name=fonts/[name].[ext]",
            },
            {
                test: /\.woff2$/,
                loader: "url-loader?limit=65536&mimetype=application/font-woff2&name=fonts/[name].[ext]",
            },
            {
                test: /\.[ot]tf$/,
                loader: "url-loader?limit=65536&mimetype=application/octet-stream&name=fonts/[name].[ext]",
            },
            {
                test: /\.eot$/,
                loader: "url-loader?limit=65536&mimetype=application/vnd.ms-fontobject&name=fonts/[name].[ext]",
            },
        ],
    },

    optimization: {
        splitChunks: {
            name: "common",
            minChunks: 2,
            chunks: "all"
        },
    },

    plugins: [
        new CleanWebpackPlugin({
                root: resolve(__dirname, "."),
                verbose: true,
                dry: false
            }
        ),

        new CopyWebpackPlugin(
            [
                {
                    from: resolve("./src/assets"),
                    to: resolve("./dist/"),
                },
            ]
        ),
    ],
};

module.exports = config;
