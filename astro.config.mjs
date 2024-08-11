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
				discord: 'https://discord.gg/project-lotus-pl-1017870413545607209',
				rss: 'https://linktr.ee/lotusau',

			},
			customCss: ["./src/style/custom.css"],
			sidebar: [
				{
					label: 'Introduction', link: '/introduction'
				},
				{
					label: 'Guides',
					autogenerate: { directory: 'guides' },
				},
				{
					label: 'Features',
					autogenerate: { directory: 'Features' },
					
				},
				{
					label: 'Roles',
					autogenerate: { directory: 'roles' },
					
				},
				{
					label: 'Misc',
					autogenerate: { directory: 'Misc'},
				},
				
			],
		}),
	],
});

