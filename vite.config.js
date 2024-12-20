import { defineConfig } from "vite";
import viteImagemin from "vite-plugin-imagemin";

export default defineConfig({
  server: {
    open: true, // Automatically opens the browser
  },
  plugins: [
    viteImagemin({
      pngquant: {
        quality: [0.6, 0.8], // Set the PNG quality range (0-1)
      },
      optipng: {
        optimizationLevel: 7, // Maximum optimization for PNGs
      },
      mozjpeg: {
        quality: 75, // Adjust the quality of JPEGs (optional)
      },
      gifsicle: {
        optimizationLevel: 3, // Adjust for GIFs
      },
      svgo: {
        plugins: [{ removeViewBox: false }], // For SVG optimization
      },
    }),
  ],
  // Ensure Vite knows where to find static files
  publicDir: 'public', // The 'public' folder is where static assets like images and raw files are served from
  base: '/', // this tells Vite to use relative paths for assets
  build: {
    outDir: 'dist',  // Output directory for the build
    assetsDir: 'assets', // Directory where assets (like images) are placed in the build
  },
  resolve: {
    alias: {
      '/src': './src'
    },
  },
});
