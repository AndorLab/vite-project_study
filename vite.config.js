import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";
import { getThemeVariables } from "antd/dist/theme";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
	build: {
		rollupOptions: {
			output: {
				entryFileNames: "index.js",
				assetFileNames: "index.css",
			},
		},
	},
	plugins: [reactRefresh()],
	css: {
		preprocessorOptions: {
			less: {
				javascriptEnabled: true,
				modifyVars: {
					...getThemeVariables({
						dark: true,
					}),
					...{
						"primary-color": "gree",
						"link-color": "#1DA57A",
						"border-radius-base": "2px",
					},
				},
			},
		},
	},
	server: {
		proxy: {
			"/api": {
				target: "http://jsonplaceholder.typicode.com/",
				changeOrigin: true,
				rewrite: (path) => path.replace(/^\/api/, ""),
			},
		},
	},
	resolve: {
		alias: [
			{
				find: "/^~/",
				replacement: path.resolve(__dirname, "src"),
			},
		],
	},
});
