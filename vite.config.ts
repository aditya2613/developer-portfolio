import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  // GitHub Pages serves this site from https://<user>.github.io/<repo>/.
  // In GitHub Actions, GITHUB_REPOSITORY is "owner/repo" so we can derive base.
  base: (() => {
    if (!process.env.GITHUB_ACTIONS) return "/";
    const [owner, repo] = (process.env.GITHUB_REPOSITORY ?? "").split("/");
    // For a user/organization site repo named "<owner>.github.io", base should be "/".
    if (owner && repo && repo.toLowerCase() === `${owner.toLowerCase()}.github.io`)
      return "/";
    return `/${repo ?? ""}/`;
  })(),
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'three': ['three', 'three-stdlib'],
          'react-three': ['@react-three/fiber', '@react-three/drei'],
          'gsap': ['gsap'],
          'vendor': ['react', 'react-dom', 'react-router-dom']
        }
      }
    },
    chunkSizeWarningLimit: 1000,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    }
  },
  optimizeDeps: {
    include: ['three', 'gsap', 'lenis']
  }
});
