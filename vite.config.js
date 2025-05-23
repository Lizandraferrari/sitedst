import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import ViteRestart from 'vite-plugin-restart'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: 
  [
    ViteRestart({
      restart: [
        'vite.config.js',
      ]
    })
    ,
    react()
  ],    
})
