import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import stylistic from "@stylistic/eslint-plugin";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default tseslint.config({
	files: ["**/*.ts"],
	extends: [
		eslint.configs.recommended,
		...tseslint.configs.recommendedTypeChecked,
	],
	languageOptions: {
		parserOptions: {
			project: path.resolve(__dirname, "./tsconfig.json"), // Используем относительный путь и path.resolve
			tsconfigRootDir: __dirname,
		},
	},
	plugins: {
		"@stylistic": stylistic,
	},
	rules: {
		"@stylistic/semi": "error",
		"@typescript-eslint/no-unsafe-assignment": "error",
		"@typescript-eslint/no-explicit-any": "error",
		"@typescript-eslint/explicit-function-return-type": "off",
		"@typescript-eslint/explicit-module-boundary-types": "off",
		"@typescript-eslint/restrict-template-expressions": "off",
		"@typescript-eslint/restrict-plus-operands": "off",
		"@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
	},
	ignores: ["node_modules/**", "dist/**", "unsolved-exercises/**"],
});
