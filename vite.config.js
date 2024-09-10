import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve:{
    alias:{
      '@':path.resolve(__dirname,'src')  // 配置 @ 符号 指向src 目录 及其子目录
    }
  }
   // server: {
    //     port: '3000',           // 客户端的运行端口，此处也可以绑定vue运行的端口，当然也可以写在pycharm下
    //     host: 'www.luffycity.cn', // 客户端的运行地址，此处也可以绑定vue运行的域名，当然也可以写在pycharm下
    //     // 跨域代理
    //     proxy: {
    //         '/api': {
    //             // 凡是遇到 /api 路径的请求，都映射到 target 属性  /api/header/  ---> http://api.luffycity.cn:8000/header/
    //             target: 'http://api.luffycity.cn:8000/',
    //             changeOrigin: true,
    //             ws: true,    // 是否支持websocket跨域
    //             rewrite: path => path.replace(/^\/api/, '')
    //         }
    //     }
    // }
})
