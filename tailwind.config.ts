import type { Config } from "tailwindcss";

const config: Config = {
	darkMode: ["class"],
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/Components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		screens: {
			'sm': '640px',
			'md': '768px',
			'lg': '1325px',
			'xl': '1920px',
			'2xl': '2426px',
			'3xl': '3226px',
			'4xl': '4026px',
			'5xl': '4426px',
		},
		extend: {
			screens: {
				'sm': '640px',
				'md': '768px',
				'lg': '1325px',
				'xl': '1920px',
				'2xl': '2426px',
				'3xl': '3226px',
				'4xl': '4026px',
				'5xl': '4426px',
			},
			fontFamily: {
				sans: ['var(--font-inter)', 'sans-serif'],
				'plus-jakarta': ['var(--font-plus-jakarta-sans)', 'sans-serif'],
				'mono': ['var(--font-space-mono)', 'monospace'],
				'inter-var': ['var(--font-inter-variable)', 'sans-serif'],
			},
			colors: {
				'gray': '#2C2C2C',
				'gray2': '#393939',
				'gray3': '#898989',
				'light-blue': '#42AAFF',
				'blue': '#1B7DFA',
				'pale': '#F8F8F8',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				chart: {
					'1': 'hsl(var(--chart-1))',
					'2': 'hsl(var(--chart-2))',
					'3': 'hsl(var(--chart-3))',
					'4': 'hsl(var(--chart-4))',
					'5': 'hsl(var(--chart-5))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
};
export default config;
