module.exports = {
	root: true,
	env: { browser: true, es2020: true },
	extends: [
		"eslint:recommended",
		"plugin:react/recommended",
		"plugin:react/jsx-runtime",
		"plugin:react-hooks/recommended",
	],
	ignorePatterns: ["dist", ".eslintrc.cjs"],
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaVersion: "latest",
		sourceType: "module",
		ecmaFeatures: {
			jsx: true,
			tsx: true,
		},
	},
	settings: { react: { version: "18.2" } },
	plugins: ["react-refresh"],
	rules: {
		"react/prop-types": "off",
		"react-refresh/only-export-components": [
			"warn",
			{ allowConstantExport: true },
		],
	},
};
