import { defineConfig, loadEnv } from 'vite';
import { resolve } from 'path';
import vue from '@vitejs/plugin-vue';
import dayjs from 'dayjs';
import pkg from './package.json';
import { visualizer } from 'rollup-plugin-visualizer';
import { vitePluginVersionMark } from 'vite-plugin-version-mark';
import legacy from '@vitejs/plugin-legacy';

const prod = process.env.NODE_ENV === 'production';

const { name, version } = pkg;
const __APP_INFO__ = {
    pkg: { name, version },
    lastBuildTime: dayjs().format('YYYY-MM-DD HH:mm:ss')
};

export default ({ mode }) =>
    defineConfig({
        plugins: [
            vue(),
            legacy({
                targets: ['defaults', 'not IE 11']
            }),
            visualizer({
                emitFile: false,
                open: true //如果存在本地服务端口，将在打包后自动展示
            }),
            vitePluginVersionMark({
                // name: 'test-app',
                // version: '0.0.1',
                ifGitSHA: true,
                ifShortSHA: true,
                ifMeta: true,
                ifLog: true,
                ifGlobal: true
            })
        ],
        server: {
            host: true,
            port: 8088,
            proxy: {}
        },
        resolve: {
            // 设置路径别名
            alias: {
                '@': resolve(__dirname, './src')
            }
        },
        base: './',
        define: {
            __APP_INFO__: JSON.stringify(__APP_INFO__)
        },
        build: {
            outDir: './dist', //打包输出路径   默认为 dist
            assetsDir: 'source', //指定生成静态资源的存放路径
            chunkSizeWarningLimit: 500
        },
        esbuild: {
            drop: mode === 'production' ? ['console', 'debugger'] : []
        }
    });
