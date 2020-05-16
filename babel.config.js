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
        ["@babel/proposal-object-rest-spread"],
        ["@babel/plugin-proposal-optional-chaining"],
        ["@babel/plugin-proposal-nullish-coalescing-operator"],
    ]
};
