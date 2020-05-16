module.exports = {
    "presets": [
        ["@babel/env", {
            corejs: 3,
            useBuiltIns: "usage",
        }],
        ["@babel/react"],
        [require("./babel.preset.pre-typescript")],
        ["babel-preset-typescript-vue", {
            allowDeclareFields: true,
        }],
        [require("./babel.preset.post-typescript")],
    ],
    "plugins": []
};
