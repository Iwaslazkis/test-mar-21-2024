import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({}) => {
  const config = { 
    plugins: [react()]
  }

  if (process.env.BUILD_COMBINED === "true" && process.env.CURRENT_BUILD === "storybook") {
    return { ...config,
      base: "/storybook"
    }
  }
  return { ...config,
    
  }
})