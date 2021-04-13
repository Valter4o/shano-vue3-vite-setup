import Vue from "@vitejs/plugin-vue";
const path = require("path");

const config = {
	plugins: [Vue()],
	alias: {
		"/@/": path.resolve(__dirname, "src"),
	},
};

export default config;
