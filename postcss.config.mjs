// postcss.config.mjs
import tailwindcss from '@tailwindcss/postcss'; // Import from the dedicated PostCSS package
import autoprefixer from 'autoprefixer';

const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};
export default config;