/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
	theme: {
		extend: {
			
			colors: {
				"brand-50": "var(--color-brand-50)",
				"brand-100": "var(--color-brand-100)",
				"brand-200": "var(--color-brand-200)",
				"brand-500": "var(--color-brand-500)",
				"brand-600": "var(--color-brand-600)",
				"brand-700": "var(--color-brand-700)",
				"brand-800": "var(--color-brand-800)",
				"brand-900": "var(--color-brand-900)",
				"grey-0": "var(--color-grey-0)",
				"grey-50": "var(--color-grey-50)",
				"grey-100": "var(--color-grey-100)",
				"grey-200": "var(--color-grey-200)",
				"grey-300": "var(--color-grey-300)",
				"grey-400": "var(--color-grey-400)",
				"grey-500": "var(--color-grey-500)",
				"grey-600": "var(--color-grey-600)",
				"grey-700": "var(--color-grey-700)",
				"grey-800": "var(--color-grey-800)",
				"grey-900": "var(--color-grey-900)",
				"blue-100": "var(--color-blue-100)",
				"blue-700": "var(--color-blue-700)",
				"green-100": "var(--color-green-100)",
				"green-700": "var(--color-green-700)",
				"yellow-100": "var(--color-yellow-100)",
				"yellow-700": "var(--color-yellow-700)",
				"silver-100": "var(--color-silver-100)",
				"silver-700": "var(--color-silver-700)",
				"indigo-100": "var(--color-indigo-100)",
				"indigo-700": "var(--color-indigo-700)",
				"red-100": "var(--color-red-100)",
				"red-700": "var(--color-red-700)",
				"red-800": "var(--color-red-800)",
			},
		},
	},
	plugins: [require("tailwindcss-animate")],
};
