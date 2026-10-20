import js from "@eslint/js";
import astro from "eslint-plugin-astro";
import reactHooks from "eslint-plugin-react-hooks";
import { defineConfig, globalIgnores } from "eslint/config";
import globals from "globals";
import tseslint from "typescript-eslint";

const eslintConfig = defineConfig([
	globalIgnores(["dist/**", ".astro/**", ".claude/**", ".agents/**", "docs/**", "originals/**"]),
	js.configs.recommended,
	tseslint.configs.recommended,
	astro.configs.recommended,
	{
		files: ["**/*.{ts,tsx}"],
		plugins: { "react-hooks": reactHooks },
		rules: reactHooks.configs.recommended.rules,
		languageOptions: { globals: globals.browser },
	},
	{
		files: ["*.{js,mjs}"],
		languageOptions: { globals: globals.node },
	},
]);

export default eslintConfig;
