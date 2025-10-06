// eslint.config.js
import js from "@eslint/js";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import globals from "globals";

export default [
  js.configs.recommended,
  {
    // applique à tous tes fichiers (inutile d'ajouter files: ["**/*.{js,jsx}"])
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: globals.browser,
      parserOptions: { ecmaFeatures: { jsx: true } },
    },
    plugins: { react, "react-hooks": reactHooks },
    rules: {
      // important : marque les variables utilisées dans le JSX comme "utilisées"
      "react/jsx-uses-vars": "error",

      // confort
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",

      // optionnel : autoriser les noms qui commencent par _
      "no-unused-vars": ["error", { varsIgnorePattern: "^_", argsIgnorePattern: "^_" }],
    },
    settings: { react: { version: "detect" } },
  },
];
