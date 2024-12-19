import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import ESLintConfig from "eslint-config-prettier"; // Ensure you import it correctly.
import typescriptEslint from "typescript-eslint";
import typescriptEstlintParser from "@typescript-eslint/parser"; // Assuming the parser is from typescript-eslint
import prettier from "eslint-plugin-prettier";
import noUsememoGenerics from "eslint-plugin-no-usememo-generics";

export default [
  // Ignores
  {
    ignores: ["dist"],
  },

  // ESLint JS recommended config
  js.configs.recommended,

  // TypeScript ESLint recommended config
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      parser: typescriptEstlintParser, // Add the TypeScript parser.
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: "module",
        ecmaFeatures: {
          jsx: true, // Enable JSX parsing for .tsx files
        },
      },
    },
    plugins: {
      "@typescript-eslint": typescriptEslint,
    },
  },

  // Prettier ESLint config
  ESLintConfig, // The default export

  // React-specific rules (Hooks and Refresh)
  {
    files: ["**/*.{ts,tsx,js,jsx}"],
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      prettier: prettier,
      "no-usememo-generics": noUsememoGenerics,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      ...prettier.configs.recommended.rules,
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
      "no-usememo-generics/enforce": "error",
    },
  },

  // TypeScript-specific rules (if needed for .tsx or .ts)
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
  },
];
