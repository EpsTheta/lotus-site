import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Project: Lotus',
			logo: {
				src: "./src/assets/Lotus-Icon.png",
			},
			
			social: {
				github: 'https://github.com/Lotus-AU',

			},
			customCss: ["./src/style/custom.css"],
			sidebar: [
				{
					label: 'Introduction', link: '/introduction'
				},
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Installation', link: '/guides/install/' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});

