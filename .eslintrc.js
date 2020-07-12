module.exports = {
    parser: "@typescript-eslint/parser", // Specifies the ESLint parser
    parserOptions: {
        ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
        sourceType: "module", // Allows for the use of imports
        ecmaFeatures: {
            jsx: true // Allows for the parsing of JSX
        },
        project: './tsconfig.json',
        tsconfigRootDir: __dirname,
    },
    settings: {
        react: {
            version: "detect" // Tells eslint-plugin-react to automatically detect the version of React to use
        }
    },
    extends: [
        "eslint:recommended",
        "plugin:jest/recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
    ],
    plugins: [
        //"typescript",
        //"typescript/prettier",
        "@typescript-eslint", // Uses the recommended rules from the @typescript-eslint/eslint-plugin
        "react",
        "jest"
    ],
    env: {
        browser: true,
        node: true,
        es6: true,
        jest: true,
    },
    rules: {
        // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
        "quotes": "off",
        "@typescript-eslint/quotes": "error",
        "indent": "off",
        "@typescript-eslint/indent": "error",
        "no-return-await": "off",
        "@typescript-eslint/return-await": "error",
        "@typescript-eslint/array-type": "error",
        "semi": "off",
        "@typescript-eslint/semi": ["error", "always"],
        "@typescript-eslint/explicit-function-return-type": "off",
        "brace-style": "off",
        "@typescript-eslint/brace-style": [
            "error",
            "1tbs",
            { "allowSingleLine": true }
        ],
        "@typescript-eslint/restrict-template-expressions": [
            "warn",
            { allowNullish: true }
        ],
        "@typescript-eslint/naming-convention": [
            "error",
            {
                "selector": "variable",
                "types": ["boolean"],
                "format": ["PascalCase"],
                "prefix": ["is", "should", "has", "can", "did", "will"]
            },
            {
                selector: 'default',
                format: ['camelCase'],
                leadingUnderscore: 'allow',
                trailingUnderscore: 'allow',
            },
            {
                selector: 'variable',
                format: ['camelCase', 'UPPER_CASE'],
                leadingUnderscore: 'allow',
                trailingUnderscore: 'allow',
            },
            {
                selector: 'typeLike',
                format: ['PascalCase'],
            },
        ]
    },
};
