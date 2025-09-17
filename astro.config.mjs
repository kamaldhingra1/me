// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightBlog from 'starlight-blog';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			plugins: [starlightBlog({
				title: {
    			 en: 'Blog',},
				postCount: 5,
				recentPostCount: 10,
			authors: {
				hideoo: {
				name: 'Kamal Dhingra',
				title: 'Cyber & AI Security',
				picture: '/hideoo.png', // Images in the `public` directory are supported.
				url: 'https://hideoo.dev',
				},
		},

		})],
			title: 'Kamal Dhingra',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', slug: 'guides/example' },
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
