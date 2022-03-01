import { defineConfig } from "vite";
import path from "path";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			pages: path.resolve(__dirname, "./src/pages"),
			components: path.resolve(__dirname, "./src/components"),
			routes: path.resolve(__dirname, "./src/routes"),
			constants: path.resolve(__dirname, "./src/constants"),
			hooks: path.resolve(__dirname, "./src/hooks"),
			layouts: path.resolve(__dirname, "./src/layouts"),
			styles: path.resolve(__dirname, "./src/styles"),
			assets: path.resolve(__dirname, "./src/assets"),
			utils: path.resolve(__dirname, "./src/utils"),
		},
	},
});
