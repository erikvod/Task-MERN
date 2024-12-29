import globals from "globals";
import pluginJs from "@eslint/js";
import js from "@eslint/js";


/** @type {import('eslint').Linter.Config[]} */
export default [
  {files: ["**/*.{js,mjs,cjs,jsx}"]},
  {files: ["**/*.js"], languageOptions: {sourceType: "commonjs"}},
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  js.configs.recommended,
  {
    rules: {
      "no-console": "warn",
      "no-unused-vars": "warn",
      "no-undef": "warn",
      "no-constant-condition": "warn",
      "no-unsafe-optional-chaining": "warn",
      "no-unsafe-negation": "warn",
    }
  }
];