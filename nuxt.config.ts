import path from 'path';
// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
	srcDir: './src/1-presentation',
	serverDir: './src/2-infrastructure/server',
	components: [
		{
			path: '~/Components',
		},
	],
	modules: [
		'@pinia/nuxt',
		'usebootstrap',
		'@nuxtjs/google-fonts',
		'nuxt-icon'
	],
	alias: {
		'@models': path.resolve(__dirname, './src/3-application/models'),
		'@stores': path.resolve(__dirname, './src/3-application/stores'),
		'@enums': path.resolve(__dirname, './src/3-application/enums'),
	},
	css: ['bootstrap/scss/bootstrap.scss'],
	routeRules: {
		'/': { isr: true },
		'/roteiro': { ssr: false }
	},
	pinia: {
		storesDirs: ['./src/3-application/stores/**'],
	},
	usebootstrap: {
		bootstrap: {
			prefix: ``,
		},
		html: {
			prefix: `B`,
		},
	},
	googleFonts: {
		families: {
			Inter: [400, 700, 900],
		},
	},
	devtools: { enabled: true },
	
});