import { defineConfig, globalIgnores } from "eslint/config";

const eslintConfig = defineConfig([
	globalIgnores([
		"dist/**",
		".astro/**",
		"scaffold-tmp/**",
		".claude/**",
		".agents/**",
	]),
]);

export default eslintConfig;
