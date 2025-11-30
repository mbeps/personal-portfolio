import nextCoreWebVitals from "eslint-config-next/core-web-vitals";

const config = [
	...nextCoreWebVitals,
	{
		// React Hooks plugin now ships additional React Compiler rules that the project is not using.
		// Disable them to keep parity with the previous lint surface while upgrading Next.js.
		rules: {
			"react-hooks/component-hook-factories": "off",
			"react-hooks/config": "off",
			"react-hooks/error-boundaries": "off",
			"react-hooks/gating": "off",
			"react-hooks/globals": "off",
			"react-hooks/immutability": "off",
			"react-hooks/incompatible-library": "off",
			"react-hooks/preserve-manual-memoization": "off",
			"react-hooks/purity": "off",
			"react-hooks/refs": "off",
			"react-hooks/set-state-in-effect": "off",
			"react-hooks/set-state-in-render": "off",
			"react-hooks/static-components": "off",
			"react-hooks/unsupported-syntax": "off",
			"react-hooks/use-memo": "off",
		},
	},
	{
		ignores: ["coverage/**"],
	},
];

export default config;
