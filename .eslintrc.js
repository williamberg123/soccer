module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true,
	},
	extends: [
		'plugin:react/recommended',
		'airbnb',
	],
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: [
		'react',
	],
	rules: {
		'no-tabs': 'off',
		indent: 'off',
		'react/jsx-filename-extension': 'off',
		'react/jsx-indent': 'off',
		'react/react-in-jsx-scope': 'off',
		'react/jsx-curly-spacing': 'off',
		'array-bracket-spacing': 'off',
		camelcase: 'off',
		'max-len': 'off',
		'object-curly-newline': 'off',
		'react/jsx-indent-props': 'off',
		'react/jsx-one-expression-per-line': 'off',
		'react/require-default-props': 'off',
		'react/jsx-props-no-spreading': 'off',
		'array-callback-return': 'off',
		'consistent-return': 'off',
	},
};
