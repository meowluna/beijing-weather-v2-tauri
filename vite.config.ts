import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
	base: './',
	plugins: [
		vue({
			template: {
				compilerOptions: {
					// 所有以 mdui- 开头的标签名都是 mdui 组件
					isCustomElement: (tag) => tag.startsWith('mdui-')
				}
			}
		}),
	],
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url))
		}
	},
	build: {
		rollupOptions: {
			output: {  //静态资源分类打包
				chunkFileNames: 'assets/js/[name]-[hash].js',
				entryFileNames: 'assets/js/[name]-[hash].js',
				assetFileNames: 'assets/[ext]/[name]-[hash].[ext]',

				manualChunks(id) { //静态资源拆分打包
					if (id.includes('node_modules')) {
						return id.toString().split('node_modules/')[1].split('/')[0].toString();
					}
				}

			}

		}
	}
})
