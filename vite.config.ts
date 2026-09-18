import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  publicDir: 'public',
  // GitHub Pages 子路径配置，确保打包资源加载路径正确
  base: '/YAI/',
})
