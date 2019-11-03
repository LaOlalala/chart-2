module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "node": true
    },
    "extends": ["eslint:recommended", "plugin:react/recommended"],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly",
        "$": "readonly"
    },
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaFeatures": {"jsx": true},
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": ["react"],
    "rules": {
        "max-len": [
            1,
            120
        ],
        "consistent-return": [
            1
        ],
        "import/extensions": [
            0
        ],
        "import/no-extraneous-dependencies": [
            0
        ],
        "import/no-unresolved": [
            0
        ],
        "import/no-webpack-loader-syntax": [
            0
        ],
        "indent": [
            2,
            4,
            {
                "SwitchCase": 1
            }
        ],
        "generator-star-spacing": [
            0
        ],
        "no-await-in-loop": [
            0
        ],
        "no-nested-ternary": [
            1
        ],
        "no-return-assign": [
            1
        ],
        "object-curly-spacing": [
            2,
            "never"
        ],
        "object-property-newline": [
            0
        ],
        "no-console": [
            0
        ],
        "no-mixed-operators": [
            0
        ],
        "no-bitwise": [
            0
        ],
        "no-plusplus": [
            0
        ],
        "no-restricted-syntax": [
            2,
            "ForInStatement",
            "LabeledStatement",
            "WithStatement"
        ],
        "quotes": [
            2,
            "double"
        ],
        "space-before-function-paren": [
            2,
            "never"
        ]
    },
    "settings": {"react": {"version": "detect"}},
    "overrides": [
        {
            "files": ["**/*.ts", "**/*.tsx"],
            "env": {
                "browser": true,
                "es6": true,
                "node": true
            },
            "extends": [
                "eslint:recommended",
                "plugin:react/recommended",
                "plugin:@typescript-eslint/eslint-recommended",
                "plugin:@typescript-eslint/recommended"
            ],
            "globals": {
                "Atomics": "readonly",
                "SharedArrayBuffer": "readonly",
                "$": "readonly"
            },
            "parser": "@typescript-eslint/parser",
            "parserOptions": {
                "ecmaFeatures": {"jsx": true},
                "ecmaVersion": 2018,
                "sourceType": "module",
                "project": "./tsconfig.json"
            },
            "plugins": ["react", "@typescript-eslint"],
            "rules": {
                "@typescript-eslint/no-explicit-any": [
                    0
                ],
                "max-len": [
                    1,
                    120
                ],
                "consistent-return": [
                    1
                ],
                "import/extensions": [
                    0
                ],
                "import/no-extraneous-dependencies": [
                    0
                ],
                "import/no-unresolved": [
                    0
                ],
                "import/no-webpack-loader-syntax": [
                    0
                ],
                "indent": [
                    2,
                    4,
                    {
                        "SwitchCase": 1
                    }
                ],
                "generator-star-spacing": [
                    0
                ],
                "no-await-in-loop": [
                    0
                ],
                "no-nested-ternary": [
                    1
                ],
                "no-return-assign": [
                    1
                ],
                "object-curly-spacing": [
                    2,
                    "never"
                ],
                "object-property-newline": [
                    0
                ],
                "no-console": [
                    0
                ],
                "no-mixed-operators": [
                    0
                ],
                "no-bitwise": [
                    0
                ],
                "no-plusplus": [
                    0
                ],
                "no-restricted-syntax": [
                    2,
                    "ForInStatement",
                    "LabeledStatement",
                    "WithStatement"
                ],
                "quotes": [
                    2,
                    "double"
                ],
                "space-before-function-paren": [
                    2,
                    "never"
                ]
            },
            "settings": {"react": {"version": "detect"}}
        }
    ]
};
