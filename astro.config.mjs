import path from "node:path";
import { fileURLToPath } from "node:url";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

const root = path.dirname(fileURLToPath(import.meta.url));

// Static output is the default. The future Cloudflare deploy uploads `dist/`
// as Workers Assets — no adapter and no Worker until that step.
export default defineConfig({
	site: "https://osystems.com.br",
	output: "static",
	integrations: [react()],
	vite: {
		plugins: [tailwindcss()],
		resolve: {
			alias: {
				"@": path.resolve(root, "src"),
			},
		},
	},
});
