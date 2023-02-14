import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

export default ({ mode }) => {
    process.env = {...process.env, ...loadEnv(mode, process.cwd())};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
            port: parseInt(process.env.VITE_PORT),
        },
})
