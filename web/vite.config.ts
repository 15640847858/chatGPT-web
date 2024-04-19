import { defineConfig } from 'vite'
import path from 'path'
import UnoCSS from 'unocss/vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite';
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: '192.168.63.126', // 设置本机的 IP 地址
    port: 5173 // 设置端口号，如果你想改变的话
  },
  plugins: [
    vue(),
    UnoCSS({ }),
    AutoImport({
      imports: ['vue'],
      dts: 'auto-imports.d.ts',
    }),
    Components({
      resolvers: [AntDesignVueResolver()],
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  }
})
