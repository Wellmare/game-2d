module.exports = {
	env: {
		browser: true,
		es2021: true
	},
	extends: [
		'eslint:recommended',
		'standard-with-typescript',
		'plugin:@typescript-eslint/recommended'
	],
	overrides: [],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
		project: './tsconfig.json'
	},
	plugins: [
		'@typescript-eslint'
	],
	rules: {
		indent: [1, 'tab'],
		'no-tabs': 0,
		semi: 0,
		'@typescript-eslint/indent': 'off',
		'@typescript-eslint/semi': [2, 'always'],
		'@typescript-eslint/no-non-null-assertion': 'off',
		'no-console': 1
	}
};
