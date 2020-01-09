module.exports = {
    "presets": [
        ["@babel/env", {
            corejs: 3,
            useBuiltIns: "usage",
        }],
        ["@babel/react"],
        ["babel-preset-typescript-vue"],
    ],
    "plugins": [
        ["@babel/plugin-proposal-decorators", {
            "legacy": true
        }],
        ["@babel/proposal-class-properties", {
            "loose": true
        }],
        ["@babel/plugin-proposal-optional-chaining"],
        ["@babel/proposal-object-rest-spread"],
    ]
};
