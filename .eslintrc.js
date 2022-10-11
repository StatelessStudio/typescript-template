module.exports = {
	"root": true,
	"parser": "@typescript-eslint/parser",
	"plugins": [
		"@typescript-eslint"
	],
	extends: [
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended"
	],
	parserOptions: {
		project: "./tsconfig.json",
		tsconfigRootDir: __dirname,
	},
	"rules": {
		"no-console": 1,
		"no-debugger": 1,
		"curly": 2,
		"indent": [2, "tab"],
		"max-len": [1, 80],
		"no-empty": 1,
		"@typescript-eslint/no-empty-interface": 1,
		"no-eval": 2,
		"@typescript-eslint/no-misused-new": "error",
		"no-trailing-spaces": 2,
		"no-irregular-whitespace": 2,
		"no-use-before-define": 2,
		"no-var": 2,
		"prefer-const": 1,
		"quotes": [2, "single"],
		"radix": 2,
		"semi": ["error", "always"],
		"brace-style": 0,
		"@typescript-eslint/brace-style": [2, "stroustrup"],
		"@typescript-eslint/no-empty-function": 0,
		"no-prototype-builtins": 1,
		"no-useless-escape": 1,
		"no-case-declarations": 1,
		"@typescript-eslint/ban-types": 1,
		"@typescript-eslint/no-namespace": 1,
		"@typescript-eslint/no-var-requires": 2,
		"@typescript-eslint/promise-function-async": 1,
		"@typescript-eslint/no-floating-promises": 2
	},
};
