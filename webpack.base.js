const {resolve} = require("path");
const fs = require('fs');
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const NunjucksWebpackPlugin = require("nunjucks-webpack-plugin");

const config = {
    context: resolve(__dirname, "src"),

    entry: {
        "main": [
            "./main.js",
        ],
    },

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
            {
                test: /\.[tj]sx?$/,
                use: ["babel-loader"],
                exclude: /node_modules/,
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    "css-loader",
                    "sass-loader"
                ],
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
        ],
    },

    output: {
        filename: "js/[name].js",
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
        }),

        new CopyWebpackPlugin(
            [
                {
                    from: resolve("./src/assets"),
                    to: resolve("./dist/"),
                },
            ]
        ),

        new MiniCssExtractPlugin({
            filename: "css/[name].css",
            chunkFilename: "css/[id].css",
        }),

        new NunjucksWebpackPlugin({
            templates: fs.readdirSync(resolve(__dirname, "./src/pages")).reduce((acc, file) => {
                const matches = file.match(/^([a-zA-Z0-9][a-zA-Z0-9_-]+)\.njk/);

                if (matches) {
                    return [...acc, {
                        from: `./src/pages/${file}`,
                        to: `./${matches[1]}.html`,
                    }]
                }

                return acc;
            }, []),
        })
    ],

    resolve: {
        modules: [
            "node_modules",
        ],

        alias: {
            "@main": resolve(__dirname, "src/scripts/main"),
            "@std": resolve(__dirname, "src/scripts/std"),
            "@styles": resolve(__dirname, "src/styles"),
        },

        extensions: [".js", ".jsx", ".ts", ".tsx", ".css", ".scss"],
    },
};

module.exports = config;
