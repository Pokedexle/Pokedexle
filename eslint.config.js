const eslint = require("@eslint/js");
const tseslint = require("typescript-eslint");
const angular = require("angular-eslint");

module.exports = tseslint.config(
    {
        ignores: ["dist/**", "coverage/**", ".angular/**", "node_modules/**"],
    },
    {
        files: ["src/**/*.ts"],
        extends: [eslint.configs.recommended, ...tseslint.configs.recommended, ...angular.configs.tsRecommended],
        processor: angular.processInlineTemplates,
        rules: {
            // A MODIFIER: prefix projet pour selectors Angular.
            "@angular-eslint/component-selector": [
                "error",
                { type: "element", prefix: "app", style: "kebab-case" },
            ],
            "@angular-eslint/directive-selector": [
                "error",
                { type: "attribute", prefix: "app", style: "camelCase" },
            ],

            // Nommage TypeScript.
            "@typescript-eslint/naming-convention": [
                "error",
                { selector: "default", format: ["camelCase"], leadingUnderscore: "allow" },
                { selector: "typeLike", format: ["PascalCase"] },
            ],
            "@typescript-eslint/no-unused-vars": [
                "warn",
                { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
            ],
        },
    },
    {
        files: ["src/**/*.html"],
        extends: [...angular.configs.templateRecommended],
        rules: {},
    },
);

